import { motion } from "framer-motion";
import "./about.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <motion.div
      className="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      <div className="about-inner">
        <motion.div className="about-header" variants={fadeUp}>
          <div className="about-photo">
            <img src="/hero.jpeg" alt="Aayush Dangi" />
          </div>
          <div className="about-bio">
            <h1>About Me</h1>
            <p>
              I'm Aayush, a data science and machine learning enthusiast based in Ahmedabad.
              I started out as a full-stack web developer, and that foundation still shapes how I
              think — I care about building things end-to-end, not just running models in a notebook.
            </p>
            <p>
              These days I'm deep into data — cleaning it, understanding it, and extracting meaning
              from it. I'm currently learning deep learning and working on projects that sit at the
              intersection of real-world problems and ML. If there's a dataset involved, I want to
              know what story it's telling.
            </p>
            <div className="about-meta">
              <span>📍 Ahmedabad, India</span>
              <span>📊 Data Science & ML</span>
              <span>🌐 Full-Stack (prev.)</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={fadeUp}>
          <h2><span className="icon">💼</span> Projects</h2>
          <div className="timeline">
            {[
              {
                role: "Fitness Tracker ML",
                company: "Data Science · Completed",
                period: "2026",
                desc: "IMU wrist sensor data (acc + gyro) → Random Forest classifier for exercise detection (bench/squat/deadlift/row/OHP) + automated rep counting via peak detection. Full ML pipeline: outlier removal, feature engineering (LPF, PCA, FFT, K-Means), and LOPO cross-validation."
              },
              {
                role: "Health Insurance Cost Predictor",
                company: "Machine Learning · In Progress",
                period: "2026",
                desc: "Predicting individual health insurance charges using regression models. Exploring feature relationships between age, BMI, smoking habits, and regional factors to build an accurate cost estimator."
              },
              {
                role: "WertEra T-Shirt Printing",
                company: "Full-Stack Web · Completed",
                period: "2024",
                desc: "Drag & drop design customization, Stripe payment integration, and a secret admin dashboard with real-time sales tracking. Built with React, Node.js, and MongoDB."
              },
            ].map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <span className="timeline-role">{exp.role}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <span className="timeline-company">{exp.company}</span>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="about-section" variants={fadeUp}>
          <h2><span className="icon">🎓</span> Education</h2>
          <div className="edu-card">
            <span className="edu-degree">B.Tech — Computer Science & Engineering</span>
            <span className="edu-school">Currently Enrolled</span>
            <span className="edu-year">2022 – Present</span>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={fadeUp}>
          <h2><span className="icon">❤️</span> Interests</h2>
          <div className="tags">
            {["Machine Learning", "Deep Learning", "Data Analysis", "Feature Engineering", "Open Source", "Web Development", "Problem Solving"].map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}