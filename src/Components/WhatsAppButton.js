import React from "react";

const WhatsAppButton = () => {
  return (
    <div className="fixed-action-btn">
      <a
        className="btn-floating btn-large green"
        href="https://api.whatsapp.com/send?phone=542235390748"
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
