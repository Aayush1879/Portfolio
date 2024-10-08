import './skill.scss';

export default function Skill() {
  const skills = [
    { name: 'Html', image: 'html.png' },
    { name: 'CSS', image: 'css.png' },
    { name: 'JavaScript', image: 'javascript.png' },
    { name: 'React', image: 'react.png' },
    { name: 'Node.js', image: 'node.jpeg' },
    { name: 'MongoDB', image: 'mongo.png' },
    { name: 'Express', image: 'express.png' },
    { name: 'TypeScript', image: 'type.png' },
    { name: 'Next Js', image: 'next.png' },
    { name: 'Django', image: 'django.jpeg' },
    { name: 'Prisma', image: 'prisma.jpeg' },
    { name: 'Python', image: 'python.jpeg' },
  ];

  return (
    <div className="skillSet">
      <h2>My Skill Set</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
