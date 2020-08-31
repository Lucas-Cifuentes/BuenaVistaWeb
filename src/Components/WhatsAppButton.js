import React from "react";

import "../Styles/WhatsappButton.css";

const WhatsAppButton = () => {
  return (
    <div className="fixed-action-btn">
      <a
        className="btn-floating btn-large green"
        href="https://api.whatsapp.com/send?phone=541151264191"
      >
        <span
          className="tooltipped"
          data-position="left"
          data-tooltip="Envianos tu consulta!"
        >
          <i className="fab fa-whatsapp"></i>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
