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
      avatarUrl: "/img/avatares/avatar01.jpg",
      skills: ["Batería / Drummer", "Creatividad", "Investigación", "Trabajo en equipo"],
      movies: [
        { title: "El club de la pelea", year: "1999", img: "/img/cine/ruben-club-pelea.jpg", desc: "Identidad, violencia y deconstrucción del individuo." },
        { title: "Matrix", year: "1999", img: "/img/cine/ruben-matrix.jpg", desc: "Realidad, percepción y la sospecha ontológica." },
        { title: "El señor de los anillos", year: "2001", img: "/img/cine/ruben-senor-anillos.jpg", desc: "Viaje, poder y resistencia ante la sombra." }
      ],
      music: [
        { title: "Tool", album: "Lateralus", img: "/img/musica/tool.jpg", desc: "Metal progresivo, compases complejos y exploración." },
        { title: "Primus", album: "Frizzle Fry", img: "/img/musica/primus.jpg", desc: "Bajo percusivo, virtuosismo y sátira." },
        { title: "Nine Inch Nails", album: "The Fragile", img: "/img/musica/nine-inch-nails.jpg", desc: "Electrónica industrial y atmósferas oscuras." }
      ],
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
      ]
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
      avatarUrl: "/img/avatares/avatar02.jpg",
      skills: ["Análisis y resolución", "Datos y pensamiento analítico", "Metodología científica", "Química computacional / IA"],
      movies: [
        { title: "Mulholland Drive", year: "2001", img: "/img/cine/sergio-mulholland-drive.jpg", desc: "Misterio, identidades duplicadas y laberintos oníricos." },
        { title: "El señor de los anillos", year: "2001", img: "/img/cine/sergio-senor-anillos.jpg", desc: "Sacrificio, camaradería y resistencia al abismo." },
        { title: "Inception", year: "2010", img: "/img/cine/sergio-inception.jpg", desc: "Arquitectura mental y capas de realidad superpuestas." }
      ],
      music: [
        { title: "Soda Stereo", album: "Canción Animal", img: "/img/musica/soda-stereo.jpg", desc: "Referencia sonora esencial del rock argentino." },
        { title: "Peligrosos Gorriones", album: "Peligrosos Gorriones", img: "/img/musica/peligrosos-gorriones.jpg", desc: "Fuerza alternativa de los 90 y lírica filosa." },
        { title: "Babasónicos", album: "Jessico", img: "/img/musica/babasonicos.jpg", desc: "Provocación estética y reinvención constante." }
      ],
      interactionTitle: "04 / El observatorio II",
      interactionDescription: "Analizar mapa estelar ↗",
      interactionNotes: [
        "La primera nota del archivo habla de paciencia y método.",
        "Los datos forman un patrón cuando se los observa con atención.",
        "El mapa no predice el futuro: ayuda a formular mejores preguntas.",
        "La señal cambia, pero el trabajo en equipo mantiene el rumbo.",
        "El patrón se vuelve más claro. La observación genera nuevas preguntas.",
        "Registro final: los datos entregan mejores formas de buscar."
      ]
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
      avatarUrl: "/img/avatares/avatar03.png",
      skills: ["Pensamiento Divergente", "Rehabilitación Física", "Aprendizaje Metódico", "Creatividad Informática"],
      movies: [
        { title: "El Día de la Bestia", year: "1995", img: "/img/cine/juanse-bestia.png", desc: "Símbolos oscuros y comedia negra apocalíptica." },
        { title: "Matrix", year: "1999", img: "/img/cine/juanse-matrix.png", desc: "El velo de simulación tecnológica y libertad." },
        { title: "Volver al Futuro II", year: "1989", img: "/img/cine/juanse-bttf2.png", desc: "Líneas temporales alternas y fascinación técnica." }
      ],
      music: [
        { title: "Fear Factory", album: "Demanufacture", img: "/img/musica/fear.png", desc: "Conflicto biomecánico entre el hombre y el algoritmo." },
        { title: "Running Wild", album: "Death or Glory", img: "/img/musica/rwild.png", desc: "Exploración náutica y mitos sin fronteras." },
        { title: "Type 0 Negative", album: "October Rust", img: "/img/musica/type0.png", desc: "Gótico otoñal, melancolía pesada e ironía oscura." }
      ],
      interactionTitle: "04 / Buceo en el Vacío",
      interactionDescription: "Explorar el vacío ↗",
      interactionNotes: [
        "El vacío permanece inmóvil.",
        "Mira con atención a la nada misma.",
        "Los límites entre pensamiento y espacio comienzan a desdibujarse.",
        "Empápate en los efluvios de tu mente sin puntos de agarre.",
        "Déjate llevar por la oscuridad completa e indivisible.",
        "El vacío mismo te devuelve la mirada de forma penetrante.",
        "Habitante de un territorio abstracto e indescriptible.",
        "La inmensidad vuelve a quedar en silencio."
      ]
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
      avatarUrl: "/img/avatares/avatar04.jpeg",
      skills: ["Adaptabilidad", "Gestión de tiempo", "Creatividad aplicada", "Empatía profesional"],
      movies: [
        { title: "War Horse", year: "2011", img: "/img/cine/alvaro-war-horse.jpg", desc: "Resistencia y humanidad en medio del conflicto bélico." },
        { title: "Men of Honor", year: "2000", img: "/img/cine/alvaro-hombres_de_honor.jpg", desc: "Perseverancia absoluta y superación de barreras." },
        { title: "Pearl Harbor", year: "2001", img: "/img/cine/alvaro-pearl-harbor.jpeg", desc: "Camaradería, conflicto aéreo y lealtad histórica." }
      ],
      music: [
        { title: "Ultimo", album: "Live Stadi 2024", img: "/img/musica/ultimo-iive.jpg", desc: "Cantautor italiano contemporáneo y fuerza de estadio." },
        { title: "Guitarricadelafuente", album: "Spanish Leather", img: "/img/musica/guitarricadelafuente.jpg", desc: "Folclore mediterráneo cruzado con electrónica tenue." },
        { title: "Andrés Calamaro", album: "Alta Suciedad", img: "/img/musica/alta-suciedad.jpg", desc: "Hito del cancionero en español y lírica punzante." }
      ],
      interactionTitle: "04 / Susurros del Vacío Cósmico",
      interactionDescription: "Invocar el portal ↗",
      interactionNotes: [
        "El vacío responde... un murmullo ancestral.",
        "Las estrellas tiemblan, el ritual avanza.",
        "Un eco interdimensional se abre paso.",
        "El abismo observa y sonríe en silencio."
      ]
    }
  ];

  return (
    <section>
      <header style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Expedientes de Campo · Criterio 08
        </span>
        <h2 style={{ fontSize: '2.2rem', margin: '0.5rem 0' }}>Investigadores del Umbral 5B</h2>
        <p style={{ color: 'var(--text-paper-dim)', maxWidth: '750px', lineHeight: '1.6' }}>
          Fichas clasificadas de los 4 integrantes. Podés alternar entre herramientas de investigación, referencias cinematográficas y frecuencias sonoras con carátulas, además de operar la consola narrativa interactiva.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {teamMembers.map((member) => (
          <ProfileCard key={member.idNumber} {...member} />
        ))}
      </div>
    </section>
  );
}