import React from 'react';
import './Pages.css';
import simonImage from '../assets/simon.webp'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="Home">
      <section id="container">
        <div className="top-row">
          <h2>Home</h2>
        </div>
        <div className="columns">
          <div className="column1">
            <h2>Hej och välkommen!</h2>
            <ul>
              <li></li>
              <li>Jag heter Simon Lindström och är en ambitiös utvecklare med en bakgrund inom kundservice och entreprenörskap. På den här sidan kan du läsa mer om min karriär, mina projekt och hur du kan kontakta mig.</li>
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

export default Home;