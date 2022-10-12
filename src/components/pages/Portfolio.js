import React, { useState } from 'react';
import Project from '../Project';

export default function Portfolio() {
const [projects, setProjects] = useState([
  {
    id: 1,
    title: 'Tech Blog',
    deployLink: 'https://arcane-inlet-77522.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Tech-Blog',
    image: '../assets/images/techBlog.png',
  },
  {
    id: 2,
    title: 'Text Editor',
    deployLink: 'https://secret-anchorage-31431.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Text-Editor',
    image: '../assets/images/textEditor.png',
  },
  {
    id: 3,
    title: 'Note Taker',
    deployLink: 'https://aqueous-journey-36664.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Note-Taker',
    image: '../assets/images/noteTaker.png',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    deployLink: 'https://ning1604.github.io/Weather-Dashboard/',
    repoLink: 'https://github.com/ning1604/Weather-Dashboard',
    image: '../assets/images/weatherDashboard.png',
  },
  {
    id: 5,
    title: 'Work Day Scheduler',
    deployLink: 'https://ning1604.github.io/Work-Day-Scheduler/',
    repoLink: 'https://github.com/ning1604/Work-Day-Scheduler',
    image: '../assets/images/workDayScheduler.png',
  },
  {
    id: 6,
    title: 'Code Quiz',
    deployLink: 'https://ning1604.github.io/Web-APIs-Code-Quiz/',
    repoLink: 'https://github.com/ning1604/Web-APIs-Code-Quiz',
    image: '../assets/images/codeQuiz.png',
  }
])

  return (
    <div className='container'>
      <div className='page-container'>
        <h1 className='page-title'>Portfolio Page</h1>
        <div>
          <Project projects={projects}/>
        </div>
      </div>
    </div>
  );
}
