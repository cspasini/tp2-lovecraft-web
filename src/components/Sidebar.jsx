import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Botón flotante para dispositivos móviles */}
      <button 
        className="mobile-toggle" 
        onClick={toggleSidebar}
        aria-label="Alternar menú"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Menú lateral */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <h2>Mitos & Código</h2>
          <span className="team-badge">Equipo TP2</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end onClick={closeSidebar}>
            Inicio
          </NavLink>
          <NavLink to="/perfiles" onClick={closeSidebar}>
            Integrantes
          </NavLink>
          <NavLink to="/catalogo" onClick={closeSidebar}>
            Grimorio (JSON)
          </NavLink>
          <NavLink to="/api" onClick={closeSidebar}>
            API Abismo
          </NavLink>
          <NavLink to="/arbol" onClick={closeSidebar}>
            Árbol de Render
          </NavLink>
          <NavLink to="/bitacora" onClick={closeSidebar}>
            Bitácora
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <small>IFTS N°29 - 2026</small>
        </div>
      </aside>

      {/* Fondo semitransparente al abrir menú en móviles */}
      {isOpen && <div className="backdrop" onClick={closeSidebar}></div>}
    </>
  );
}