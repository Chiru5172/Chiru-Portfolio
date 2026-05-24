import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolio';
import './Hero.css';

const roles = ["Software Engineer", "Full Stack Developer", "Java Enthusiast", "Problem Solver"];

function useTypewriter(words, typingSpeed = 80, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    if (!deleting && charIdx <= current.length) {
      timeout.current = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
    } else if (!deleting && charIdx > current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => setCharIdx((c) => c - 1), typingSpeed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, pauseTime]);

  return displayed;
}

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section id="hero" className="hero section">
      {/* Animated background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Particle grid */}
      <div className="hero__grid" />

      <div className="container hero__inner">
        {/* LEFT — Text */}
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">👋 Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Gujjula
            <br />
            <span className="hero__name-last">Chirudeep Reddy</span>
          </motion.h1>

          <motion.div
            className="hero__role-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="hero__role-prefix">I'm a&nbsp;</span>
            <span className="hero__role-typed">{typedRole}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {personal.objective}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn btn-primary">
                View Projects <FaArrowDown />
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1AvqzOah_i4Jm9JVYMcu8tuEraim3x_GC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-resume"
            >
              <FaDownload /> Download Resume
            </a>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn btn-outline">
                Contact Me <FaEnvelope />
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href={personal.github} target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personal.email}`} className="hero__social" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href={`tel:${personal.phone}`} className="hero__social" aria-label="Phone">
              <FaPhone />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Avatar card */}
        <motion.div
          className="hero__avatar-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <div className="hero__avatar-initials">CR</div>
            </div>
          </div>

          {/* Floating stat pills */}
          <motion.div
            className="hero__stat hero__stat--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__stat-icon">🏆</span>
            <div>
              <div className="hero__stat-val">8.48</div>
              <div className="hero__stat-label">CGPA</div>
            </div>
          </motion.div>

          <motion.div
            className="hero__stat hero__stat--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="hero__stat-icon">💻</span>
            <div>
              <div className="hero__stat-val">27+</div>
              <div className="hero__stat-label">Repositories</div>
            </div>
          </motion.div>

          <motion.div
            className="hero__stat hero__stat--side"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <span className="hero__stat-icon">📚</span>
            <div>
              <div className="hero__stat-val">4+</div>
              <div className="hero__stat-label">Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Link to="about" smooth duration={500} offset={-80} style={{ cursor: 'pointer' }}>
          <FaArrowDown className="hero__scroll-icon" />
          <span>Scroll Down</span>
        </Link>
      </motion.div>
    </section>
  );
}
