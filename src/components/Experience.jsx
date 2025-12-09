import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- 1. Importar Hook
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const Experience = () => {
    const { t } = useLanguage(); // <--- 2. Usar Hook

    // Construimos el array dinámicamente usando las traducciones
    const history = [
        {
            id: 1,
            role: t('experience.job1.role'),
            company: t('experience.job1.company'),
            date: "2021 - 2025",
            description: t('experience.job1.description'),
            icon: <FaGraduationCap />, // Cambiado a gorro porque es estudio
            category: "Study"
        },
        {
            id: 2,
            role: t('experience.job2.role'),
            company: t('experience.job2.company'),
            date: "2025",
            description: t('experience.job2.description'),
            icon: <FaBriefcase />, // Maletín para trabajo/residencia
            category: "Work"
        },
        {
            id: 3,
            role: t('experience.job3.role'),
            company: t('experience.job3.company'),
            date: "2025 - Present",
            description: t('experience.job3.description'),
            icon: <FaBriefcase />, // Maletín para freelance
            category: "Work"
        },
    ];

    return (
        <section className="bg-[#121212] text-white py-20 px-4" id="experience">
            <div className="container mx-auto max-w-4xl">

                {/* Título Traducido */}
                <h2 className="text-4xl font-bold text-center mb-16">
                    {t('experience.title')}
                </h2>

                <div className="relative">
                    {/* Línea vertical central */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                    {history.map((item, index) => (
                        <div key={item.id} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>

                            {/* Espacio vacío para equilibrar */}
                            <div className="w-5/12"></div>

                            {/* Punto central (Icono) */}
                            <div className="z-10 bg-[#121212] border-4 border-purple-500 rounded-full p-3 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                {item.icon}
                            </div>

                            {/* Tarjeta de contenido */}
                            <div className="w-5/12 bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg">
                                <span className="text-purple-400 font-bold text-sm">{item.date}</span>
                                <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                                <h4 className="text-gray-400 text-sm mb-4">{item.company}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};