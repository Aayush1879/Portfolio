import { motion } from "framer-motion";
import './certificate.scss';

const certs = [
  {
    id: 1,
    title: "Machine Learning with Python",
    issuer: "Coursera",
    img: "🤖",
    date: "2026",
    credId: "MLP-2026",
    ref: "./Coursera_Machine_Learning.pdf",
    img2: "./ML_certi.png",
  },
  {
    id: 2,
    title: "Frontend Development",
    issuer: "Coursera",
    img: "💻",
    date: "2023",
    credId: "FED-2023",
    ref: "./certificate(coursera).pdf",
    img2: "./certi(1).png",
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    img: "🎓",
    date: "2024",
    credId: "FSWD-2024",
    ref: "./COURSERA_CERTIFICATE.pdf",
    img2: "./certi(4).png",
  },
  {
    id: 4,
    title: "Java Programming 2 (Advanced)",
    issuer: "Coursera",
    img: "🔷",
    date: "2023",
    credId: "JAVA2-2023",
    ref: "./Inheritance certi.pdf",
    img2: "./certi(3).png",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Certificate() {
  return (
    <motion.div
      className="certificates"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.div className="cert-header" variants={fadeUp}>
        <div className="cert-badge">🏅 Professional Credentials</div>
        <h1>Certifications</h1>
        <p>Industry-recognized certifications that validate my expertise in web development and machine learning.</p>
      </motion.div>

      <div className="cert-grid">
        {certs.map((cert) => (
          <motion.div className="cert-card" key={cert.id} variants={fadeUp} whileHover={{ y: -3 }}>
            <div className="cert-card-top">
              <div className="cert-icon">{cert.img}</div>
              <div className="cert-info">
                <span className="cert-title">{cert.title}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>
            <div className="cert-meta">
              <span>📅 {cert.date}</span>
              <span>🔖 {cert.credId}</span>
            </div>
            <a href={cert.ref} target="_blank" rel="noreferrer" className="cert-link">
              View Credential ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
