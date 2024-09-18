import React from "react";
import { useNavigate } from "react-router-dom";
import imagePath from "../pages/404.png";

export default function Error404() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="error404">
      <img src={imagePath} alt="Image 404" />
      <h3>Oups ! La page que vous demandez n'existe pas.</h3>
      <p onClick={handleClick} style={{ cursor: "pointer" }}>Retourner sur la page d'acceuil</p>
    </div>
  );
}
