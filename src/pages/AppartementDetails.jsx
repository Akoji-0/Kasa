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
    <div>
      {/* Ajout du carrousel d'images */}
      <Carousel pictures={appartement.pictures} />

      <div className="appartement-details">
        <h2>{appartement.title}</h2>
        <p className="location">{appartement.location}</p>
        <p>Évaluation : {appartement.rating}/5</p>
        <p>{appartement.description}</p>
        <h3>Équipements :</h3>
        <ul>
          {appartement.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
