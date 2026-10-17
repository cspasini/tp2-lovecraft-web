
import { useState, Children } from 'react';

// Subcomponente interactivo y colapsable (Criterio 13 Propone)
function TreeNode({ label, type, role, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const childCount = Children.count(children);
  const hasChildren = childCount > 0;

  return (
    <div style={{ marginLeft: '1.25rem', marginTop: '0.6rem' }}>
      <div 
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          padding: '0.45rem 0.85rem',
          borderRadius: '6px',
          cursor: hasChildren ? 'pointer' : 'default',
          userSelect: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        {hasChildren && (
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', fontWeight: 'bold' }}>
            {isOpen ? '▼' : '►'}
          </span>
        )}
        <code style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '0.9rem' }}>
          &lt;{label} /&gt;
        </code>
        <span style={{ 
          fontSize: '0.7rem', 
          background: type === 'Root' ? '#8957e5' : type === 'Layout' ? '#1f6feb' : type === 'Page' ? '#238636' : '#d29922', 
          color: '#ffffff', 
          padding: '0.15rem 0.5rem', 
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          {type}
        </span>
        <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>— {role}</small>
      </div>

      {hasChildren && isOpen && (
        <div style={{ 
          borderLeft: '2px dashed var(--border-color)', 
          marginLeft: '0.75rem',
          paddingLeft: '0.5rem'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function ComponentTree() {
  return (
    <section>
      <header style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Arquitectura de Software (Criterio 13)
        </span>
        <h2 style={{ margin: '0.5rem 0' }}>Árbol de Renderizado de Componentes</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.5' }}>
          Esquema jerárquico dinámico que representa la estructura real de componentes de la aplicación. 
          Hacé clic en cualquier nodo contenedor para <strong>expandir o contraer</strong> sus ramas secundarias.
        </p>
      </header>

      <div style={{ 
        background: '#090d13', 
        border: '1px solid var(--border-color)', 
        borderRadius: '8px', 
        padding: '1.5rem',
        overflowX: 'auto'
      }}>
        <TreeNode label="App" type="Root" role="Configuración general de BrowserRouter y enrutamiento">
          <TreeNode label="Layout" type="Layout" role="Estructura fija compartida entre vistas">
            <TreeNode label="Sidebar" type="Component" role="Navegación lateral compartida con detección de ruta activa" />
            
            <TreeNode label="Outlet" type="Router" role="Punto de inyección dinámico para cada página según la URL">
              <TreeNode label="Home" type="Page" role="Portada del equipo, propósito y accesos principales" />
              
              <TreeNode label="Profiles" type="Page" role="Contenedor de expedientes individuales">
                <TreeNode label="ProfileCard" type="Component" role="Componente reutilizable por props con interacción funcional" />
              </TreeNode>

              <TreeNode label="LoreCatalog" type="Page" role="Catálogo local (JSON) con búsqueda y filtros">
                <TreeNode label="ArticleCard" type="Element" role="Tarjetas de registros arcanos con acordeón desplegable" />
              </TreeNode>

              <TreeNode label="ApiSection" type="Page" role="Consumo de Open Library API con estados de carga y error" />

              <TreeNode label="ComponentTree" type="Page" role="Visualizador jerárquico e interactivo de componentes" />

              <TreeNode label="DevLog" type="Page" role="Bitácora de desarrollo con filtros por fase" />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </div>
    </section>
  );
}