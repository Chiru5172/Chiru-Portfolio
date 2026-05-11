import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, skillBars } from '../data/portfolio';
import './Skills.css';

const categories = [
  { key: 'languages', label: '💻 Languages', color: '#7c3aed' },
  { key: 'frameworks', label: '⚙️ Frameworks', color: '#22d3ee' },
  { key: 'tools', label: '🛠️ Tools', color: '#f59e0b' },
  { key: 'databases', label: '🗄️ Databases', color: '#4ade80' },
  { key: 'cloud', label: '☁️ Cloud', color: '#fb923c' },
  { key: 'other', label: '🔧 Other', color: '#ec4899' },
];

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="skill-bar__wrap">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          style={{ '--bar-color': color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('languages');

  return (
    <section id="skills" className="skills section">
      <div className="skills__bg-orb" />

      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with on a daily basis</p>
          <div className="glow-divider" />
        </motion.div>

        <div className="skills__grid">
          {/* Left – Skill bars */}
          <motion.div
            className="skills__bars"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card skills__bars-card">
              <h3 className="skills__bars-title">Proficiency Levels</h3>
              {skillBars.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={0.1 * i} />
              ))}
            </div>
          </motion.div>

          {/* Right – Category chips */}
          <motion.div
            className="skills__categories"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Category tabs */}
            <div className="skills__tabs">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`skills__tab ${activeCategory === cat.key ? 'skills__tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{ '--tab-color': cat.color }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Chip grid */}
            <div className="glass-card skills__chip-card">
              <motion.div
                key={activeCategory}
                className="skills__chips"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {skills[activeCategory].map((skill) => (
                  <motion.span
                    key={skill}
                    className="skills__chip"
                    whileHover={{ scale: 1.08 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Soft skills */}
            <div className="glass-card skills__soft-card">
              <h4 className="skills__soft-title">🤝 Soft Skills</h4>
              <div className="skills__soft-chips">
                {skills.soft.map((s) => (
                  <span key={s} className="skills__soft-chip">{s}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card skills__lang-card">
              <h4 className="skills__soft-title">🌐 Languages</h4>
              <div className="skills__soft-chips">
                {skills.languages_human.map((l) => (
                  <span key={l} className="skills__soft-chip skills__lang-chip">{l}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
