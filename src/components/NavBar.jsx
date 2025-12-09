import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- IMPORTAR CONTEXTO
import { FaLinkedinIn, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export const NavBar = () => {
    // --- LÓGICA DE IDIOMA (DESDE EL CONTEXTO) ---
    const { language, toggleLanguage, t } = useLanguage();

    // --- LÓGICA DE TEMA OSCURO (LOCAL) ---
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark";
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

    return (
        <nav className="flex items-center py-6 px-10 fixed w-full top-0 z-50 bg-[#121212]/90 backdrop-blur-md border-b border-gray-800 transition-colors duration-300 dark:bg-[#121212]/90 dark:border-gray-800 bg-white/90 border-gray-200">

            <div className="text-2xl font-bold flex items-center gap-2 dark:text-white text-black">
                <span className="text-3xl">👨‍💻</span>
            </div>

            {/* AQUI USAMOS LA FUNCIÓN t() PARA TRADUCIR LOS LINKS */}
            <div className="hidden md:flex gap-8 text-lg font-medium ml-12 lg:ml-20 dark:text-gray-300 text-gray-700">
                <a href="#home" className="hover:text-purple-500 transition">{t('navbar.home')}</a>
                <a href="#experience" className="hover:text-purple-500 transition">{t('navbar.experience')}</a>
                <a href="#skills" className="hover:text-purple-500 transition">{t('navbar.skills')}</a>
                <a href="#projects" className="hover:text-purple-500 transition">{t('navbar.projects')}</a>
                <a href="#about" className="hover:text-purple-500 transition">{t('navbar.about')}</a>
                <a href="#contact" className="hover:text-purple-500 transition">{t('navbar.contact')}</a>
            </div>

            <div className="ml-auto flex items-center gap-4">
                {/* BOTÓN DE IDIOMA REAL */}
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 px-3 py-1 rounded-full border dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-700 hover:border-purple-500 transition text-sm font-bold"
                >
                    <MdLanguage size={18} />
                    {language.toUpperCase()}
                </button>

                {/* BOTÓN TEMA */}
                <button onClick={toggleTheme} className="p-2 rounded-full border dark:border-gray-600 border-gray-300 dark:text-yellow-400 text-orange-500 transition">
                    {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>

                {/* ICONOS REDES SOCIALES */}
                <div className="h-6 w-[1px] bg-gray-600 mx-2 hidden md:block"></div>
                <div className="flex gap-3 hidden md:flex">
                    <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 dark:text-white transition"><FaLinkedinIn /></a>
                    <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 dark:text-white transition"><FaGithub /></a>
                </div>
            </div>
        </nav>
    );
};