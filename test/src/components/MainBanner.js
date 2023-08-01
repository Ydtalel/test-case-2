import React from 'react';

const MainBanner = () => {
  return (
    <section className="main-banner">
      <img
        src="https://picsum.photos/1600/200" 
        alt="Main Banner"
        className="main-banner__image"
      />
      <div className="main-banner__content">
        <h2>Добро пожаловать на наш сайт!</h2>
        <p>Здесь вы можете найти все, что вам нужно!</p>
      </div>
    </section>
  );
};

export default MainBanner;
