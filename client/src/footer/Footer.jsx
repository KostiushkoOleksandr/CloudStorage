import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <body>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <footer>
        <div class="footer-content">
          <h3>cloud storage</h3>
          <p>
          Cloud file hosting for organized data storage!
          </p>
          <ul class="socials">
            <li>
              <a href="https://www.instagram.com/alexkost_/">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/A1exKost">
                <i class="fa fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="https://alexkost.netlify.app/">
                <i class="fa fa-book"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
          Cloud Storage &copy;2022-2023. designed by <span>Oleksandr Kostiushko</span>
          </p>
        </div>
      </footer>
    </body>
  );
};

export default Footer;
