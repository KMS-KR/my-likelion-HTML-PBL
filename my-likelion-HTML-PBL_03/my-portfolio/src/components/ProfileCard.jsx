export default function ProfileCard({ name, role, emoji, color, bio }) {
  return (
    <article className="profile-card" style={{ borderColor: color }}>
      <div className="profile-emoji">{emoji}</div>
      <div className="profile-card-body">
        <h3>{name}</h3>
        <p className="profile-role">{role}</p>
        {bio && <p className="profile-bio">{bio}</p>}
      </div>
    </article>
  );
}
