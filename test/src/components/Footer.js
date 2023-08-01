import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <p>Информация о сайте и ссылки на социальные сети:</p>
        <ul className="social__links">
          <li>
            <a href="#">Ссылка 1</a>
          </li>
          <li>
            <a href="#">Ссылка 2</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Название сайта
      </div>
    </footer>
  );
};

export default Footer;
