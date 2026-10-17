import { useState } from 'react';
import loreData from '../data/lovecraft.json';

export default function LoreCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [expandedId, setExpandedId] = useState(null);

  const categorias = ['Todas', 'Primigenio', 'Dios Exterior', 'Criatura', 'Tomo Prohibido', 'Culto'];

  // Lógica de búsqueda y filtro
  const filteredItems = loreData.filter((item) => {
    const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section>
      <header style={{ marginBottom: '2rem' }}>
        <h2>Archivos Arcanos & Bestiario (JSON Local)</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Mostrando dinámicamente {filteredItems.length} de {loreData.length} registros prohibidos.
        </p>
      </header>

      {/* Controles: Búsqueda y Filtros */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Buscar criatura, dios o tomo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: '1',
            minWidth: '220px',
            padding: '0.65rem 1rem',
            background: 'var(--bg-secondary)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px'
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '0.65rem 1rem',
            background: 'var(--bg-secondary)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px'
          }}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button
          onClick={handleReset}
          style={{
            padding: '0.65rem 1.2rem',
            background: '#21262d',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Restablecer
        </button>
      </div>

      {/* Listado dinámico o mensaje de no resultados */}
      {filteredItems.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          <p>No se encontraron registros bajo esos términos de búsqueda.</p>
          <button 
            onClick={handleReset} 
            style={{ marginTop: '1rem', color: 'var(--accent-lovecraft)', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Ver todos los archivos
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filteredItems.map((item) => (
            <article
              key={item.id}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-lovecraft)', fontWeight: 'bold' }}>
                  {item.categoria}
                </span>
                <h3 style={{ margin: '0.4rem 0' }}>{item.nombre}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {item.descripcion}
                </p>

                {expandedId === item.id && (
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                    <p><strong>Origen:</strong> {item.origen}</p>
                    <p><strong>Peligro:</strong> {item.peligro}</p>
                    <p style={{ marginTop: '0.4rem', fontStyle: 'italic', color: '#c9d1d9' }}>{item.lore}</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => toggleExpand(item.id)}
                style={{
                  marginTop: '1rem',
                  padding: '0.45rem',
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                {expandedId === item.id ? 'Ocultar detalles ▲' : 'Consultar archivo ▼'}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}