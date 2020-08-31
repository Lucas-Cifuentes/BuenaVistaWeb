import React, { useEffect, useState } from "react";

import Card from "../Components/Card";

import { useFirestore } from "reactfire";

import Loading from "../Components/Loading";

const Trabajos = () => {
  const firestore = useFirestore();
  const [loading, setLoading] = useState(true);
  const [jobsImages, setJobsImages] = useState([]);

  useEffect(() => {
    firestore()
      .collection("Images")
      .get()
      .then((result) => {
        setLoading(false);
        result.forEach((item) => {
          let url = item.data().url;
          setJobsImages((jobsImages) => [...jobsImages, url]);
        });
      });
  }, [firestore]);

  return (
    <div className="trabajos">
      <h1 className="titulo center">Nuestros Trabajos</h1>
      <div className="container">
        <div className="row">
          {loading && <Loading />}
          {jobsImages.map((img, index) => (
            <div key={index} className="col">
              <Card foto={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trabajos;
