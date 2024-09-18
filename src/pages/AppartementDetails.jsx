import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Caroussel";
import Error404 from "./404";

export default function AppartementDetails() {
  const { id } = useParams();
  const [appartement, setAppartement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedAppartement = data.find((logement) => logement.id === id);
        setAppartement(selectedAppartement);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Chargement des détails...</p>;
  }

  if (!appartement) {
    return <Error404 />;
  }

  return (
    <div className="body">
      <Carousel pictures={appartement.pictures} />

      <div className="appartement-details">
        <div className="appartement-details-left">
          <h2>{appartement.title}</h2>
          <p className="location">{appartement.location}</p>
          <div>
            {appartement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="appartement-details-right">
          <div className="host">
          <p>{appartement.host.name}</p>
            <img
              src={appartement.host.picture}
              alt={appartement.host.name}
              className="host-picture"
            />
          </div>
          <p>Évaluation : {appartement.rating}/5</p>
        </div>
      </div>
    </div>
  );
}
