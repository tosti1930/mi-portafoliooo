import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const Experience = () => {
    const { t } = useLanguage();

    const history = [
        {
            id: 1,
            role: t('experience.job1.role'),
            company: t('experience.job1.company'),
            date: "2021 - 2025",
            description: t('experience.job1.description'),
            icon: <FaGraduationCap />,
            category: "Study"
        },
        {
            id: 2,
            role: t('experience.job2.role'),
            company: t('experience.job2.company'),
            date: "2025",
            description: t('experience.job2.description'),
            icon: <FaBriefcase />,
            category: "Work"
        },
        {
            id: 3,
            role: t('experience.job3.role'),
            company: t('experience.job3.company'),
            date: "2025 - Present",
            description: t('experience.job3.description'),
            icon: <FaBriefcase />,
            category: "Work"
        },
    ];

    return (
        <section className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white py-20 px-6 transition-colors duration-300" id="experience">
            <div className="container mx-auto max-w-4xl">

                <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
                    {t('experience.title')}
                </h2>

                <div className="relative">
                    {/* LÍNEA VERTICAL:
                        - En celular (default): Pegada a la izquierda (left-4 o left-5)
                        - En PC (md): Centrada (left-1/2)
                    */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                    {history.map((item, index) => (
                        <div key={item.id} className={`mb-12 flex items-center w-full 
                            ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} 
                            flex-row-reverse md:justify-between justify-end relative pl-12 md:pl-0`}>

                            {/* ESPACIO VACÍO (Solo visible en PC para equilibrar) */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* PUNTO CENTRAL (ICONO):
                                - En celular: Pegado a la izquierda sobre la línea (absolute left-0)
                                - En PC: Posición relativa en el centro (z-10)
                            */}
                            <div className="absolute left-0 md:relative md:left-auto z-10 bg-white dark:bg-[#121212] border-4 border-purple-500 rounded-full p-2 md:p-3 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-black dark:text-white">
                                {item.icon}
                            </div>

                            {/* TARJETA DE CONTENIDO:
                                - En celular: Ancho completo (w-full)
                                - En PC: Ancho parcial (w-5/12)
                            */}
                            <div className="w-full md:w-5/12 bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg ml-4 md:ml-0">
                                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm block mb-1">{item.date}</span>
                                <h3 className="text-xl font-bold mt-1 text-black dark:text-white">{item.role}</h3>
                                <h4 className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.company}</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
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