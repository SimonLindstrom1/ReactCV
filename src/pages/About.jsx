import React from 'react';
import './Pages.css';
import simonImage from '../assets/simon.webp'; // Updated path

const About = () => {
  return (
    <div className="About">
      <section id="container">
        <div className="top-row">
          <h2>About</h2>
        </div>
        <div className="columns">
          <div className="column1">
            <h2>Om mig</h2>
            <ul>
              <li>
                Jag heter Simon Lindström och är 21 år gammal. <br />
                Jag studerar programering och gillar att träna på min fritid. <br />
                Jag har alltid varit passionerad kring saker jag tycker är intressanta och programering är bland de saker jag tycker är intressanta. <br />
                Problemlösning har alltid varit ett intresse för mig och något jag har lätt för.
              </li>
            </ul>
          </div>
          <div className="column-img">
            <img src={simonImage} alt="Example" />
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

export default About;