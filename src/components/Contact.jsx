import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personal } from '../data/portfolio';
import './Contact.css';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <FaPhone />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: personal.location, href: null },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/Chiru5172', href: personal.github },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Gujjula Chirudeep Reddy', href: personal.linkedin },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__orb-1" />
      <div className="contact__orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an opportunity or project in mind? I'd love to hear from you.
          </p>
          <div className="glow-divider" />
        </motion.div>

        <div className="contact__grid">
          {/* Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card contact__info-card">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-desc">
                Feel free to reach out through any of the channels below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="contact__info-list">
                {contactInfo.map((item, i) => (
                  <div key={i} className="contact__info-item">
                    <div className="contact__info-icon">{item.icon}</div>
                    <div className="contact__info-text">
                      <div className="contact__info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact__info-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact__social-row">
                <a href={personal.github} target="_blank" rel="noreferrer" className="contact__social-btn">
                  <FaGithub /> GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact__social-btn">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form className="glass-card contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary contact__submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✓ Message Opened in Mail App!' : <><FaPaperPlane /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
