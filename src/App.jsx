import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img
          className="logo header-img"
          src="./assets/images/sean_fortfolio_logo.png"
          alt="logo"
        />
        <img
          className="header-img"
          src="./assets/images/profile_photo.jpg"
          alt="profile photo"
        />

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

   

      <section className="about-container">
        <h1 className="center" id="about">About Me</h1>
        <p className="center">
          My name is Sean, an enthusiatic and motivated student on a journey to
          become a proficient web developer. My fascination with the digital world
          and its endless possibilities has ignited a relentless pursuit of
          knowledge in the realm of web development.
        </p>
      </section>

    
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

      <footer className="contact" id="contact">
        <h2 className="center">Contack Me</h2>
        <p className="center">
          Use any of the following ways to get in touch with me
        </p>
        <div className="center">
          <a href="#">Email</a>
          <a href="https://www.premierleague.com/">Phone</a>
          <a href="https://github.com/jsfam012">Github</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default App
