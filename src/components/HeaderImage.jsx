import React from 'react';
import PropTypes from 'prop-types';

const HeaderImage = ({ imageSrc, altText, caption }) => {
    return (
        <div className="header-image">
            <img src={imageSrc} alt={altText} />
            {caption && <p>{caption}</p>}
        </div>
    );
};

HeaderImage.propTypes = {
    imageSrc: PropTypes.string.isRequired, 
    altText: PropTypes.string.isRequired,
    caption: PropTypes.string,
};

export default HeaderImage;
