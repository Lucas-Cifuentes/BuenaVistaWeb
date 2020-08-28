import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="page-footer green darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Ubicacion</h5>
            <p className="grey-text text-lighten-4">
              Maps con la ubicacion del local
            </p>
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
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-facebook-square"></i> Parquizaciones
                  buena vista
                </a>
              </li>
              <li>
                <span className="grey-text text-lighten-3">
                  <i className="far fa-envelope"></i> buenavist78@gmail.com
                </span>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fas fa-phone-alt"></i>
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
            href="https://www.linkedin.com/in/lucas-cifuentes-a35a4a159/"
          >
            Design by Lucas Cifuentes
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
