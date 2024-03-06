import React from 'react';

function Footer(props) {
    return (
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
    );
}

export default Footer;