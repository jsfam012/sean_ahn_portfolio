import React from 'react';

function Project(props) {
    return (
        <main className="project-section" id="project">
        <div
          className="big-img"
          // style="background-image: url('./assets/images/books.jpg')"

          style = {{
            backgroundImage: 'url("./assets/images/books.jpg")'
          }}
        >
          <a href="https://github.com/jsfam012/horiseon_portfolio_challenge">

            <div className="project-info">
              <h3>Big Project</h3>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="small-images">
          <div
            className="small-img"
            // style="background-image: url('./assets/images/calculator.jpg')"

            style = {{
              backgroundImage: "url('./assets/images/calculator.jpg')"
            }}
          >
            <a href="https://www.nba.com/">
              <div className="project-info">
                <h3>Project 1</h3>
                <p>HTML</p>
              </div>
            </a>
          </div>
          <div
            className="small-img"
            // style="background-image: url('./assets/images/neon.jpg')"

            style = {{
              backgroundImage: "url('./assets/images/neon.jpg')"
            }}
          >
            <a href="https://github.com/dann9109/movieapp">
              <div className="project-info">
                <h3>Project 2</h3>
                <p>HTML, CSS</p>
              </div>
            </a>
          </div>
          <div
            className="small-img"
            // style="background-image: url('./assets/images/puzzle.jpg')"

            style = {{
              backgroundImage: "url('./assets/images/puzzle.jpg')"
            }}
          >
            <a href="https://www.nba.com/">
              <div className="project-info">
                <h3>Project 3</h3>
                <p>JavaScript</p>
              </div>
            </a>
          </div>
          <div
            className="small-img"
            // style="background-image: url('./assets/images/runbuddy.jpg')"

            style = {{
              backgroundImage: "url('./assets/images/runbuddy.jpg')"
            }}
          >
            
            <a href="https://www.premierleague.com/">
              <div className="project-info">
                <h3>Project 4</h3>
                <p>HTML, CSS, JavaScript</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    );
}

export default Project;