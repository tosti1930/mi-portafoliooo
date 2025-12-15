import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaLinkedinIn, FaGithub, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export const NavBar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    // 1. ESTADOS PARA EL SCROLL
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark";
        return "light";
    });

    // 2. LÓGICA DE "DESVANECER AL BAJAR / APARECER AL SUBIR"
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Lógica:
            // Si subimos (prev > current) O estamos arriba del todo (current < 10) -> VISIBLE
            // Si bajamos (prev < current) Y no estamos arriba -> OCULTO
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
        if (theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

    return (
        // 3. CLASES DINÁMICAS
        // Si 'visible' es true: translate-y-0 (En su lugar) y Opacidad 1
        // Si 'visible' es false: -translate-y-full (Se sube fuera de pantalla) y Opacidad 0
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 transform
            ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            
            ${/* Estilos base: Fondo con desenfoque para que se vea moderno cuando está visible */ ""}
            bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg py-4
        `}>

            <div className="flex items-center justify-between px-6 md:px-10">

                {/* LOGO */}
                <div className="text-2xl font-bold flex items-center gap-2 dark:text-white text-black">
                    <span className="text-3xl">👨‍💻</span>
                </div>

                {/* --- MENÚ DE ESCRITORIO --- */}
                <div className="hidden md:flex gap-8 text-lg font-medium dark:text-gray-300 text-gray-700">
                    <a href="#home" className="hover:text-purple-500 transition">{t('navbar.home')}</a>
                    <a href="#experience" className="hover:text-purple-500 transition">{t('navbar.experience')}</a>
                    <a href="#skills" className="hover:text-purple-500 transition">{t('navbar.skills')}</a>
                    <a href="#projects" className="hover:text-purple-500 transition">{t('navbar.projects')}</a>
                    <a href="#about" className="hover:text-purple-500 transition">{t('navbar.about')}</a>
                    <a href="#contact" className="hover:text-purple-500 transition">{t('navbar.contact')}</a>
                </div>

                {/* --- CONTROLES DE ESCRITORIO --- */}
                <div className="hidden md:flex items-center gap-4">
                    <button onClick={toggleLanguage} className="flex items-center gap-1 px-3 py-1 rounded-full border dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-700 hover:border-purple-500 transition text-sm font-bold">
                        <MdLanguage size={18} /> {language.toUpperCase()}
                    </button>

                    <button onClick={toggleTheme} className="p-2 rounded-full border dark:border-gray-600 border-gray-300 dark:text-yellow-400 text-orange-500 transition">
                        {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    <div className="h-6 w-[1px] bg-gray-600 mx-2"></div>

                    <div className="flex gap-3">
                        <a href="https://linkedin.com" target="_blank" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 dark:text-white transition"><FaLinkedinIn /></a>
                        <a href="https://github.com" target="_blank" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 dark:text-white transition"><FaGithub /></a>
                    </div>
                </div>

                {/* --- BOTÓN HAMBURGUESA --- */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-2 text-orange-500 dark:text-yellow-400">
                        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl dark:text-white text-black focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#121212] border-t dark:border-gray-800 border-gray-200 p-6 flex flex-col gap-6 shadow-xl h-screen">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.home')}</a>
                    <a href="#experience" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.experience')}</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.skills')}</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.projects')}</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.about')}</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-medium dark:text-gray-300 text-gray-700 hover:text-purple-500">{t('navbar.contact')}</a>

                    <div className="h-[1px] bg-gray-600 w-full opacity-30"></div>

                    <button onClick={toggleLanguage} className="flex items-center gap-2 text-lg font-bold dark:text-white text-black">
                        <MdLanguage size={22} /> Cambiar Idioma ({language.toUpperCase()})
                    </button>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full dark:text-white"><FaLinkedinIn size={20} /></a>
                        <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full dark:text-white"><FaGithub size={20} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};