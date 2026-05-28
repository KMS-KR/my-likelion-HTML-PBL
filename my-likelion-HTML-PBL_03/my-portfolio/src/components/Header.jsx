export default function Header({ title, subtitle }) {
  return (
    <header className="hero-banner">
      <div className="hero-content">
        <div className="hero-chip">🐾</div>
        <div>
          <p className="hero-subtitle">{subtitle}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
}