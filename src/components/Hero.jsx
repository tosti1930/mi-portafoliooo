import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- Hook del contexto
import { BsArrowRightCircle } from "react-icons/bs";
import Lottie from "lottie-react";
import rocketAnim from "../assets/rocket.json";
export const Hero = () => {
    // Activamos la función de traducción
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[url('https://c4.wallpaperflare.com/wallpaper/939/622/565/stars-galaxy-nebula-space-wallpaper-preview.jpg')] bg-cover bg-center overflow-hidden">
            {/* Capa oscura de fondo */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container mx-auto px-10 z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* --- COLUMNA IZQUIERDA (Texto) --- */}
                <div className="text-white space-y-6">
                    <span className="inline-block py-2 px-4 border border-purple-500 bg-gradient-to-r from-purple-900 to-transparent font-bold tracking-wider text-lg">
                        {t('hero.tagline')} {/* "Welcome to my Portfolio" */}
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi! I'm Claudio, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 typing-effect">
                            {t('hero.role')} {/* "Web Developer" */}
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-lg">
                        {t('hero.description')} {/* Tu descripción larga */}
                    </p>

                    <a href="#contact" className="flex items-center gap-2 text-xl font-bold hover:gap-4 transition-all duration-300 w-fit cursor-pointer">
                        {t('hero.button')} <BsArrowRightCircle size={25} /> {/* "Let's Connect" */}
                    </a>
                </div>

                {/* --- COLUMNA DERECHA (Animación Forzada a la Derecha) --- */}
                <div className="relative w-full flex justify-center md:justify-end">
                    {/* Contenedor con márgenes negativos para pegar la animación al borde derecho */}
                    <div className="w-[80%] md:w-[600px] transform md:translate-x-12 md:-mr-20 lg:-mr-32">
                        <Lottie
                            animationData={rocketAnim}
                            loop={true}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};