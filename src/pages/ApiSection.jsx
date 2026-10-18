import { useState, useEffect } from 'react';

export default function ApiSection() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Consulta a la API pública de Open Library
  const fetchLibraryData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://openlibrary.org/search.json?q=h+p+lovecraft&limit=9'
      );

      if (!response.ok) {
        throw new Error(`Error en el servidor arcano: Código ${response.status}`);
      }

      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError(err.message || 'No se pudo conectar con el archivo bibliográfico.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLibraryData();
  }, []);

  return (
    <section>
      <header style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Conexión Externa en Vivo · Criterio 12
        </span>
        <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0' }}>Biblioteca de la Universidad de Miskatonic</h2>
        <p style={{ color: 'var(--text-paper-dim)', maxWidth: '750px', lineHeight: '1.6' }}>
          Esta sección consulta en tiempo real la <strong>API pública de Open Library</strong>. 
          Aporta un catálogo dinámico y verificado de publicaciones literarias de H. P. Lovecraft preservadas en archivos abiertos, 
          permitiendo contrastar los relatos del mito con los registros editoriales históricos del mundo real.
        </p>
      </header>

      {/* Botón de recarga / reintento (Nivel Propone) */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={fetchLibraryData}
          disabled={loading}
          style={{
            padding: '0.65rem 1.4rem',
            background: loading ? '#484f58' : 'var(--accent-copper)',
            color: '#101512',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.5px'
          }}
        >
          {loading ? 'Consultando archivos...' : 'Sincronizar con Open Library ↻'}
        </button>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Sin claves privadas requeridas · Catálogo Abierto
        </span>
      </div>

      {/* Estado 1: Carga */}
      {loading && (
        <div className="archive-card" style={{ padding: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--accent-copper-bright)', fontSize: '1.15rem', fontFamily: 'var(--font-lore)', fontStyle: 'italic' }}>
            Desempolvando tomos en los estantes de Providence...
          </p>
          <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
            Recuperando registros bibliográficos remotos
          </small>
        </div>
      )}

      {/* Estado 2: Error */}
      {error && !loading && (
        <div style={{ 
          padding: '2rem', 
          background: 'rgba(248, 81, 73, 0.1)', 
          border: '1px solid #f85149', 
          borderRadius: '6px',
          color: '#f85149' 
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Falla en la transmisión del registro</h3>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>{error}</p>
          <button
            onClick={fetchLibraryData}
            style={{
              marginTop: '0.75rem',
              padding: '0.5rem 1rem',
              background: '#f85149',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reintentar conexión
          </button>
        </div>
      )}

      {/* Estado 3: Resultados */}
      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {books.map((book, idx) => (
            <article
              key={book.key || idx}
              className="archive-card"
              style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'row',
                alignItems: 'flex-start'
              }}
            >
              <img
                src={
                  book.cover_i 
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
                    : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&auto=format&fit=crop&q=80'
                }
                alt={book.title}
                style={{
                  width: '85px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  border: '1px solid var(--border-copper)',
                  background: 'var(--bg-ink)',
                  flexShrink: 0
                }}
              />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '120px' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-copper)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Edición: {book.first_publish_year || 'Año desconocido'}
                  </span>
                  <h3 style={{ margin: '0.3rem 0', fontSize: '1.05rem', color: 'var(--text-paper)' }}>
                    {book.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-paper-dim)' }}>
                    Autor: {book.author_name ? book.author_name.slice(0, 2).join(', ') : 'H. P. Lovecraft'}
                  </p>
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                  <p>Publicaciones: {book.edition_count || 1}</p>
                  {book.language && (
                    <p>Idiomas: {book.language.slice(0, 3).join(', ')}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}