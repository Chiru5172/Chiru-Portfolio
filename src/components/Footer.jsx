import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { personal } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>CR<span className="footer__logo-bracket">/&gt;</span>
          </span>
          <p className="footer__tagline">
            Building impactful digital experiences, one line at a time.
          </p>
        </div>

        <nav className="footer__nav">
          {['hero', 'about', 'skills', 'projects', 'certifications', 'contact'].map((s) => (
            <Link key={s} to={s} smooth duration={500} offset={-80} className="footer__nav-link">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer__social" aria-label="GitHub"><FaGithub /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer__social" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${personal.email}`} className="footer__social" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Made with <FaHeart className="footer__heart" /> by{' '}
          <strong>Gujjula Chirudeep Reddy</strong> &nbsp;·&nbsp; © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
