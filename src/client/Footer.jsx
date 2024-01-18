import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      Footer:
      <a
        className="nav"
        href="https://github.com/Team-7-7/tower_of_zurpalen"
        target="_blank"
      >
        Source code on GitHub
      </a>
      <Link className="nav" to="../about">
        About
      </Link>
    </div>
  );
};

// C: no need for .. in your Link element at the bottom

export default Footer;
