import React from "react";

import "../Styles/Nosotros.css";

import Logo from "../Assets/Logo.png";

const Nosotros = () => {
  return (
    <div>
      <div className="center">
        <img className="circle" src={Logo} alt="logo" />
        <h2>Buenavista Parquizaciones</h2>
        <h3>Un servicio diferente</h3>
      </div>
      <div className="texto center">
        Buenavista es una empresa jóven con el mayor crecimiento en el sector y
        un reconocido referente para aquellos clientes que se especializan en la
        conservación y el embellecimiento de aquellos espacios verdes que la
        naturaleza ampliamente nos brinda. Es nuestro compromiso, como
        portadores de un servicio, ayudar y asesorar a nuestros clientes en la
        resolución de problemas relacionados con el mantenimiento y diseño de
        espacios verdes buscando en todo momento el deseo y beneficio del
        cliente. Para ello, contamos con un grupo altamente capacitado para las
        tareas a realizar, partiendo desde paisajistas, técnicos y jardineros
        los cuáles comparten un rendimiento óptimo dentro de los servicios a
        mencionar:
        <ul>
          <li>
            Diseño, planificación, ejecución y conservación de espacios verdes.
          </li>
          <li>Podas generales y en altura.</li>
          <li>Desmontes, desmalezado y mantenimiento de campos deportivos.</li>
          <li>Tratamiento fitosanitaria.</li>
          <li>Colocación de césped.</li>
          <li>Nivelación del suelo.</li>
          <li>Cerco perimetral.</li>
          <li>Plantación de árboles.</li>
          <li>Asesoramiento técnico.</li>
          <li>Decoración con elementos ornamentales.</li>
        </ul>
      </div>
    </div>
  );
};

export default Nosotros;
