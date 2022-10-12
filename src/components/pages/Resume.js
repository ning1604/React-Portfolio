import React from 'react';

export default function Resume() {
  return (
    <div className='container'>
      <div className='page-container'>
        <h1 className='page-title'>Resume Page</h1>
        <div className='resume-container'>
          <div className='resume-item'>
            <h2>
              Front-end Proficiencies
            </h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className='resume-item'>
            <h2>
              Back-end Proficiencies
            </h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <a href="assets/resume/resume.pdf" download="ning_zhaw_resume" className='resume-btn'>download resume</a>
      </div>
    </div>
  );
}
