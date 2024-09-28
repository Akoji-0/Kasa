import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imagePath from "../pages/404.png";

export default function Error404() {
  return (
    <div className="error404">
      <img src={imagePath} alt="Image 404" />
      <h3>Oups ! La page que vous demandez n'existe pas.</h3>
      <Link to={'/'}> <p>Retourner sur la page d'acceuil</p> </Link>
    </div>
  );
}
