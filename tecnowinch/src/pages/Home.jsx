import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { products } from '../data/products';
import '../css/Home.css';
import AnimatedText from '../components/AnimatedText';


const Home = () => {
    // Puedes destacar algunos productos o mostrar todos
    const destacados = products.slice(0, 6); // por ejemplo, los primeros 6

    return (
        <div className="hero-section">
            <h1 className="hero-title">
                Bienvenidos a <span>TecnoWinch</span>
            </h1>
            <p className="hero-subtitle">
                Especialistas en soluciones industriales: <strong>correas</strong>, <strong>ganchos</strong> y <strong>winches</strong>.
            </p>

            <AnimatedText />
            <CategoryGrid title="Productos Destacados" products={destacados} />
        </div>


    );
};

export default Home;
