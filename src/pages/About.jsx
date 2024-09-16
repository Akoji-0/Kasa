import React, { useState } from "react";
import imagePath from "../pages/Ls2.png";

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="HeaderSection About">
      <img src={imagePath} alt="Photo de fond" />
      <div className="About-dropdown">
        <div className="dropdown-item">
          <div
            className={`dropdown-header ${
              openSection === "fiabilite" ? "open" : ""
            }`}
            onClick={() => toggleSection("fiabilite")}
          >
            Fiabilité
          </div>
          <div
            className={`dropdown-content ${
              openSection === "fiabilite" ? "open" : ""
            }`}
          >
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            réguilèrement vérifiées par nos équipes.
          </div>
        </div>

        <div className="dropdown-item">
          <div
            className={`dropdown-header ${
              openSection === "respect" ? "open" : ""
            }`}
            onClick={() => toggleSection("respect")}
          >
            Respect
          </div>
          <div
            className={`dropdown-content ${
              openSection === "respect" ? "open" : ""
            }`}
          >
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>

        <div className="dropdown-item">
          <div
            className={`dropdown-header ${
              openSection === "service" ? "open" : ""
            }`}
            onClick={() => toggleSection("service")}
          >
            Service
          </div>
          <div
            className={`dropdown-content ${
              openSection === "service" ? "open" : ""
            }`}
          >
            La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction soit empreinte de respect
            et de bienveillance.
          </div>
        </div>

        <div className="dropdown-item">
          <div
            className={`dropdown-header ${
              openSection === "securite" ? "open" : ""
            }`}
            onClick={() => toggleSection("securite")}
          >
            Sécurité
          </div>
          <div
            className={`dropdown-content ${
              openSection === "securite" ? "open" : ""
            }`}
          >
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </div>
      </div>
    </div>
  );
}
