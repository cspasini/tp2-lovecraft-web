import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '2rem 0' }}>
      <span style={{ color: 'var(--accent-lovecraft)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
        Desarrollo Web Frontend 2026
      </span>
      <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Círculo Arcano de Arkham</h1>
      <img
        src="img/grimorio/Miskatonic.png"
        alt="Universidad de Miskatonic"
        style={{
          display: 'block',
          maxWidth: '100%',
          width: '700px',
          height: 'auto',
          margin: '0 auto 2rem',
          borderRadius: '6px'
        }}
      />
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Bienvenidos a la base de operaciones de nuestro equipo. Esta aplicación React traslada la experiencia
        de horror cósmico iniciada en el TP1 hacia una arquitectura SPA moderna, con catálogo dinámico de datos locales,
        consumo de API pública y bitácora de desarrollo.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link
          to="/perfiles"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--accent-lovecraft)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}
        >
          Conocer al Equipo →
        </Link>
        <Link
          to="/catalogo"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-secondary)',
            color: 'var(--text-main)',
            border: '1px solid var(--border-color)',
            textDecoration: 'none',
            borderRadius: '6px'
          }}
        >
          Explorar Grimorio
        </Link>
      </div>
    </section>
  );
}