export default function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  );
}