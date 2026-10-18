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
  avatarUrl,
  skills = [],
  movies = [],
  music = [],
  interactionTitle,
  interactionDescription,
  interactionNotes = []
}) {
  const [index, setIndex] = useState(0);
  const [activeMessage, setActiveMessage] = useState(interactionNotes[0] || 'En espera de señal.');
  const [activeTab, setActiveTab] = useState('skills');

  const handleNextSignal = () => {
    const nextIdx = (index + 1) % interactionNotes.length;
    setIndex(nextIdx);
    setActiveMessage(interactionNotes[nextIdx]);
  };

  return (
    <article className="archive-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Cabecera con Avatar real */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <img
          src={avatarUrl}
          alt={name}
          style={{
            width: '80px',
            height: '80px',
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
          <h3 style={{ fontSize: '1.35rem', margin: '0.2rem 0', color: 'var(--text-paper)' }}>
            {name} <em style={{ color: 'var(--accent-copper)', fontStyle: 'italic' }}>{surname}</em>
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-paper-dim)' }}>
            ⌖ {location} {age && `· ${age} años`}
          </p>
          <p style={{ fontSize: '0.72rem', color: 'var(--accent-copper)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' }}>
            {role}
          </p>
        </div>
      </div>

      {/* Cita de campo */}
      {quote && (
        <blockquote style={{
          borderLeft: '2px solid var(--accent-copper)',
          paddingLeft: '0.8rem',
          fontFamily: 'var(--font-lore)',
          fontStyle: 'italic',
          color: 'var(--text-paper-dim)',
          fontSize: '0.92rem'
        }}>
          "{quote}"
        </blockquote>
      )}

      {/* Enlaces de Autor */}
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
              padding: '0.35rem 0.75rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border-copper)',
              borderRadius: '4px',
              fontWeight: '500'
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
              padding: '0.35rem 0.75rem',
              background: 'var(--bg-soft)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px'
            }}
          >
            Portfolio ↗
          </a>
        )}
      </div>

      {/* Pestañas de contenido */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem' }}>
          {['skills', 'movies', 'music'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeTab === tab ? 'var(--accent-copper-bright)' : 'var(--text-muted)',
                borderBottom: activeTab === tab ? '2px solid var(--accent-copper-bright)' : 'none',
                paddingBottom: '0.3rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.5px'
              }}
            >
              {tab === 'skills' ? '01 / Habilidades' : tab === 'movies' ? '02 / Cine' : '03 / Música'}
            </button>
          ))}
        </div>

        {/* Tab 1: Habilidades */}
        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {skills.map((skill, i) => (
              <div key={i} style={{ background: 'var(--bg-ink)', padding: '0.5rem 0.7rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--accent-copper)', marginRight: '0.4rem' }}>◈</span>
                {skill}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Películas con imagen */}
        {activeTab === 'movies' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {movies.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', background: 'var(--bg-ink)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                <img src={m.img} alt={m.title} style={{ width: '45px', height: '55px', objectFit: 'cover', borderRadius: '3px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-paper)' }}>{m.title} <span style={{ color: 'var(--accent-copper)', fontSize: '0.75rem' }}>({m.year})</span></h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-paper-dim)', marginTop: '0.15rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Música con imagen */}
        {activeTab === 'music' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {music.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', background: 'var(--bg-ink)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                <img src={m.img} alt={m.title} style={{ width: '45px', height: '55px', objectFit: 'cover', borderRadius: '3px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-paper)' }}>{m.title} <span style={{ color: 'var(--accent-copper)', fontSize: '0.75rem' }}>— {m.album}</span></h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-paper-dim)', marginTop: '0.15rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Consola de señales interactiva */}
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
            padding: '0.5rem',
            background: 'var(--accent-copper)',
            color: '#101512',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.78rem',
            fontWeight: 'bold',
            fontFamily: 'var(--font-display)'
          }}
        >
          {interactionDescription}
        </button>
      </div>
    </article>
  );
}