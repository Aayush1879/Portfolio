import { motion } from 'framer-motion';
import './skill.scss';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skill() {
  return (
    <motion.div
      className="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.div className="skills-header" variants={fadeUp}>
        <h1>Skills</h1>
        <p>Technologies and tools I work with.</p>
      </motion.div>

      <div className="skills-section-label">Core Focus</div>
      <div className="skills-primary">
        <motion.div className="skill-primary-card" variants={fadeUp}>
          <span className="skill-emoji-lg">🐍</span>
          <div>
            <span className="skill-name">Python</span>
            <span className="skill-label">Primary Language</span>
          </div>
        </motion.div>
        <motion.div className="skill-primary-card" variants={fadeUp}>
          <span className="skill-emoji-lg">🤖</span>
          <div>
            <span className="skill-name">Machine Learning</span>
            <span className="skill-label">Primary Focus</span>
          </div>
        </motion.div>
      </div>

      <div className="skills-section-label" style={{marginTop: '24px'}}>Data Science Stack</div>
      <div className="skills-grid">
        {[
          { name: 'NumPy / Pandas', emoji: '🔢' },
          { name: 'Scikit-learn', emoji: '⚙️' },
          { name: 'Matplotlib', emoji: '📊' },
          { name: 'Seaborn', emoji: '🎨' },
          { name: 'SciPy', emoji: '🧪' },
          { name: 'Deep Learning', emoji: '🧠' },
        ].map((skill) => (
          <motion.div className="skill-card" key={skill.name} variants={fadeUp} whileHover={{ scale: 1.02 }}>
            <span className="skill-emoji">{skill.emoji}</span>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="skills-section-label" style={{marginTop: '24px'}}>Web Development</div>
      <div className="skills-grid">
        {[
          { name: 'React', image: 'react.png' },
          { name: 'Node.js', image: 'node.jpeg' },
          { name: 'JavaScript', image: 'javascript.png' },
          { name: 'MongoDB', image: 'mongo.png' },
          { name: 'Next.js', image: 'next.png' },
          { name: 'TypeScript', image: 'type.png' },
        ].map((skill) => (
          <motion.div className="skill-card" key={skill.name} variants={fadeUp} whileHover={{ scale: 1.02 }}>
            <img src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}