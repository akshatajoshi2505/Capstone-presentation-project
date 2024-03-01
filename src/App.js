// src/App.js

import React from 'react';
import './App.css';

const TeamMember = ({ name, linkedin, points,resume, image }) => (
  <a href={linkedin} target="_blank" className="member-link" rel="noreferrer">
    <div className="member-card">
      <img src={`images/${image}`} alt={name} />
      <div className="member-info">
        <h2>{name}</h2>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div>
        <a href={resume} target="_blank" className="resume-link" rel="noreferrer">Resume</a>
      </div>
    </div>
  </a>
);

function App() {
  const akshataPoints = [
    'Robust skill set in web development, showcasing expertise in JavaScript, Node.js, React.js, Angular.js, HTML, CSS, and AJAX.',
    'Proficiency in programming languages such as PHP, Java, and Python, with a strong grasp of web services like HTTP, SOAP, REST, and XSD.',
    'Experience extends to utilizing various web development servers, including JBoss, Apache Tomcat, XAMPP, and Nginx, and excels in database tools and queries, DBMS, MySQL Server, PL/SQL, and MongoDB.',
    'Adept at leveraging IDEs like NetBeans, Eclipse, IntelliJ, VS Code, Sublime, and Notepad++.'
  ];

  const ishaPoints = [
    'With a passion for technology and a dedication to continual learning, I bring a versatile skill set to the table.',
    'My expertise spans various technologies, including JavaScript, Node.js, HTML, CSS, Python, R, Java, PHP, Android application development, SQL, and MySQL.',
    'Driven by a curiosity for new ideas and a desire to contribute meaningfully, I thrive in dynamic environments where innovation is valued.',
    'I approach challenges with a creative mindset, always seeking to expand my knowledge and skills.',
    'Committed to personal and professional growth, I eagerly embrace new opportunities and strive to make a positive impact in the ever-evolving landscape of technology.',
  ];

  const dishaPoints = [
    'Proficient in Python, Node.js, HTML, CSS, Firebase, and RESTful API development.',
    'Eager to apply skills in crafting innovative solutions.',
    'Committed to continuous learning and growth in the dynamic tech landscape.',
    'Let\'s collaborate and turn ideas into reality together.',
  ];

  const sagarPoints = [
    'Technical proficiency spans areas such as data analysis, business process analysis, and implementation of advanced analytics using statistical modeling techniques.',
    'technical skills include proficiency in Python, SQL, HTML, CSS, and JS, showcasing his innovative and solution-oriented approach, and he has also demonstrated expertise in SharePoint intranet development.',
    'Experienced in IT systems protection, restoration, and advisory services for efficiency improvement.',
    'Robust background in project management, team leadership, and has developed dynamic Floor Planning and Space Planning projects using JDA Software.',
  ];

  return (
    <div>
      <div className="container">
        <header>
          <img src="Innova8_logo.png" alt="Innova8 Logo" className="logo" />
        </header>

        <section>
          <TeamMember
            name="Akshata Joshi(TL)"
            linkedin="https://www.linkedin.com/in/25-akshata-joshi/"
            points={akshataPoints}
            image="Akshata.jpeg"
            resume="Resume__Akshata Joshi.pdf"
          />

          <TeamMember
            name="Isha Nakil"
            linkedin="https://www.linkedin.com/in/isha-nakil-6085b31b2/"
            points={ishaPoints}
            image="Isha.jpeg"
            resume="ISHA_RESUME.pdf"
          />

          <TeamMember
            name="Disha Patel"
            linkedin="https://www.linkedin.com/in/disha-patel"
            points={dishaPoints}
            image="Disha.jpg"
            resume="DISHA_Resume .pdf"
          />

          <TeamMember
            name="Sagar Karkera"
            linkedin="https://www.linkedin.com/in/sagar-karkera-165251106/"
            points={sagarPoints}
            image="Sagar.jpeg"
            resume="Resume Sagar Karkera S.pdf"
          />
        </section>
      </div>

      <footer>
        <p>Contact us: akshatajoshi2505@gmail.com | Phone: +1 (437) 599-1799</p>
      </footer>
    </div>
  );
}

export default App;
