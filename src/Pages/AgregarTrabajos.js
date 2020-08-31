import React from "react";
import { useState } from "react";

import { useStorage, useFirestore } from "reactfire";

const AgregarTrabajos = () => {
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState({});

  const [Success, setSuccess] = useState(false);
  const [Failed, setFailed] = useState(false);

  const storage = useStorage();
  const firestore = useFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    UploadImageStorage();
  };

  const UploadImageStorage = () => {
    let ruta = `Imagenes/${imageName}`;
    let ref = storage().ref(ruta);
    ref
      .put(image)
      .then(() => {
        console.log("Image upload to storage succes");
        setSuccess(true);
        console.log(Success);
        ref.getDownloadURL().then((url) => {
          UploadImageFirestore(url);
        });
      })
      .catch(() => {
        console.log("Image upload to storage failed");
        setFailed(true);
        console.log(Failed);
      });
  };

  const UploadImageFirestore = (url) => {
    firestore()
      .collection("Images")
      .add({
        name: imageName,
        url: url,
      })
      .then(() => console.log("Image upload to firestore succes"))
      .catch(() => console.log("Image upload to firestore failed"));
  };

  const handleInputImage = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card green lighten-2 center">
          <div className="card-content white-text">
            <h4>Agregar un Trabajo</h4>
            <div className="input-field truncate">
              <h5>Seleccione la imagen</h5>
              <input
                type="file"
                id="email"
                className="validate"
                onChange={(e) => handleInputImage(e)}
              />
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn waves-effect waves-light green lighten-1"
              type="submit"
            >
              Agregar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
      {Success && (
        <div className="card yellow center">
          <div className="card-content white-text">
            <span className="card-title">Imagen Subida</span>
          </div>
        </div>
      )}
      {Failed && <div>Error al subir la imagen</div>}
    </>
  );
};

export default AgregarTrabajos;
