import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal, education } from '../data/portfolio';
import './About.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="about section">
      {/* Background accent */}
      <div className="about__orb" />

      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-tag" variants={itemVariants}>Who I Am</motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
          <div className="glow-divider" />
        </motion.div>

        <div className="about__grid">
          {/* Info Card */}
          <motion.div
            className="glass-card about__info-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__objective-badge">
              <span>🎯 Objective</span>
            </div>
            <p className="about__objective">{personal.objective}</p>

            <div className="about__contact-list">
              <div className="about__contact-item">
                <FaMapMarkerAlt className="about__contact-icon" />
                <span>{personal.location}</span>
              </div>
              <div className="about__contact-item">
                <FaPhone className="about__contact-icon" />
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
              <div className="about__contact-item">
                <FaEnvelope className="about__contact-icon" />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="about__contact-item">
                <FaGithub className="about__contact-icon" />
                <a href={personal.github} target="_blank" rel="noreferrer">github.com/Chiru5172</a>
              </div>
              <div className="about__contact-item">
                <FaLinkedin className="about__contact-icon" />
                <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </div>
            </div>

            {/* Status chips */}
            <div className="about__status-chips">
              <div className="about__chip about__chip--green">
                <span className="about__chip-dot" />
                Open to Opportunities
              </div>
              <div className="about__chip about__chip--blue">
                📍 Hyderabad
              </div>
            </div>

            {/* Currently working on */}
            <div className="about__currently">
              <div className="about__currently-label">🔭 Currently Working On</div>
              <div className="about__currently-tags">
                {personal.currentlyWorking.slice(0, 6).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="about__currently">
              <div className="about__currently-label">🌱 Currently Learning</div>
              <div className="about__currently-tags">
                {personal.currentlyLearning.map((t) => (
                  <span key={t} className="tag" style={{ borderColor: 'rgba(34,211,238,0.4)', color: 'var(--color-secondary)' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="about__edu-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="about__edu-heading">
              <span className="section-tag" style={{ display: 'inline-block', marginBottom: '12px' }}>Education</span>
            </h3>

            <div className="about__timeline">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="about__timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                >
                  <div className="about__timeline-icon">{edu.icon}</div>
                  <div className="about__timeline-line" />
                  <div className="glass-card about__timeline-card">
                    <div className="about__timeline-header">
                      <span className="about__timeline-period">{edu.period}</span>
                    </div>
                    <div className="about__timeline-degree">{edu.degree}</div>
                    <div className="about__timeline-institution">{edu.institution}</div>
                    <div className="about__timeline-score">{edu.score}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
