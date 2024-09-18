import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imagePath from "../pages/Ls1.png";

export default function Accueil() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
  }, []);

  const handleAppartementClick = (id) => {
    navigate(`/appartement/${id}`);
  };

  return (
    <div>
      <div className="HeaderSection">
        <img src={imagePath} alt="Photo de fond" />
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className="LogementsSection">
        {loading ? (
          <p>Chargement des logements...</p>
        ) : (
          <div className="grid-container">
            {logements.map((logement) => (
              <div
              key={logement.id}
              className="grid-item"
              onClick={() => handleAppartementClick(logement.id)}
              style={{
                backgroundImage: `linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.2) 20%,
                    rgba(0, 0, 0, 0.6) 70%
                  ), url(${logement.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p>{logement.title}</p>
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
