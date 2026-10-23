# UMBRAL 5B — Archivo de Campo (Fase React)

**Trabajo Práctico Grupal 2 · Desarrollo de Sistemas Web Front End · 2026**

Proyecto desarrollado en React que evoluciona el universo de investigación y horror cósmico iniciado en el TP1 hacia una arquitectura moderna basada en componentes, navegación mediante React Router, consumo de datos locales (JSON) y conexión con APIs públicas en tiempo real.

🌐 **Sitio publicado en Vercel:** [https://tp2-lovecraft-web.vercel.app/](https://tp2-lovecraft-web.vercel.app)

---

## 📑 Índice de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Integrantes y Responsabilidades](#-integrantes-y-responsabilidades)
3. [Estructura y Tecnologías](#-estructura-y-tecnologías)
4. [Declaración de Uso de Inteligencia Artificial](#-uso-de-ia)
5. [Capturas](#capturas)
6. [Uso de IA por integrante](#uso-de-ia-por-integrante)

---

## 🌌 Descripción del Proyecto

_Umbral 5B_ propone una experiencia inmersiva inspirada en los mitos de H. P. Lovecraft y los archivos de campo de la Universidad de Miskatonic. Los integrantes se presentan como expedientes de una investigación científica/ocultista. La aplicación organiza la navegación desde una barra lateral compartida (Sidebar) continua y persistente, facilitando la exploración de catálogos arcanos, registros bibliográficos en vivo y documentación técnica del equipo.

---

## 👥 Integrantes y Responsabilidades

| N°     | Nombre y Apellido               | Perfil de GitHub                                       | Responsabilidad Principal       | Tareas Realizadas                                                                                                                                                    |
| ------ | ------------------------------- | ------------------------------------------------------ | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **01** | **Rubén Darío Basconcelo**      | [github.com/VaskoVegan](https://github.com/VaskoVegan) | Gestión de Datos & Arquitectura | Implementación de `lovecraft.json` (20 registros), lógica de búsqueda y filtros en `LoreCatalog.jsx`, y desarrollo del árbol de componentes interactivo.             |
| **02** | **Sergio David Pasini Cabello** | [github.com/cspasini](https://github.com/cspasini)     | Frontend Lead & Layout          | Configuración del repositorio, arquitectura React Router, componente `Sidebar.jsx` (adaptable a mobile), integración de API de Open Library y layout base.           |
| **03** | **Juan Sebastián Páez Horbath** | [Link a GitHub](https://github.com/)                   | Lógica de Interacciones         | Adaptación y migración de los ciclos narrativos individuales del TP1 hacia estados y hooks de React en `ProfileCard.jsx`.                                            |
| **04** | **Alvaro Gabriel Mamani**       | [github.com/alvarogmam](https://github.com/alvarogmam) | Documentación e Integración     | Redacción de la bitácora interactiva por fases (`DevLog.jsx`), creación de imágenes con IA, verificación del checklist de la rúbrica y redacción técnica del README. |

---

## 🛠️ Estructura y Tecnologías

- **React 18 / 19 (Vite):** Arquitectura SPA por componentes funcionales.
- **React Router DOM v6/v7:** Enrutamiento del lado del cliente sin recargas de página.
- **CSS3 / Variables Personalizadas:** Paleta oscura y sobria (estética Ink & Copper / Arkham) y diseño responsive con breakpoints en 400px, 900px y 1200px.
- **JSON Local:** Archivo estático con más de 20 registros clasificados y estructurados.
- **Open Library API:** Conexión asíncrona mediante `fetch` para consulta de obras bibliográficas en tiempo real.
- **Vercel:** Despliegue continuo con configuración de rewrites (`vercel.json`) para soporte de navegación profunda.

```text
src/
├── components/
│   ├── Layout.jsx          # Contenedor con Sidebar persistente y <Outlet/>
│   ├── Sidebar.jsx         # Menú lateral con indicador de ruta activa y panel móvil
│   └── ProfileCard.jsx     # Componente reutilizable mediante props con ciclo interactivo
├── data/
│   └── lovecraft.json      # Catálogo local de 20 entidades, tomos y criaturas
├── pages/
│   ├── Home.jsx            # Portada del equipo y accesos principales
│   ├── Profiles.jsx        # Expedientes del equipo alimentados por props
│   ├── LoreCatalog.jsx     # Búsqueda por texto, filtro de categoría, acordeón y reset
│   ├── ApiSection.jsx      # Consumo de API pública con loading, error y reintento
│   ├── ComponentTree.jsx   # Jerarquía de renderizado con nodos colapsables
│   └── DevLog.jsx          # Bitácora interactiva con filtros por fase
├── styles/
└── App.jsx                 # Configuración de BrowserRouter y rutas
```

---

## Uso de IA

| Aplicación utilizada | Modelo utilizado  |
| -------------------- | ----------------- |
| OpenCode (Zen)       | Big Pickle        |
| Claude               | Claude Sonnet 5.5 |
| Copilot              | GPT-4.1           |
| Gemini               | Gemini Flash      |

---

## Capturas

| Captura                                                                | Pantalla                                                  |
| ---------------------------------------------------------------------- | --------------------------------------------------------- |
| ![Portada](/docs/captura/home.png)                                     | Portada y accesos principales.                            |
| ![Perfiles](/docs/captura/perfiles.png)                                | Expedientes del equipo.                                   |
| ![Grimorio](/docs/captura/grimorio.png)                                | Catálogo con búsqueda, filtros y croquis de cada entidad. |
| ![API](/docs/captura/api.png)                                          | Sección de consumo de API pública.                        |
| ![Arbol de reenderizado de componentes](/docs/captura/render-tree.png) | Arquitectura.                                             |
| ![Bitácora](/docs/captura/bitacora.png)                                | Bitácora de desarrollo con filtros por fase.              |

---

## Uso de IA por integrante

| Integrante          | Aplicación | Modelo            | Contenido o tarea                                                                                                                                             |
| ------------------- | ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sergio Pasini       | OpenCode   | Big Pickle        | Arquitectura React Router, componentes, adaptación a mobile, integración de API de Open Library                                                               |
| Rubén Basconcelo    | Open Code  | Big Pickle        | Generación de los 20 croquis de campo del Grimorio, lógica de búsqueda y filtros y arquitectura general.                                                      |
| Juan Sebastián Páez | Gemini     | Geminni Flash     | Lógica de Interacciones, hooks de React, estilos                                                                                                              |
| Alvaro Mamani       | Claude     | Claude Sonnet 5.5 | Generacion de Imagenes, código del catálogo con imágenes, CSS de ambientación , redacción de prompts para imágenes (Imágenes generadas con Copilot - GPT-4.1) |
