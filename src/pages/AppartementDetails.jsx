import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Caroussel";
import Error404 from "./404";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star colored" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} className="star empty" />);
      }
    }
    return stars;
  };

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
          <div className="rating">
            {renderStars(appartement.rating)}
          </div>
        </div>
      </div>
    </div>
  );
}
