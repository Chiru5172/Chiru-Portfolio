import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data/portfolio';
import './Certifications.css';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="certs section">
      <div className="certs__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-subtitle">
            Credentials and achievements earned through continuous learning
          </p>
          <div className="glow-divider" />
        </motion.div>

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="cert-card__icon">{cert.icon}</div>
              <div className="cert-card__body">
                <div className="cert-card__name">{cert.name}</div>
                <div className="cert-card__issuer">{cert.issuer}</div>
              </div>
              <div className="cert-card__badge">✓</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
