import React, { useState, useEffect } from 'react';
import './Pages.css';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SimonLindstrom1/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="Portfolio">
      <section id="container">
        <div className="top-row">
          <h2>Projects</h2>
        </div>
        <div className="column-solo">
          <h2>My projects</h2>
          <ul>
            <li></li>
            <li>
              Here you can see my projects that I have worked on. You can also visit my GitHub page to see more.
            </li>
          </ul>
        </div>
        <div className="columns">
          <div className="columnsolo-img">
            {loading ? (
              <p>Loading projects...</p> 
            ) : (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <h2>{repo.name}</h2>
                      <p>{repo.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
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

export default Portfolio;