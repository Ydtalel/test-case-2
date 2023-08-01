import React from 'react';
import './PriceBanner.scss';

const PriceBanner = () => {
  return (
    <div className="price-banner">
      <img className="price-banner__icon" src="/path/to/icon.png" alt="Icon" />
      <div>
        <div className="price-banner__title">Специальное предложение!</div>
        <div className="price-banner__description">Временное предложение. Успей сейчас!</div>
      </div>
    </div>
  );
};

export default PriceBanner;
