import ProfileCard from '../components/ProfileCard';

export default function Profiles() {
  const teamMembers = [
    {
      idNumber: "01",
      name: "Rubén Darío",
      surname: "Basconcelo",
      location: "Argentina",
      age: "",
      role: "INVESTIGACIÓN ／ DESARROLLO",
      quote: "Investigar también es aprender a mirar aquello que otros pasan por alto.",
      githubUrl: "https://github.com/VaskoVegan",
      portfolioUrl: "https://pfo1-frontend-basconcelo.vercel.app/",
      skills: ["Batería / Drummer", "Creatividad", "Investigación", "Trabajo en equipo"],
      movies: ["El club de la pelea", "Matrix", "El señor de los anillos"],
      music: ["Tool", "Primus", "Nine Inch Nails"],
      interactionTitle: "04 / El observatorio",
      interactionDescription: "Consultar el archivo ↗",
      interactionNotes: [
        "El observatorio permanece en silencio.",
        "Primer registro: una señal débil aparece entre los datos.",
        "Segundo registro: la señal responde al investigador.",
        "Tercer registro: algo está observando desde el otro lado.",
        "El registro comienza a mostrar datos que no deberían existir.",
        "La señal cambia de frecuencia. El archivo no reconoce el patrón.",
        "La observación ha sido devuelta. Ahora alguien está mirando.",
        "La señal desaparece. El observatorio vuelve al silencio."
      ],
      avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=vasko-basconcelo"
    },
    {
      idNumber: "02",
      name: "Sergio David",
      surname: "Pasini Cabello",
      location: "Mendoza, Argentina",
      age: "42",
      role: "DISEÑO VISUAL ／ SISTEMA CSS",
      quote: "Observar con método también es una forma de descubrir.",
      githubUrl: "https://github.com/cspasini",
      portfolioUrl: "https://pf1-frontend-pasini-cabello.vercel.app/",
      skills: ["Análisis y resolución", "Datos y pensamiento analítico", "Metodología científica", "Química computacional / IA"],
      movies: ["Mulholland Drive", "El señor de los anillos", "Inception"],
      music: ["Soda Stereo", "Peligrosos Gorriones", "Babasónicos"],
      interactionTitle: "04 / El observatorio II",
      interactionDescription: "Analizar mapa estelar ↗",
      interactionNotes: [
        "La primera nota del archivo habla de paciencia y método.",
        "Los datos forman un patrón cuando se los observa con atención.",
        "El mapa no predice el futuro: ayuda a formular mejores preguntas.",
        "La señal cambia, pero el trabajo en equipo mantiene el rumbo.",
        "El patrón se vuelve más claro. La observación empieza a generar nuevas preguntas.",
        "Registro final: los datos no entregan respuestas. Entregan mejores formas de buscarlas."
      ],
      avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=sergio-pasini"
    },
    {
      idNumber: "03",
      name: "Juan Sebastian",
      surname: "Paez Horvath",
      location: "Argentina",
      age: "",
      role: "DESARROLLO ／ JAVASCRIPT",
      quote: "La ausencia de evidencia no es evidencia de ausencia.",
      githubUrl: "https://github.com/MichiBBQ",
      portfolioUrl: "https://pfo1paezhorvathjuan-sable.vercel.app/",
      skills: ["Pensamiento Divergente", "Rehabilitación Física", "Aprendizaje Metódico", "Creatividad Informática"],
      movies: ["El Día de la Bestia", "Matrix", "Volver al Futuro II"],
      music: ["Fear Factory", "Running Wild", "Type 0 Negative"],
      interactionTitle: "04 / Buceo en el Vacío",
      interactionDescription: "Explorar el vacío ↗",
      interactionNotes: [
        "El vacío permanece inmóvil.",
        "Mira con atención a la nada misma.",
        "Los límites entre pensamiento y espacio comienzan a desdibujarse.",
        "Empápate en los efluvios de tu mente, mientras tus sentidos no tienen de dónde agarrarse.",
        "Déjate llevar por la oscuridad completa, indivisible e inconceptuable.",
        "El vacío mismo te devuelve la mirada de forma penetrante.",
        "En este momento eres un habitante de un mundo abstracto e indescriptible.",
        "La inmensidad vuelve a quedar en silencio."
      ],
      avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=juanse-michi"
    },
    {
      idNumber: "04",
      name: "Alvaro Gabriel",
      surname: "Mamani",
      location: "Tucumán, Argentina",
      age: "37",
      role: "DOCUMENTACIÓN ／ DEPLOYMENT",
      quote: "Mi objetivo es que el conocimiento fluya tan bien como el código.",
      githubUrl: "https://github.com/alvarogmam",
      portfolioUrl: "https://alvaromamani-portfolio.vercel.app",
      skills: ["Adaptabilidad", "Gestión de tiempo", "Creatividad aplicada", "Empatía profesional"],
      movies: ["War Horse", "Men of Honor", "Pearl Harbor"],
      music: ["Ultimo (Live Stadium)", "Guitarricadelafuente (Spanish Leather)", "Andrés Calamaro (Alta Suciedad)"],
      interactionTitle: "04 / Susurros del Vacío Cósmico",
      interactionDescription: "Invocar el portal ↗",
      interactionNotes: [
        "El vacío responde... un murmullo ancestral.",
        "Las estrellas tiemblan, el ritual avanza.",
        "Un eco interdimensional se abre paso.",
        "El abismo observa y sonríe en silencio."
      ],
      avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=alvaro-mamani"
    }
  ];

  return (
    <section>
      <header style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Criterio 08 · Expedientes de Campo
        </span>
        <h2 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>Investigadores del Umbral 5B</h2>
        <p style={{ color: 'var(--text-paper-dim)', maxWidth: '750px', lineHeight: '1.6' }}>
          Registros individuales del equipo de investigación. Cada expediente documenta habilidades, referencias culturales,
          enlaces a repositorios personales y una consola de observación interactiva derivada del TP1.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {teamMembers.map((member) => (
          <ProfileCard key={member.idNumber} {...member} />
        ))}
      </div>
    </section>
  );
}