import React from 'react';

const Header = ({ logoLink, logoSrc }) => {
  return (
    <header>
      <div className="logo__container">
        <a href={logoLink} className="logo__link">
          <img src={logoSrc} alt="Логотип" />
        </a>
      </div>
      <nav>
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="/">Главная</a>
          </li>
          <li className="nav__item">
            <a href="/about">О компании</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
