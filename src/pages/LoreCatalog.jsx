import { useState } from 'react';
import loreData from '../data/lovecraft.json';

export default function LoreCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['Todas', ...new Set(loreData.map((item) => item.category))];

  const filteredItems = loreData.filter((item) => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
    setExpandedId(null);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section>
      <header style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Registro Local JSON · Criterios 10 y 11
        </span>
        <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0' }}>Grimorio del Archivo Subterráneo</h2>
        <p style={{ color: 'var(--text-paper-dim)', maxWidth: '750px', lineHeight: '1.6' }}>
          Índice clasificado de 20 entidades, tomos arcanos y reliquias recuperadas por la Universidad de Miskatonic.
          Filtrá por categoría, buscá por palabras clave o inspeccioná los informes de campo completos.
        </p>
      </header>

      {/* Buscador y Filtros */}
      <div className="archive-card" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Buscar por nombre, origen o palabras clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: '1',
              minWidth: '260px',
              padding: '0.65rem 1rem',
              background: 'var(--bg-ink)',
              border: '1px solid var(--border-copper)',
              borderRadius: '4px',
              color: 'var(--text-paper)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-body)'
            }}
          />
          <button
            onClick={handleReset}
            style={{
              padding: '0.65rem 1.25rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-paper)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            Restablecer Filtros
          </button>
        </div>

        {/* Botones de categoría */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)',
                background: selectedCategory === cat ? 'var(--accent-copper)' : 'var(--bg-ink)',
                color: selectedCategory === cat ? '#101512' : 'var(--text-paper-dim)',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: selectedCategory === cat ? 'bold' : 'normal'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla de Entidades */}
      {filteredItems.length === 0 ? (
        <div className="archive-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--accent-copper-bright)', fontFamily: 'var(--font-lore)', fontSize: '1.2rem' }}>
            No se hallaron coincidencias en este sector del archivo.
          </p>
          <button
            onClick={handleReset}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: 'var(--accent-copper)',
              color: '#101512',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Ver catálogo completo
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredItems.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <article
                key={item.id}
                className="archive-card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-copper-bright)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#f85149', background: 'rgba(248, 81, 73, 0.1)', padding: '0.15rem 0.45rem', borderRadius: '3px' }}>
                      {item.threatLevel}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-paper)', margin: '0.2rem 0' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-paper-dim)', marginBottom: '0.75rem' }}>
                    📍 <strong>Origen:</strong> {item.origin}
                  </p>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-paper)', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <button
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-copper-bright)',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: 0
                    }}
                  >
                    {isOpen ? 'Ocultar expediente confidencial ▲' : 'Ver expediente confidencial ▼'}
                  </button>

                  {isOpen && (
                    <div style={{ marginTop: '0.65rem', padding: '0.65rem', background: 'var(--bg-ink)', borderRadius: '4px', borderLeft: '2px solid var(--accent-copper)', fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-paper-dim)', lineHeight: '1.5' }}>
                      📜 {item.historicalNote}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}