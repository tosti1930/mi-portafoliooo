import profileImg from '../assets/PERFIL.png';
import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- Contexto
import { FaFileDownload, FaUserAstronaut } from "react-icons/fa";

export const About = () => {
    const { t } = useLanguage(); // <--- 2. Hook

    return (
        <section id="about" className="min-h-screen bg-[#121212] py-20 px-6 flex items-center justify-center relative overflow-hidden">

            {/* Elementos decorativos de fondo (Nebulosas) */}
            <div className="absolute top-20 left-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* --- BLOQUE DE IMAGEN --- */}
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">

                    {/* IMAGEN */}
                    <img
                        src={profileImg}
                        alt="profile_photo"
                        className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />

                </div>

                {/* Columna Derecha: Texto y CV */}
                <div className="text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {t('about.title')}
                    </h2>

                    <h3 className="text-2xl font-semibold text-white">
                        {t('about.subtitle')}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        {t('about.text')}
                    </p>

                    {/* Estadísticas rápidas */}
                    <div className="flex justify-center md:justify-start gap-8 py-4">
                        <div>
                            <span className="block text-3xl font-bold text-white">2+</span>
                            <span className="text-sm text-gray-500">{t('about.stats.years')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white">10+</span>
                            <span className="text-sm text-gray-500">{t('about.stats.projects')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-white">5+</span>
                            <span className="text-sm text-gray-500">{t('about.stats.clients')}</span>
                        </div>
                    </div>

                    {/* BOTÓN DE DESCARGA DE CV */}
                    <div className="pt-4">
                        <a
                            href="/CV.pdf"
                            download="CV_Claudio_Alvarez.pdf"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaFileDownload size={20} />
                            {t('about.button')}
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};