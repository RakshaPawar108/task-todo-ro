import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-credits">
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by
        Raksha Pawar
      </div>
      <div className="footer-contents">
        <ul className="footer-social-links">
          <li>
            <a
              href="https://twitter.com/rakshapawar108"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" title="Twitter"></i>Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RakshaPawar108"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" title="Github"></i>GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rakshapawar/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" title="LinkedIn"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
