import React from "react";
import imagePath from "./logoFooter.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logoFooter">
        <img src={imagePath} alt="LogoKasa" />
      </div>
        <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
};

export default Footer;
