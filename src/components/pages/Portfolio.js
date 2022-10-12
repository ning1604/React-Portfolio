import React, { useState } from 'react';
import Project from '../Project';

export default function Portfolio() {
const [projects, setProjects] = useState([
  {
    id: 1,
    title: 'Tech Blog',
    deployLink: 'https://arcane-inlet-77522.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Tech-Blog',
    image: '../assets/images/tech_blog.png',
  },
  {
    id: 2,
    title: 'Text Editor',
    deployLink: 'https://secret-anchorage-31431.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Text-Editor',
    image: '../assets/images/text_editor.png',
  },
  {
    id: 3,
    title: 'Note Taker',
    deployLink: 'https://aqueous-journey-36664.herokuapp.com/',
    repoLink: 'https://github.com/ning1604/Note-Taker',
    image: '../assets/images/note_taker.png',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    deployLink: 'https://ning1604.github.io/Weather-Dashboard/',
    repoLink: 'https://github.com/ning1604/Weather-Dashboard',
    image: '../assets/images/weather_dashboard.png',
  },
  {
    id: 5,
    title: 'Work Day Scheduler',
    deployLink: 'https://ning1604.github.io/Work-Day-Scheduler/',
    repoLink: 'https://github.com/ning1604/Work-Day-Scheduler',
    image: '../assets/images/work_day_scheduler.png',
  },
  {
    id: 6,
    title: 'Code Quiz',
    deployLink: 'https://ning1604.github.io/Web-APIs-Code-Quiz/',
    repoLink: 'https://github.com/ning1604/Web-APIs-Code-Quiz',
    image: '../assets/images/code_quiz.png',
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
