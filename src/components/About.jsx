import React from 'react';
import profileImg from '../assets/PERFIL.png'; // Asegúrate de que la ruta sea correcta
import { useLanguage } from '../context/LanguageContext';
import { FaFileDownload } from "react-icons/fa";

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen bg-white dark:bg-[#121212] py-20 px-6 flex items-center justify-center relative overflow-hidden transition-colors duration-300">

            {/* Elementos decorativos de fondo (Nebulosas) - Solo visibles en Dark Mode para no ensuciar el Light Mode */}
            <div className="hidden dark:block absolute top-20 left-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            <div className="hidden dark:block absolute bottom-20 right-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative group">
                        {/* Marco con gradiente animado */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                        {/* Contenedor de la imagen: Fondo gris claro en light, oscuro en dark */}
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-100 dark:bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 flex items-center justify-center shadow-lg">
                            <img
                                src={profileImg}
                                alt="Foto de perfil"
                                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* --- COLUMNA DERECHA: TEXTO --- */}
                <div className="text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                        {t('about.title')}
                    </h2>

                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {t('about.subtitle')}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        {t('about.text')}
                    </p>

                    {/* Estadísticas rápidas */}
                    <div className="flex justify-center md:justify-start gap-8 py-4">
                        <div>
                            <span className="block text-3xl font-bold text-gray-900 dark:text-white">2+</span>
                            <span className="text-sm text-gray-600 dark:text-gray-500">{t('about.stats.years')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-gray-900 dark:text-white">10+</span>
                            <span className="text-sm text-gray-600 dark:text-gray-500">{t('about.stats.projects')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-gray-900 dark:text-white">5+</span>
                            <span className="text-sm text-gray-600 dark:text-gray-500">{t('about.stats.clients')}</span>
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