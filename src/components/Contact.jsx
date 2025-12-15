import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnim from "../assets/Deployment.json";

export const Contact = () => {
    const { t } = useLanguage();
    const form = useRef();

    const [buttonText, setButtonText] = useState(t('contact.form.sendButton'));
    const [status, setStatus] = useState({});

    useEffect(() => {
        if (buttonText !== t('contact.form.sending') && buttonText !== t('contact.form.sent')) {
            setButtonText(t('contact.form.sendButton'));
        }
    }, [t]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText(t('contact.form.sending'));

        // Credenciales de EmailJS
        const SERVICE_ID = 'service_rz98ko3';
        const TEMPLATE_ID = 'template_uhp9b2h';
        const PUBLIC_KEY = 'bfqBWa1uWOAT6Zybu';

        // Enviar el formulario usando EmailJS
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setButtonText(t('contact.form.sent'));
                setStatus({ success: true, message: t('contact.form.successMsg') });
                e.target.reset();
                setTimeout(() => {
                    setButtonText(t('contact.form.sendButton'));
                    setStatus({});
                }, 3000);
            }, (error) => {
                setButtonText(t('contact.form.sendButton'));
                setStatus({ success: false, message: t('contact.form.errorMsg') });
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className="min-h-screen bg-white dark:bg-[#121212] py-20 px-6 relative overflow-hidden transition-colors duration-300">

            {/* ================= LUCES DECORATIVAS (Diagonal) ================= */}

            {/* LUZ 1: ABAJO IZQUIERDA (Morado/Rosa) */}
            <div className="hidden dark:block absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-t from-purple-600/20 to-pink-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* LUZ 2: ARRIBA DERECHA (Azul/Morado) - NUEVA */}
            <div className="hidden dark:block absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-b from-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* ================================================================ */}

            <div className="container mx-auto relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

                    {/* --- COLUMNA IZQUIERDA: Animación e Info --- */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">

                        <div className="w-full max-w-[500px]">
                            <Lottie
                                animationData={contactAnim}
                                loop={true}
                                className="drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                            />
                        </div>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300 w-full max-w-md bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <FaEnvelope />
                                </div>
                                <span className="font-medium">{t('contact.info.email')}</span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Formulario --- */}
                    <div className="w-full md:w-1/2 bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-purple-900/10">

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('contact.form.firstName')}</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder={t('contact.form.firstNamePlaceholder')}
                                        className="bg-white dark:bg-[#050505] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('contact.form.lastName')}</label>
                                    <input
                                        type="text"
                                        name="user_lastname"
                                        placeholder={t('contact.form.lastNamePlaceholder')}
                                        className="bg-white dark:bg-[#050505] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className="bg-white dark:bg-[#050505] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t('contact.form.message')}</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="bg-white dark:bg-[#050505] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/30">
                                <span>{buttonText}</span>
                                <FaPaperPlane />
                            </button>

                            {status.message && <p className={`text-center mt-4 font-medium ${status.success ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{status.message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};