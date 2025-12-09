import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // <--- 1. Importar Contexto

export const Footer = () => {
    const { t } = useLanguage(); // <--- 2. Usar Hook

    return (
        <footer className="bg-black text-gray-400 py-6 text-center text-sm border-t border-gray-900">
            <p>{t('footer.rights')}</p>
            <p className="mt-2">{t('footer.madeWith')}</p>
        </footer>
    );
};