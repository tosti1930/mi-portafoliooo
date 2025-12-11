import React, { createContext, useState, useContext } from 'react';
import { translations } from '../constants/translations';

// 1. Crear el Contexto
const LanguageContext = createContext();

// 2. Crear el Proveedor (El componente que envolverá la App)
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // Idioma por defecto

    // Función para cambiar idioma
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    // Función helper para obtener texto: t('hero.role')
    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];
        keys.forEach(key => {
            value = value[key];
        });
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 3. Hook personalizado para usarlo fácil en cualquier componente
export const useLanguage = () => useContext(LanguageContext);