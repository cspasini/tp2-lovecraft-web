import { useState } from 'react';

export default function ProfileCard({
  idNumber,
  name,
  surname,
  location,
  age,
  role,
  quote,
  githubUrl,
  portfolioUrl,
  skills = [],
  movies = [],
  music = [],
  interactionTitle,
  interactionDescription,
  interactionNotes = [],
  avatarUrl
}) {
  const [index, setIndex] = useState(0);
  const [activeMessage, setActiveMessage] = useState(interactionNotes[0] || 'En espera de señal.');
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' | 'movies' | 'music'

  const handleNextSignal = () => {
    const nextIdx = (index + 1) % interactionNotes.length;
    setIndex(nextIdx);
    setActiveMessage(interactionNotes[nextIdx]);
  };

  return (
    <article className="archive-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Cabecera del expediente */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <img
          src={avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${name}`}
          alt={name}
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '4px',
            border: '2px solid var(--accent-copper)',
            objectFit: 'cover',
            background: 'var(--bg-ink)'
          }}
        />
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent-copper-bright)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            EXPEDIENTE N.º {idNumber} · ARCHIVO 2026
          </span>
          <h3 style={{ fontSize: '1.3rem', margin: '0.2rem 0', color: 'var(--text-paper)' }}>
            {name} <em style={{ color: 'var(--accent-copper)', fontStyle: 'italic' }}>{surname}</em>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-paper-dim)' }}>
            ⌖ {location} {age && `· ${age} años`}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--accent-copper)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>
            {role}
          </p>
        </div>
      </div>

      {/* Cita de introducción */}
      {quote && (
        <blockquote style={{
          borderLeft: '2px solid var(--accent-copper)',
          paddingLeft: '0.75rem',
          fontFamily: 'var(--font-lore)',
          fontStyle: 'italic',
          color: 'var(--text-paper-dim)',
          fontSize: '0.9rem'
        }}>
          "{quote}"
        </blockquote>
      )}

      {/* Enlaces al GitHub y Portfolio */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent-copper-bright)',
              textDecoration: 'none',
              padding: '0.3rem 0.6rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border-copper)',
              borderRadius: '4px'
            }}
          >
            GitHub ↗
          </a>
        )}
        {portfolioUrl && (
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-paper)',
              textDecoration: 'none',
              padding: '0.3rem 0.6rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px'
            }}
          >
            Portfolio ↗
          </a>
        )}
      </div>

      {/* Pestañas para conmutar Habilidades, Películas y Música */}
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '0.75rem' }}>
          <button
            onClick={() => setActiveTab('skills')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'skills' ? 'var(--accent-copper-bright)' : 'var(--text-muted)',
              borderBottom: activeTab === 'skills' ? '2px solid var(--accent-copper-bright)' : 'none',
              padding: '0.2rem 0.4rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)'
            }}
          >
            01 / Habilidades
          </button>
          <button
            onClick={() => setActiveTab('movies')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'movies' ? 'var(--accent-copper-bright)' : 'var(--text-muted)',
              borderBottom: activeTab === 'movies' ? '2px solid var(--accent-copper-bright)' : 'none',
              padding: '0.2rem 0.4rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)'
            }}
          >
            02 / Cine
          </button>
          <button
            onClick={() => setActiveTab('music')}
            style={{
              background: 'transparent',
              border: 'none',
              color: activeTab === 'music' ? 'var(--accent-copper-bright)' : 'var(--text-muted)',
              borderBottom: activeTab === 'music' ? '2px solid var(--accent-copper-bright)' : 'none',
              padding: '0.2rem 0.4rem',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)'
            }}
          >
            03 / Música
          </button>
        </div>

        {/* Contenido según pestaña */}
        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
            {skills.map((skill, i) => (
              <div key={i} style={{ background: 'var(--bg-ink)', padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--accent-copper)', marginRight: '0.3rem' }}>◈</span>
                {skill}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'movies' && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-paper-dim)' }}>
            {movies.map((m, i) => (
              <li key={i}>🎬 <strong style={{ color: 'var(--text-paper)' }}>{m}</strong></li>
            ))}
          </ul>
        )}

        {activeTab === 'music' && (
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-paper-dim)' }}>
            {music.map((m, i) => (
              <li key={i}>🎵 <strong style={{ color: 'var(--text-paper)' }}>{m}</strong></li>
            ))}
          </ul>
        )}
      </div>

      {/* Módulo interactivo del TP1 */}
      <div style={{
        marginTop: 'auto',
        background: 'var(--bg-ink)',
        border: '1px solid var(--border-copper)',
        borderRadius: '6px',
        padding: '0.85rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent-copper-bright)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {interactionTitle}
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Señal {index + 1}/{interactionNotes.length}
          </span>
        </div>
        <p style={{ minHeight: '44px', fontSize: '0.8rem', color: 'var(--text-paper)', fontStyle: 'italic', margin: '0.4rem 0' }}>
          "{activeMessage}"
        </p>
        <button
          type="button"
          onClick={handleNextSignal}
          style={{
            width: '100%',
            padding: '0.45rem',
            background: 'var(--accent-copper)',
            color: '#101512',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            fontFamily: 'var(--font-display)'
          }}
        >
          {interactionDescription || 'Consultar el archivo ↗'}
        </button>
      </div>
    </article>
  );
}