export default function ProjectCard({ title, description, tag, color }) {
  return (
    <article className="project-card">
      <span className="project-tag" style={{ background: `${color}1A`, color: color }}>
        {tag}
      </span>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </article>
  );
}
