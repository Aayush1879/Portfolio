import { motion } from "framer-motion";
import './project.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    id: 1,
    title: "Fitness Tracker ML",
    img: "./Fitness_tracker.png",
    badge: "🤖 ML · Completed",
    desc: "Wrist IMU sensor (accelerometer + gyroscope) data → Random Forest classifier that identifies barbell exercises and counts reps automatically. Full pipeline: outlier removal via Chauvenet's criterion, 100+ engineered features (LPF, PCA, FFT, K-Means), and leave-one-participant-out validation.",
    tags: ["Python", "Scikit-learn", "Pandas", "SciPy", "NumPy"],
    demo: null,
    github: "https://github.com/Aayush1879/Workout_tracker_ML",
  },
  {
    id: 2,
    title: "Health Insurance Cost Predictor",
    img: "Insurance-pred.png",
    badge: "🔬 ML · In Progress",
    desc: "Predicting individual health insurance charges using regression models. Analysing feature relationships between age, BMI, smoking status, and regional factors to build an accurate cost estimator.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    demo: null,
    github: "https://github.com/Aayush1879/Insurance_Predictor.git",
  },
  {
    id: 3,
    title: "WertEra T-Shirt Printing",
    img: "./project(4).png",
    badge: "🌐 Full-Stack · Completed",
    desc: "Drag & drop custom design tool with T-shirt color/size/style customization. Stripe payment integration, purchase summary, and a secret admin dashboard with real-time sales tracking.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7247329298334834688/",
    github: "https://github.com/Aayush1879/wertEra.git",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    img: "./project(3).png",
    badge: "🌐 Full-Stack · Completed",
    desc: "Full-stack listings platform with a responsive UI and a robust Node.js/Express backend. Features MongoDB storage, dynamic routes, and RESTful APIs.",
    tags: ["Node.js", "Express", "MongoDB", "HTML/CSS"],
    demo: "https://fullstack-project-s6lq.onrender.com/listings",
    github: "https://github.com/Aayush1879/fullStack-project.git",
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

export default function Project() {
  return (
    <motion.div
      className="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.div className="projects-header" variants={fadeUp}>
        <h1>Projects</h1>
        <p>A selection of things I've built and explored.</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div className="project-card" key={project.id} variants={fadeUp} whileHover={{ y: -4 }}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                    <GitHubIcon fontSize="small" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                    <OpenInNewIcon fontSize="small" />
                  </a>
                )}
              </div>
            </div>
            <div className="project-body">
              <div className="project-title-row">
                <div>
                  <span className="project-badge">{project.badge}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"><GitHubIcon fontSize="small" /></a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer"><OpenInNewIcon fontSize="small" /></a>
                  )}
                </div>
              </div>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
