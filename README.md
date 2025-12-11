# 🚀 Portafolio Personal - Claudio

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Bienvenido a mi portafolio personal. Este proyecto es una aplicación web moderna, responsiva y bilingüe diseñada para mostrar mi experiencia, habilidades y proyectos como Desarrollador Web.

🔗 **Demo en vivo:** [PON_AQUI_TU_LINK_DE_VERCEL]

## ✨ Características Principales

* **🎨 Diseño Responsivo:** Adaptado completamente para dispositivos móviles, tablets y escritorio (Mobile First).
* **🌓 Modo Oscuro/Claro:** Switch para cambiar el tema de toda la aplicación, persistente durante la navegación.
* **🌍 Internacionalización (i18n):** Soporte completo para Inglés 🇺🇸 y Español 🇪🇸 usando React Context.
* **📧 Formulario de Contacto Funcional:** Integrado con **EmailJS** para recibir correos directamente.
* **🚀 Animaciones:** Uso de **Lottie React** para animaciones vectoriales fluidas.
* **✨ UI Moderna:** Estilizado con **Tailwind CSS**, efectos de glassmorphism y gradientes.

## 🛠️ Tecnologías Utilizadas

* **Core:** React.js (Vite)
* **Estilos:** Tailwind CSS
* **Iconos:** React Icons (FontAwesome, Material Design, etc.)
* **Carrusel:** React Multi Carousel
* **Animaciones:** Lottie React
* **Backend (Formulario):** EmailJS
* **Despliegue:** Vercel

## 🔧 Instalación y Configuración Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tosti1930/mi-portafoliooo.git](https://github.com/tosti1930/mi-portafoliooo.git)
    cd mi-portafoliooo
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abrir en tu navegador:
    Normalmente en `http://localhost:5173`

## 📨 Configuración del Formulario (EmailJS)

El formulario de contacto utiliza EmailJS. Para que funcione en tu propio entorno, asegúrate de tener configuradas tus credenciales en `src/components/Contact.jsx` o usa variables de entorno:

```javascript
const SERVICE_ID = 'TU_SERVICE_ID';
const TEMPLATE_ID = 'TU_TEMPLATE_ID';
const PUBLIC_KEY = 'TU_PUBLIC_KEY';
