import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- 1. Importar Contexto
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
    const { t } = useLanguage(); // <--- 2. Usar Hook

    // 3. Definimos los proyectos usando t() para textos y strings normales para URLs
    const projects = [
        {
            title: t('projects.p1.title'),
            description: t('projects.p1.desc'),
            imgUrl: "https://lh3.games-cdn.com/cz/casual/38528-classic-snake-crazygames.com.jpeg",
            githubUrl: "https://github.com/tosti1930/Snake-Game",
            demoUrl: "https://snakegame-beige.vercel.app/"
        },
        {
            title: t('projects.p2.title'),
            description: t('projects.p2.desc'),
            imgUrl: "https://img.freepik.com/free-vector/cash-machine-cashier-employee-store-isolated-concept-modern-device-using-electronic-payment_268834-373.jpg?w=360",
            githubUrl: "https://github.com/tosti1930/Punto-de-Venta-Zapateria",
            demoUrl: "#"
        },
        {
            title: t('projects.p3.title'),
            description: t('projects.p3.desc'),
            imgUrl: "https://cdn.textstudio.com/asset/tool/qr-code-generator/meta.png",
            githubUrl: "https://github.com/tosti1930/QR-Code-Generator",
            demoUrl: "https://qrcodegenerator-chi-nine.vercel.app/"
        },
        {
            title: t('projects.p4.title'),
            description: t('projects.p4.desc'),
            imgUrl: "https://peoplesblog.co.in/upload/banners/how-to-secure-the-passwords-of-users-in-web-applications.jpeg",
            githubUrl: "https://github.com/tosti1930/Pass-Generator",
            demoUrl: "https://passwordgenerator-gamma-ten.vercel.app/"
        },
        {
            title: t('projects.p5.title'),
            description: t('projects.p5.desc'),
            imgUrl: "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2022/04/22/6262fc8039f048617428570b.jpg",
            githubUrl: "https://github.com/tosti1930/PuntoVentaCine",
            demoUrl: "https://cinee-eosin.vercel.app/login"
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-4" id="projects">
            <div className="container mx-auto">

                {/* Título de la Sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('projects.title')}
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        {t('projects.desc')}
                    </p>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-purple-900/20 border border-gray-800"
                        >
                            {/* Imagen del Proyecto */}
                            <img
                                src={project.imgUrl}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />

                            {/* Overlay (Capa oscura que aparece al pasar el mouse) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-6 translate-y-4 group-hover:translate-y-0">

                                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-200 text-sm mb-6">{project.description}</p>

                                <div className="flex gap-4">
                                    {/* Botón GitHub */}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
                                        title="Ver Código"
                                    >
                                        <FaGithub size={24} />
                                    </a>

                                    {/* Botón Demo */}
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-500 hover:text-white transition"
                                        title="Ver Demo"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};