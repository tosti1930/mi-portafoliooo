import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLanguage } from '../context/LanguageContext';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

export const Skills = () => {
    const { t } = useLanguage();

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        // Agregamos 'relative overflow-hidden' para que la luz no se salga de la sección
        <section className="skill relative py-20 bg-[#121212] overflow-hidden" id="skills">

            {/* --- FONDO DECORATIVO (CSS PURO) --- */}
            {/* Reemplazamos la imagen por este div con gradiente y blur */}
            <div className="absolute top-[10%] left-[-10%] w-[40%] h-[60%] bg-gradient-to-r from-purple-600/40 to-pink-600/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-[#151515] rounded-[50px] text-center py-14 px-8 shadow-[0_0_50px_0_rgba(0,0,0,0.5)] border border-gray-800">

                    <h2 className="text-4xl font-bold mb-4 text-white">
                        {t('skills.title')}
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('skills.desc')}
                    </p>

                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="skill-slider py-10"
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                    >
                        {/* ITEM 1: React */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                                <FaReact size={60} className="text-purple-400" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">React</h5>
                        </div>

                        {/* ITEM 2: JavaScript */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-yellow-500 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                                <FaJs size={60} className="text-yellow-400" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">JavaScript</h5>
                        </div>

                        {/* ITEM 3: TypeScript */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                <SiTypescript size={60} className="text-blue-500" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">TypeScript</h5>
                        </div>

                        {/* ITEM 4: Tailwind */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                <SiTailwindcss size={60} className="text-cyan-400" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">Tailwind CSS</h5>
                        </div>

                        {/* ITEM 5: HTML & CSS */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                                <FaHtml5 size={60} className="text-orange-500" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">HTML5 / CSS3</h5>
                        </div>

                        {/* ITEM 6: Node JS */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-green-600 flex items-center justify-center shadow-[0_0_20px_rgba(22,163,74,0.5)]">
                                <FaNodeJs size={60} className="text-green-500" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">Node.js</h5>
                        </div>

                        {/* ITEM 7: Git */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                <FaGitAlt size={60} className="text-red-500" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">Git</h5>
                        </div>

                        {/* ITEM 8: Python */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-[0_0_20px_rgba(202,138,4,0.5)]">
                                <FaPython size={60} className="text-yellow-400" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">Python</h5>
                        </div>

                        {/* ITEM 9: Java */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                <FaJava size={60} className="text-red-500" />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">Java</h5>
                        </div>

                        {/* ITEM 10: SQL Server */}
                        <div className="flex flex-col items-center justify-center gap-4 hover:scale-110 transition duration-300">
                            <div className="w-32 h-32 rounded-full border-4 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                                    alt="SQL Server"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h5 className="text-xl font-bold mt-2 text-white">SQL Server</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};