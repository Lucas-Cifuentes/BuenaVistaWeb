import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="page-footer green darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Area de Cobertura</h5>
            <p className="grey-text text-lighten-4">Pilar y alrededores.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Contacto</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.instagram.com/vist78/"
                >
                  <i className="fab fa-instagram"></i> @vist78
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.facebook.com/profile.php?id=100004657057297"
                >
                  <i className="fab fa-facebook-square"></i> Buenavista
                  Parquizaciones
                </a>
              </li>
              <li>
                <span className="grey-text text-lighten-3">
                  <i className="far fa-envelope"></i> buenavist78@gmail.com
                </span>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fas fa-phone-alt"></i> 1151264191
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright green darken-4">
        <div className="container">
          <span className="grey-text text-lighten-4">© {year} Buenavista</span>
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.instagram.com/dantedago/"
          >
            - Designed by Dante Dongarra
          </a>
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.linkedin.com/in/lucas-cifuentes-a35a4a159/"
          >
            - Developed by Lucas Cifuentes
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
