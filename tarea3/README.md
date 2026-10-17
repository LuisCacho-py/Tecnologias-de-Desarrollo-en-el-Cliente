# CineSphere - Colección y Administración de Películas (Tarea 3)

Aplicación web desarrollada en **Angular 17** con TypeScript para consultar un catálogo de películas y administrar una colección de favoritos en memoria.

---

## 🚀 Características Principales

1. **Lista y Presentación de Películas**:
   - Catálogo interactivo de películas con visualización cinematográfica.
   - Datos hardcodeados en memoria con información detallada: Título, Director, Productor, Género, Año, Descripción, Rating, Duración, Reparto y Póster.
   - Componente reutilizable `MovieCardComponent` con comunicación `@Input()` y `@Output()`.

2. **Filtrado Multicriterio en Tiempo Real**:
   - Búsqueda y filtrado instantáneo sin peticiones externas.
   - Filtros por:
     - **Título** (búsqueda de texto)
     - **Director**
     - **Productor**
     - **Género** (chips de selección rápida y selector)
     - **Año**
   - Implementado utilizando **Reactive Forms** (`FormGroup`, `FormControl`, `valueChanges`).
   - Botón de limpieza de filtros y contador de resultados en vivo.

3. **Página de Detalle de Película (`/movies/:id`)**:
   - Vista completa de la película con backdrop dinámico, créditos de dirección y producción, sinopsis y elenco.
   - Botón interactivo para **marcar / quitar de favoritos** con actualización en tiempo real.
   - Botón de navegación para regresar al catálogo.

4. **Administración de Favoritos (`/favorites`)**:
   - Página dedicada para consultar los títulos favoritos.
   - Posibilidad de ver detalles y quitar películas directamente desde la vista.
   - **Reactividad inmediata**: Al desmarcar una película, desaparece al instante de la lista sin recargas.
   - Estado vacío estilizado con llamada a la acción para explorar el catálogo.

5. **Persistencia Estricta en Memoria**:
   - Gestión de estado mediante `FavoritesService` utilizando `BehaviorSubject` de **RxJS**.
   - Cero uso de `localStorage`, `sessionStorage`, cookies, bases de datos o APIs externas.

6. **Directivas y Comunicación**:
   - Directivas nativas de Angular (`@if`, `@for`, `[ngClass]`, `[ngStyle]`).
   - Directiva personalizada `ImageFallbackDirective` (`[appImageFallback]`) para soporte ante fallos de carga de imágenes con poster vectorial SVG embebido.
   - Comunicación de componentes mediante `@Input()` y `@Output()`.

---

## 📁 Arquitectura del Proyecto

```
tarea3/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── movies/              # Catálogo principal y filtrado
│   │   │   ├── movie-detail/        # Vista detallada de película
│   │   │   └── favorites/           # Gestión de favoritos en memoria
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── navbar/          # Barra de navegación con contador de favoritos
│   │   │   │   ├── footer/          # Pie de página
│   │   │   │   ├── movie-card/      # Tarjeta reutilizable (@Input/@Output)
│   │   │   │   ├── movie-filter/    # Formulario reactivo de filtros
│   │   │   │   └── toast/           # Notificaciones reactivas flotantes
│   │   │   ├── directives/
│   │   │   │   └── image-fallback.directive.ts
│   │   │   ├── models/
│   │   │   │   ├── movie.model.ts
│   │   │   │   └── movie-filter.model.ts
│   │   │   ├── services/
│   │   │   │   ├── movie.service.ts
│   │   │   │   └── favorites.service.ts
│   │   │   └── data/
│   │   │       └── movies.data.ts
│   │   ├── app.component.*
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🛠️ Instrucciones de Ejecución

1. Abrir una terminal y posicionarse dentro de la carpeta `tarea3`:
   ```bash
   cd tarea3
   ```

2. Instalar las dependencias (si no se han instalado previamente):
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo local:
   ```bash
   npm start
   # o bien:
   ng serve
   ```

4. Abrir en el navegador:
   ```
   http://localhost:4200/
   ```

5. Para compilar la versión de producción:
   ```bash
   npm run build
   ```

---

## 🎯 Criterios de Evaluación Cubiertos

| Criterio | Valor | Estado |
|---|---|---|
| **Lista y presentación de películas** | 15% | ✅ Completado con 14 películas con metadatos completos y diseño de alta calidad |
| **Filtrado por diferentes criterios** | 15% | ✅ Filtros por Título, Director, Productor, Género y Año con Reactive Forms |
| **Página de detalle y navegación** | 15% | ✅ Ruta `/movies/:id`, backdrop, metadatos y alternancia de favorito |
| **Administración de favoritos** | 20% | ✅ Ruta `/favorites`, eliminación en tiempo real, contador reactivo y servicio en memoria |
| **Routing** | 10% | ✅ Angular Router (`/`, `/movies/:id`, `/favorites`, comodín `**`) |
| **Uso adecuado de Components y Services** | 15% | ✅ Separación de responsabilidades, `MovieService` y `FavoritesService` reactivo |
| **Uso de TypeScript y estructura** | 5% | ✅ Interfaces estrictas, tipado fuerte y arquitectura limpia |
| **Interfaz y experiencia de usuario** | 5% | ✅ Tema oscuro cinematográfico moderno, diseño responsivo y micro-animaciones |
