import React from 'react';
import './Pages.css';
import jsoncv from '../jsoncv.json'; // Import the JSON data

const Career = () => {
  const { column1, column2 } = jsoncv.columns;

  return (
    <div className="Career">
      <section id="container">
        <div className="top-row">
          <h2>Career</h2>
        </div>
        <div className="columns">
          <div className="column1">
            <h2>{column1.title}</h2>
            <ul>
              {column1.jobs.map((job, index) => (
                <li key={index}>
                  <strong>{job.company}</strong>, {job.years}<br />
                  {job.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="column2">
            <h2>{column2.title}</h2>
            <ul>
              {column2.education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.institution}</strong>, {edu.years}<br />
                  {edu.program}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div id="modal" className="modal">
        <div className="modal-content">
          <p>Family Guy!</p>
          <button id="closeModal">Stäng</button>
        </div>
      </div>
    </div>
  );
};

export default Career;