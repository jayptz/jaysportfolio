// src/page/AboutMe.jsx
export default function AboutMe() {
  return (
    <div
      style={{
        maxHeight: '100vh',
        overflowY: 'auto',
        padding: '2rem',
        fontFamily: "'Quicksand'",
        backgroundColor: '#f7f7f0',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '6rem', marginBottom: '2rem', fontWeight: 'bold' }}>About Me</h1>
      <p style={{ textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '1000px' }}>
        Hi, I'm Jay — a Computer Science student at Wilfrid Laurier University and a full-stack developer passionate about building software that bridges innovation and usability.
      </p>

      <p style={{ textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '1000px' }}>
        I've had the opportunity to develop real-world solutions across a variety of domains, from research collaboration tools to mobile learning apps and live sports trackers. Most notably, I co-built ResDex, a platform helping students publish academic work and connect with peers and institutions. I've also launched a G1 prep app on the Play Store and built AI-integrated mental health tools recognized at hackathons.
      </p>

      <p style={{ textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '1000px' }}>
        I love working across the stack — React, Firebase, AWS, and Python are my current go-to tools — but I'm just as excited about clean design, reliable infrastructure, and the user experience as I am about backend logic.
      </p>

      <p style={{ textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '1000px' }}>
        Outside of coding, you'll probably find me keeping up with AI advancements, building side projects for fun, or exploring new tools that push the boundary of what's possible with tech.
      </p>
    </div>
  );
}
