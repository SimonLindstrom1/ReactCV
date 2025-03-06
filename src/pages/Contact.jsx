import React from 'react';
import './Pages.css';

const Contact = () => {
  return (
    <div className="Contact">
      <section id="container">
        <div className="top-row">
          <h2>Contacts</h2>
        </div>
        <div className="columns">
          <div className="column-solo">
            <h2>Kontaktinformation</h2>
            <ul>
              <li></li>
              <li>
                <strong>Email: </strong>Simon.tiger.lindstrom@gmail.com
              </li>
              <li>
                <strong>Phone: </strong>0724******
              </li>
              <li>
                <strong>GitHub: </strong><a href="https://github.com/SimonLindstrom1">SimonLindstrom1</a>
              </li>
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

export default Contact;