import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>TecnoWinch © {new Date().getFullYear()}</p>
      <p>Tel: +56 9 75765680 | tecnowinch@gmail.com</p>

      <p className="envios">
        Envíos a todo Chile por <strong>Chilexpress</strong>, <strong>Starken</strong> y <strong>Pullman Cargo</strong>
      </p>

      <div className="socials">
        <a href="https://www.facebook.com/tecnowinch" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/tecnowinch/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://wa.me/56975765680" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
};

export default Footer;
