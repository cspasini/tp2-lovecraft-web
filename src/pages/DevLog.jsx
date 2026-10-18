import { useState } from 'react';

export default function DevLog() {
  const [filterPhase, setFilterPhase] = useState('Todas');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const logs = [
    {
      id: 1,
      fecha: "Fase 1 · Setup & Repositorio",
      fase: "Organización",
      titulo: "Inicialización del proyecto React y control de versiones",
      decision: "Migración de arquitectura HTML/CSS plano (TP1) hacia Vite + React Router.",
      detalle: "Se creó el repositorio grupal independiente en GitHub con invitaciones aceptadas. Se instaló react-router-dom y se definió la configuración de redirección en vercel.json para soportar rutas directas sin error 404.",
      responsables: "Equipo completo"
    },
    {
      id: 2,
      fecha: "Fase 2 · Layout & Navegación",
      fase: "Arquitectura",
      titulo: "Construcción de Sidebar compartida y navegación continua",
      decision: "Implementar un layout común con <Outlet/> y <NavLink/> para persistencia de la barra lateral.",
      detalle: "Se diseñó la barra lateral con identificación automática de la ruta activa y menú desplegable para dispositivos móviles con panel tipo backdrop, cumpliendo la navegación continua sin depender del botón atrás del navegador.",
      responsables: "Sergio Pasini & Rubén Basconcelo"
    },
    {
      id: 3,
      fecha: "Fase 3 · Portada y Expedientes",
      fase: "Componentes",
      titulo: "Reutilización de componentes por props e interacciones narrativas",
      decision: "Creación del componente modular <ProfileCard/> alimentado con datos estructurados de cada integrante.",
      detalle: "Se trasladaron las identidades del Umbral 5B. Se encapsularon las interacciones JavaScript del TP1 (El Observatorio, Mapa Estelar, Buceo en el Vacío y Susurros Cósmicos) como estados funcionales en React para cada tarjeta.",
      responsables: "Sergio Pasini"
    },
    {
      id: 4,
      fecha: "Fase 4 · Grimorio Arcano",
      fase: "Datos Locales",
      titulo: "Consumo dinámico de JSON local de 20 registros con filtros y búsqueda",
      decision: "Estructurar un catálogo de 20 entidades y reliquias en un archivo JSON local.",
      detalle: "Se desarrolló una interfaz con barra de búsqueda en tiempo real por texto, filtrado por categorías de entidades/tomos, visualización expandible mediante acordeón y botón de restablecimiento total de filtros.",
      responsables: "Rubén Basconcelo"
    },
    {
      id: 5,
      fecha: "Fase 5 · Conexión Bibliográfica",
      fase: "API Pública",
      titulo: "Integración con API pública de Open Library",
      decision: "Consultar datos literarios de Lovecraft en tiempo real sin requerir claves privadas expuestas.",
      detalle: "Se utilizó fetch asíncrono con manejo estricto de tres estados de UI: carga (loading con mensaje temático), error de red y renderizado dinámico de tarjetas, incorporando botón para reintentar o sincronizar la consulta.",
      responsables: "Sergio Pasini & Rubén Basconcelo"
    },
    {
      id: 6,
      fecha: "Fase 6 · Estructura de Software",
      fase: "Arquitectura",
      titulo: "Mapeo jerárquico interactivo del árbol de renderizado",
      decision: "Representación dinámica de la estructura real de componentes con nodos colapsables.",
      detalle: "Se construyó un componente recursivo con estados independientes que permite contraer y desplegar las ramas del árbol de React para inspeccionar la jerarquía visual de la aplicación entregada.",
      responsables: "Rubén Basconcelo"
    },
    {
      id: 7,
      fecha: "Fase 7 · Assets & Consistencia",
      fase: "Assets & Paridad",
      titulo: "Normalización de recursos visuales y paridad cross-platform",
      decision: "Centralización y estandarización estricta de rutas de recursos estáticos en public/img.",
      detalle: "Se resolvieron discrepancias de visualización entre localhost (Windows case-insensitive) y producción en Vercel (Linux case-sensitive) generadas por mayúsculas/minúsculas en avatares y música. Se forzó la sincronización del árbol de trabajo en Git y la limpieza de caché interna en Vite (--force).",
      responsables: "Sergio Pasini & Rubén Basconcelo"
    },
    {
      id: 8,
      fecha: "Fase 8 · Estabilidad del DOM & UX",
      fase: "Estabilidad & DOM",
      titulo: "Blindaje del Virtual DOM contra traductores y refactor de Biblioteca",
      decision: "Protección integral contra interferencias externas del navegador y conmutación reactiva de sinopsis.",
      detalle: "Se neutralizó el error 'removeChild' en React provocado por traductores automáticos (Google Translate) mediante el atributo translate='no' y metaetiquetas en index.html, además del encapsulamiento de nodos de texto condicionales en ApiSection.jsx. Se implementó alternancia directa de estado para las sinopsis bibliográficas.",
      responsables: "Sergio Pasini"
    }
  ];

  const fases = ['Todas', 'Organización', 'Arquitectura', 'Componentes', 'Datos Locales', 'API Pública', 'Assets & Paridad', 'Estabilidad & DOM'];

  const filteredLogs = filterPhase === 'Todas' 
    ? logs 
    : logs.filter(log => log.fase === filterPhase);

  const toggleAccordion = (id) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <section>
      <header style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Registro de Proceso (Criterio 14)
        </span>
        <h2 style={{ margin: '0.5rem 0' }}>Bitácora de Desarrollo — Umbral 5B</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.5' }}>
          Documentación estructurada de decisiones, desafíos técnicos y soluciones implementadas 
          durante la transición del proyecto hacia React. Usá los filtros o desplegá cada entrada para ver el registro completo.
        </p>
      </header>

      {/* Filtros funcionales por fase de desarrollo */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {fases.map(fase => (
          <button
            key={fase}
            onClick={() => setFilterPhase(fase)}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              background: filterPhase === fase ? 'var(--accent-lovecraft)' : 'var(--bg-secondary)',
              color: filterPhase === fase ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              transition: 'all 0.2s ease'
            }}
          >
            {fase}
          </button>
        ))}
      </div>

      {/* Listado de entradas con acordeón desplegable */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredLogs.map(log => {
          const isOpen = expandedIndex === log.id;

          return (
            <article
              key={log.id}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <div
                onClick={() => toggleAccordion(log.id)}
                style={{
                  padding: '1.2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', fontWeight: 'bold' }}>
                      {log.fecha}
                    </span>
                    <span style={{ fontSize: '0.7rem', background: '#21262d', padding: '0.1rem 0.45rem', borderRadius: '4px', color: 'var(--text-muted)' }}>
                      {log.fase}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{log.titulo}</h3>
                </div>

                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>
                  {isOpen ? '▲' : '▼'}
                </span>
              </div>

              {isOpen && (
                <div style={{ 
                  padding: '0 1.2rem 1.2rem 1.2rem', 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '1rem', 
                  fontSize: '0.88rem', 
                  color: '#c9d1d9', 
                  lineHeight: '1.6' 
                }}>
                  <p><strong>Decisión clave:</strong> {log.decision}</p>
                  <p style={{ marginTop: '0.5rem' }}><strong>Detalle técnico:</strong> {log.detalle}</p>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <strong>Responsabilidad:</strong> {log.responsables}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}