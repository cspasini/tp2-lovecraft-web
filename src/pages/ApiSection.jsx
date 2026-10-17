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
      // Endpoint público sin necesidad de API key
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
      <header style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Conexión Externa en Vivo
        </span>
        <h2 style={{ margin: '0.5rem 0' }}>Biblioteca de la Universidad de Miskatonic</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.5' }}>
          Esta sección consulta en tiempo real la <strong>API pública de Open Library</strong>. 
          Aporta un catálogo dinámico y verificado de publicaciones literarias de H. P. Lovecraft preservadas en archivos abiertos, 
          permitiendo contrastar los relatos del mito con los registros editoriales históricos del mundo real.
        </p>
      </header>

      {/* Botón de recarga / reintento (Nivel Propone) */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={fetchLibraryData}
          disabled={loading}
          style={{
            padding: '0.6rem 1.2rem',
            background: loading ? '#484f58' : '#238636',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Consultando archivos...' : 'Sincronizar con Open Library ↻'}
        </button>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Sin claves privadas requeridas
        </span>
      </div>

      {/* Estado 1: Carga */}
      {loading && (
        <div style={{ 
          padding: '3rem', 
          textAlign: 'center', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '8px' 
        }}>
          <p style={{ color: 'var(--accent-lovecraft)', fontSize: '1.1rem' }}>
            Desempolvando tomos en los estantes de Providence...
          </p>
          <small style={{ color: 'var(--text-muted)' }}>Recuperando registros bibliográficos remotos</small>
        </div>
      )}

      {/* Estado 2: Error */}
      {error && !loading && (
        <div style={{ 
          padding: '2rem', 
          background: 'rgba(248, 81, 73, 0.1)', 
          border: '1px solid #f85149', 
          borderRadius: '8px',
          color: '#f85149' 
        }}>
          <h3>Falla en la transmisión del registro</h3>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>{error}</p>
          <button
            onClick={fetchLibraryData}
            style={{
              marginTop: '0.75rem',
              padding: '0.4rem 0.85rem',
              background: '#f85149',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reintentar conexión
          </button>
        </div>
      )}

      {/* Estado 3: Resultados */}
      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {books.map((book, idx) => (
            <article
              key={book.key || idx}
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
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Edición: {book.first_publish_year || 'Año desconocido'}
                </span>
                <h3 style={{ margin: '0.4rem 0', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                  {book.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-lovecraft)' }}>
                  Autor: {book.author_name ? book.author_name.join(', ') : 'H. P. Lovecraft'}
                </p>
              </div>

              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <p>Publicaciones registradas: {book.edition_count || 1}</p>
                {book.language && (
                  <p>Idiomas: {book.language.slice(0, 3).join(', ')}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}