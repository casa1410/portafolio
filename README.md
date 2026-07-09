# Portafolio — HUD Retro 8-bit

Portafolio personal con estética de HUD retro estilo videojuego RPG de 8 bits: marco de ladrillos en pixel art, tipografía monoespaciada, paleta blanco/negro/gris, y un simulador de combate interactivo.

🔗 **Demo en vivo:** _(agrega aquí tu URL de Vercel una vez la tengas)_

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- CSS Modules (sin frameworks de UI, todo el estilo es CSS a mano)
- Sin router: la navegación se maneja con estado de React (`MainSection` / `AboutTab`)
- i18n propio (inglés/español) vía Context API
- Despliegue continuo en [Vercel](https://vercel.com), conectado al repo de GitHub

## Características

- **Marco de ladrillos en pixel art**: borde de la ventana generado como SVG con la técnica de `border-image` de 9 slices, con `image-rendering: pixelated`.
- **Sobre mí**, con 4 sub-pestañas: Inicio, Experiencia, Habilidades y Hobbies, más un simulador de batalla RPG interactivo (comandos, hechizos elementales, escudos, regeneración de MP, animaciones de golpe) que mantiene la partida activa al cambiar de pestaña.
- **Proyectos**: cofres de pixel art clickeables que abren un modal con la info de cada proyecto (con una animación de "salir del cofre" tipo FLIP).
- **Contacto**: formulario funcional (nombre/correo/mensaje) que envía el mensaje por correo usando [Web3Forms](https://web3forms.com), con estado de envío/éxito/error y honeypot anti-spam.
- **Apoyar**: botón de donación vía Ko-fi.
- **Internacionalización** completa (ES/EN) con textos y hasta mensajes de combate parametrizados.
- **Responsivo** hasta ~375px: en pantallas angostas el sidebar se convierte en un drawer deslizable con botón de hamburguesa.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # type-check (tsc) + build de producción
npm run preview   # sirve el build de producción localmente
```

## Estructura del proyecto

```
src/
  components/
    Layout/              Sidebar, ContentPanel, marco de pixel art
    sections/
      About/              Inicio, Experiencia, Habilidades, Hobbies, simulador de batalla
      SideProjects/        Cofres de proyectos + modal
      Contact/             Info de contacto + formulario (Web3Forms)
      Support/              Botón de Ko-fi
    UI/                    Componentes compartidos
  context/                 LanguageContext (ES/EN)
  i18n/                    en.ts / es.ts (textos de toda la app)
  types/                   Tipos compartidos (MainSection, AboutTab, etc.)
  utils/                   Helpers (ej. cálculo de nivel/XP)
```

## Despliegue

El proyecto está conectado a Vercel: cada `git push` a `main` dispara un redeploy automático, sin pasos manuales adicionales. Vercel detecta el preset de Vite automáticamente (`npm run build`, salida en `dist/`).

## Configuración pendiente

El formulario de contacto necesita una **Access Key de [Web3Forms](https://web3forms.com)** (gratuita, sin tarjeta) para enviar correos de verdad. Se configura en:

```
src/components/sections/Contact/Contact.tsx
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
```
