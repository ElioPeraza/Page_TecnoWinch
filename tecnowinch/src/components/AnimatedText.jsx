import React, { useEffect, useState } from 'react';
import '../css/AnimatedText.css';

const phrases = [
  'Seguridad industrial garantizada',
  'Confianza y fuerza para tus cargas',
  'Expertos en correas, ganchos y winches'
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-text">
      <p>{phrases[index]}</p>
    </div>
  );
};

export default AnimatedText;
