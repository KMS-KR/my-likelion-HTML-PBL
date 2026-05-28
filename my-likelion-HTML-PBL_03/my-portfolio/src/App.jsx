import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'];
  const members = [
    { name: '김사자', role: 'FE', emoji: '🦁', color: '#FF6000', bio: '프론트엔드 개발자를 꿈꾸는 아기사자' },
    { name: '이멋사', role: 'BE', emoji: '🐯', color: '#61DAFB', bio: '백엔드와 API를 책임지는 멋사' },
    { name: '박개발', role: 'Design', emoji: '🎨', color: '#A855F7', bio: '디자인 감성을 더하는 개발자' },
  ];

  const projects = [
    { title: '멋사 클론', description: 'HTML/CSS로 만든 첫 번째 웹사이트', tag: '웹 클론', color: '#FF6000' },
    { title: '계산기 앱', description: 'JavaScript로 만든 인터랙티브 계산기', tag: 'JavaScript', color: '#61DAFB' },
  ];

  return (
    <div className="app-shell">
      <Header title="김사자의 포트폴리오" subtitle="프론트엔드 개발자를 꿈꾸는 아기사자" />
      <main className="content-area">
        <section className="summary-section">
          <SectionTitle title="팀원 소개" />
          <div className="member-grid">
            {members.map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="skills-panel">
          <SectionTitle title="보유 스킬" />
          <SkillList skills={skills} />
        </section>

        <section className="projects-panel">
          <SectionTitle title="프로젝트" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;