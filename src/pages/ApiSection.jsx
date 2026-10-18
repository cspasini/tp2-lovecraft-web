import { useState, useEffect } from 'react';

export default function ApiSection() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inspectedCard, setInspectedCard] = useState(null);

  const getBookSynopsis = (title) => {
    const t = title.toLowerCase();
    if (t.includes('cthulhu')) return "Relato fundacional del horror cósmico. Una investigación médica y arqueológica desentraña la existencia de un culto global que rinde tributo a una deidad antediluviana sumergida en el océano Pacífico.";
    if (t.includes('necronomicon')) return "Tratado prohibido atribuido al árabe loco Abdul Alhazred. Contiene fórmulas y advertencias sobre los Dioses Exteriores que aguardan en los umbrales de nuestra percepción sensorial.";
    if (t.includes('dunwich')) return "En una apartada aldea rural de Massachusetts, la familia Whateley cría a una entidad híbrida invisible que amenaza con abrir las puertas a seres extraterrenales.";
    if (t.includes('innsmouth')) return "Un viajero llega al decrépito puerto de Innsmouth, descubriendo un siniestro pacto biológico y religioso entre sus pobladores y criaturas de las profundidades marinas.";
    if (t.includes('mountains') || t.includes('madness')) return "Crónica de la expedición científica de la Universidad de Miskatonic a la Antártida, donde hallan una ciudad fósil construida por entidades estelares antes del origen del hombre.";
    if (t.includes('shadow')) return "Investigación sobre el canje involuntario de mentes humanas a través del tiempo por una civilización cónica prehistórica conocida como la Gran Raza de Yith.";
    return "Manuscrito literario clasificado por la Universidad de Miskatonic. Explora la fragilidad de la razón humana frente a los enigmas y leyes desconocidas del cosmos.";
  };

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

  const toggleInspect = (id) => {
    setInspectedCard(inspectedCard === id ? null : id);
  };

  return (
    <section>
      <header style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Conexión Externa en Vivo · Criterio 12
        </span>
        <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0' }}>Biblioteca de la Universidad de Miskatonic</h2>
        <p style={{ color: 'var(--text-paper-dim)', maxWidth: '750px', lineHeight: '1.6' }}>
          Catálogo en vivo sincronizado con la <strong>API de Open Library</strong>. 
          Hacé clic en <strong>"Leer sinopsis"</strong> en cualquier tomo para alternar entre la ficha editorial y la reseña clasificada del relato.
        </p>
      </header>

      {/* Botón de sincronización */}
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
          Sin claves privadas requeridas · Consulta asíncrona
        </span>
      </div>

      {/* Estado 1: Carga */}
      {loading && (
        <div className="archive-card" style={{ padding: '3.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--accent-copper-bright)', fontSize: '1.2rem', fontFamily: 'var(--font-lore)', fontStyle: 'italic' }}>
            Desempolvando tomos en los anaqueles de Providence...
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

      {/* Estado 3: Resultados interactivos */}
      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {books.map((book, idx) => {
            const cardId = book.key || idx;
            const isInspecting = inspectedCard === cardId;

            return (
              <article
                key={cardId}
                className="archive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '230px',
                  border: isInspecting ? '1px solid var(--accent-copper-bright)' : '1px solid var(--border-copper)'
                }}
              >
                {!isInspecting ? (
                  /* VISTA FRENTE: Portada e imprenta */
                  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                    <img
                      src={
                        book.cover_i 
                          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
                          : 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&auto=format&fit=crop&q=80'
                      }
                      alt={book.title}
                      style={{
                        width: '85px',
                        height: '130px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        border: '1px solid var(--border-copper)',
                        background: 'var(--bg-ink)',
                        flexShrink: 0
                      }}
                    />

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent-copper)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          Edición: {book.first_publish_year || 'Año desconocido'}
                        </span>
                        <h3 style={{ margin: '0.3rem 0', fontSize: '1.1rem', color: 'var(--text-paper)' }}>
                          {book.title}
                        </h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-paper-dim)' }}>
                          {book.author_name ? book.author_name.slice(0, 2).join(', ') : 'H. P. Lovecraft'}
                        </p>
                      </div>

                      <div style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        <p>Publicaciones: {book.edition_count || 1}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* VISTA REVERSO: Sinopsis de archivo */
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-copper-bright)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                        EXPEDIENTE BIBLIOGRÁFICO
                      </span>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--text-paper)', margin: '0.3rem 0' }}>
                        {book.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-paper-dim)', fontFamily: 'var(--font-lore)', fontStyle: 'italic', lineHeight: '1.6', marginTop: '0.5rem' }}>
                        "{getBookSynopsis(book.title)}"
                      </p>
                    </div>

                    <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                      Idiomas registrados: {book.language ? book.language.slice(0, 3).join(', ') : 'Inglés'}
                    </div>
                  </div>
                )}

                {/* Botón interactivo de alternancia */}
                <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => toggleInspect(cardId)}
                    style={{
                      width: '100%',
                      padding: '0.45rem',
                      background: isInspecting ? 'var(--bg-soft)' : 'rgba(193, 137, 89, 0.15)',
                      border: '1px solid var(--accent-copper)',
                      color: 'var(--accent-copper-bright)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.78rem',
                      fontWeight: 'bold',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {isInspecting ? '← Volver a la portada' : 'Leer sinopsis de archivo ↗'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}