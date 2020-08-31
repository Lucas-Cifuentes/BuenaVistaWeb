import React from "react";

import "../Styles/Servicios.css";

const Servicios = () => {
  return (
    <div className="servicios center">
      <h1>Servicios</h1>
      <ul className="collection">
        <li className="collection-item">
          Diseño, planificación, ejecución y conservación de espacios verdes.
        </li>
        <li className="collection-item">Podas generales y en altura.</li>
        <li className="collection-item">
          Desmontes, desmalezado y mantenimiento de campos deportivos.
        </li>
        <li className="collection-item">Tratamiento fitosanitaria.</li>
        <li className="collection-item">Colocación de césped.</li>
        <li className="collection-item">Nivelación del suelo.</li>
        <li className="collection-item">Cerco perimetral.</li>
        <li className="collection-item">Plantación de árboles.</li>
        <li className="collection-item">Asesoramiento técnico.</li>
        <li className="collection-item">
          Decoración con elementos ornamentales.
        </li>
      </ul>
    </div>
  );
};

export default Servicios;
