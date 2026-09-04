# Tarea 1: CV en línea (SPA)

Este proyecto es una Single Page Application construida con React, Vite y TypeScript, diseñada para mostrar un currículum en línea.

## Autoevaluación

### Estructura
El proyecto sigue una arquitectura de componentes modulares, dividiendo cada sección del CV (`Hero`, `About`, `Projects`, `Experience`, `Education`, `Hobbies`, `ContactForm`) en su propio archivo dentro de `src/components/`. Esto hace que el código sea limpio, fácil de mantener y escalar. La vista principal ensambla todos estos componentes secuencialmente en `App.tsx`.

### Contenido
Se incluyeron todas las secciones solicitadas en los requerimientos, utilizando información relevante para un perfil de desarrollo Front-End. Los datos actúan como plantillas (placeholders de alta calidad) que pueden ser fácilmente modificados con datos reales, ofreciendo un flujo de información claro y profesional.

### Diseño
Se implementó un diseño "Premium" haciendo uso de CSS Vanilla en `index.css`. El enfoque "Dark Mode" con acentos vibrantes (gradientes azul/violeta) y elementos de "Glassmorphism" (tarjetas con transparencia y desenfoque) proporcionan un aspecto moderno y altamente atractivo. Se utilizaron variables CSS para facilitar la consistencia y escalabilidad, junto con micro-animaciones en los botones y al revelar los componentes.

### Accesibilidad y usabilidad
Se utilizaron etiquetas semánticas de HTML5 (`<main>`, `<section>`, `<form>`). El texto posee un contraste adecuado contra el fondo oscuro. El formulario de contacto está correctamente etiquetado (`<label htmlFor="...">`) para mejorar la accesibilidad con lectores de pantalla. Las animaciones son sutiles y no entorpecen la navegación. El diseño es responsivo y se adapta correctamente a diferentes tamaños de pantalla mediante el uso de `flexbox` y `grid`.

---

## Instrucciones de ejecución

1. Clona el repositorio y navega a la carpeta de la tarea:
   ```bash
   cd tarea1
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
