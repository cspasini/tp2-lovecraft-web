import { useState } from 'react';

export default function ProfileCard({ 
  name, 
  idNumber,
  responsibility, 
  interactionType, 
  interactionData = [], 
  skills = [], 
  avatar 
}) {
  const [index, setIndex] = useState(0);
  const [activeMessage, setActiveMessage] = useState(interactionData[0] || 'Registro inicial en espera.');
  const [isActive, setIsActive] = useState(false);

  // Manejador genérico que respeta la interacción narrativa de cada perfil (Criterio 08)
  const handleInteraction = () => {
    setIsActive(true);
    const nextIndex = (index + 1) % interactionData.length;
    setIndex(nextIndex);
    setActiveMessage(interactionData[nextIndex]);
    
    // Pequeño timeout para reiniciar el efecto visual de pulso
    setTimeout(() => setIsActive(false), 300);
  };

  const handleReset = () => {
    setIndex(0);
    setActiveMessage(interactionData[0]);
  };

  return (
    <article style={{
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '1.25rem',
      transition: 'border-color 0.2s ease'
    }}>
      <div>
        {/* Cabecera del expediente */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <img
            src={avatar}
            alt={name}
            style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              border: '2px solid var(--accent-lovecraft)',
              background: '#101512'
            }}
          />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--accent-lovecraft)', letterSpacing: '1px' }}>
              EXPEDIENTE {idNumber}
            </span>
            <h3 style={{ margin: '0.2rem 0', fontSize: '1.15rem' }}>{name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{responsibility}</p>
          </div>
        </div>

        {/* Competencias / Habilidades */}
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
            Especialidad en el Archivo:
          </strong>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {skills.map((skill, idx) => (
              <span key={idx} style={{ 
                background: '#21262d', 
                color: 'var(--text-main)',
                padding: '0.2rem 0.55rem', 
                borderRadius: '4px', 
                fontSize: '0.75rem' 
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Módulo Interactivo narrativo heredado de TP1 */}
      <div style={{ 
        borderTop: '1px solid var(--border-color)', 
        paddingTop: '1rem',
        background: '#0d1117',
        padding: '0.85rem',
        borderRadius: '6px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-lovecraft)', fontWeight: 'bold' }}>
            {interactionType}
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Paso {index + 1} de {interactionData.length}
          </span>
        </div>

        <p style={{ 
          minHeight: '48px', 
          fontSize: '0.82rem', 
          color: isActive ? 'var(--accent-lovecraft)' : '#c9d1d9',
          fontStyle: 'italic',
          lineHeight: '1.4',
          transition: 'color 0.2s ease'
        }}>
          "{activeMessage}"
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <button
            type="button"
            onClick={handleInteraction}
            style={{
              flex: '1',
              padding: '0.45rem',
              background: '#238636',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: '500'
            }}
          >
            {index === interactionData.length - 1 ? 'Reiniciar ciclo ↻' : 'Consultar señal ↗'}
          </button>
          {index > 0 && (
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: '0.45rem 0.75rem',
                background: '#21262d',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.78rem'
              }}
            >
              Silenciar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}