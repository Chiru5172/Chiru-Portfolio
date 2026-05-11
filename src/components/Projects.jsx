import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={`project-card${project.badge ? ' project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        ref={cardRef}
        className="project-card__inner glass-card"
        style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient top stripe */}
        <div
          className="project-card__stripe"
          style={{ background: project.gradient }}
        />

        <div className="project-card__content">
          <div className="project-card__header">
            <div className="project-card__icon">{project.icon}</div>
            <div className="project-card__links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="project-card__title-wrap">
            <div className="project-card__title-row">
              <h3 className="project-card__title">{project.title}</h3>
              {project.badge && (
                <span className="project-card__badge">{project.badge}</span>
              )}
            </div>
            <p className="project-card__subtitle">{project.subtitle}</p>
          </div>

          <p className="project-card__desc">{project.description}</p>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="projects section">
      <div className="projects__orb" />

      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            7 projects spanning AI, Full Stack, IoT, Big Data & Healthcare
          </p>
          <div className="glow-divider" />
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="projects__github-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/Chiru5172"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> View All 27+ Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
