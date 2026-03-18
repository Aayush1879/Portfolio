import { motion } from "framer-motion";
import './hero.scss';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-content">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.span className="hello-tag" variants={item}>Hello, I'm</motion.span>
          <motion.h1 variants={item}>Aayush Dangi</motion.h1>
          <motion.h2 variants={item}>Data Science & ML Developer</motion.h2>
          <motion.p variants={item}>
            Turning data into decisions. Passionate about machine learning, deep learning,
            and building things end-to-end. Currently working on real-world ML projects.
          </motion.p>
          <motion.div className="hero-buttons" variants={item}>
            <a href="#Projects" className="btn btn-primary">View Work ↓</a>
            <a href="/Aayush_CV_Final (1).pdf" download className="btn btn-secondary">⬇ Resume</a>
            <a href="#Contact" className="btn btn-ghost">Get in Touch</a>
          </motion.div>
          <motion.div className="hero-stats" variants={item}>
            <div className="stat"><span className="num">5+</span><span className="label">Projects</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="num">4+</span><span className="label">Certificates</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="num accent">Open</span><span className="label">Source</span></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="image-ring">
            <img src="/hero1.jpg" alt="Aayush Dangi" />
          </div>
          <div className="available-badge">
            <span className="dot" />
            Available for work
          </div>
        </motion.div>
      </div>
    </div>
  );
}