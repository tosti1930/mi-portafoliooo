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

        // OJO: Recuerda que estos datos DEBEN ser los tuyos reales de EmailJS
        const SERVICE_ID = 'service_rz98ko3';
        const TEMPLATE_ID = 'template_uhp9b2h';
        const PUBLIC_KEY = 'bfqBWa1uWOAT6Zybu';

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
        <section id="contact" className="min-h-screen bg-gradient-to-b from-[#121212] to-black py-20 px-6">
            <div className="container mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

                    {/* --- COLUMNA IZQUIERDA: Animación e Info --- */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">

                        {/* 3. Reemplazamos la imagen por el contenedor de Lottie */}
                        <div className="w-full max-w-[500px]">
                            <Lottie
                                animationData={contactAnim}
                                loop={true}
                                // Opcional: Mantengo la sombra morada que tenías en la imagen
                                className="drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                            />
                        </div>

                        <div className="space-y-4 text-gray-300 w-full max-w-md bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                                    <FaEnvelope />
                                </div>
                                <span>{t('contact.info.email')}</span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMNA DERECHA: Formulario --- */}
                    <div className="w-full md:w-1/2 bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 shadow-2xl shadow-purple-900/10">

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            {/* (El resto del formulario sigue igual...) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-400">{t('contact.form.firstName')}</label>
                                    <input type="text" name="user_name" placeholder={t('contact.form.firstNamePlaceholder')} className="bg-[#050505] border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 transition" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-gray-400">{t('contact.form.lastName')}</label>
                                    <input type="text" name="user_lastname" placeholder={t('contact.form.lastNamePlaceholder')} className="bg-[#050505] border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 transition" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400">{t('contact.form.email')}</label>
                                <input type="email" name="user_email" placeholder={t('contact.form.emailPlaceholder')} className="bg-[#050505] border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 transition" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400">{t('contact.form.message')}</label>
                                <textarea name="message" rows="4" placeholder={t('contact.form.messagePlaceholder')} className="bg-[#050505] border border-gray-700 text-white p-3 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none" required ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                <span>{buttonText}</span>
                                <FaPaperPlane />
                            </button>

                            {status.message && <p className={`text-center mt-4 ${status.success ? 'text-green-500' : 'text-red-500'}`}>{status.message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};