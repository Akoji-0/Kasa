import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imagePath1 from "../pages/Ls1.png";
import HeaderImage from "../components/HeaderImage";

export default function Accueil() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
        setLoading(false);
      });

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      const cover = item.getAttribute("data-cover");
      if (cover) {
        item.style.backgroundImage = `
          url(${cover})
        `;
      }
    });
  });

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className="topImage">
      <HeaderImage
        imageSrc={imagePath1}
        altText="Image de fond"
        caption="Chez vous, partout et ailleurs"
      />

      <div className="LogementsSection">
        <div className="grid-container">
          {logements.map((logement) => (
            <Link
              key={logement.id}
              to={`/appartement/${logement.id}`}
              className="grid-item"
              data-cover={logement.cover}
            >
              <p>{logement.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
