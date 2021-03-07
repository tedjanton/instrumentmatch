const Footer = () => {

  return (
    <div className="footer-container">
      <footer>
        <div className="about-me-container">
          <h4>About Me</h4>
          <div className="about-me-details">
            <p>My name is Ted Anton,
              and I am a software engineer that's
              probably a little too obsessed with his cats.</p>
          </div>
        </div>
        <div className="external-links">
          <div className="github">
            <a href='https://github.com/tedjanton'>
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/ted-anton/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Footer;
