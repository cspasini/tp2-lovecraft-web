import ProfileCard from '../components/ProfileCard';

export default function Profiles() {
  const teamMembers = [
    {
      idNumber: "01",
      name: "Rubén Darío Basconcelo",
      responsibility: "Organización inicial del proyecto & Lore",
      skills: ["Arquitectura inicial", "Definición conceptual", "Testing", "Bitácora"],
      interactionType: "El Observatorio",
      interactionData: [
        "El observatorio permanece en silencio.",
        "Primer registro: una señal débil aparece entre los datos.",
        "Segundo registro: la señal responde al investigador.",
        "Tercer registro: algo está observando desde el otro lado.",
        "El registro comienza a mostrar datos que no deberían existir.",
        "La señal cambia de frecuencia. El archivo no reconoce el patrón.",
        "La observación ha sido devuelta. Ahora alguien está mirando.",
        "La señal desaparece. El observatorio vuelve al silencio."
      ],
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ruben-basconcelo"
    },
    {
      idNumber: "02",
      name: "Sergio David Pasini Cabello",
      responsibility: "Diseño visual, CSS & Arquitectura Frontend",
      skills: ["Identidad visual", "Paleta Ink/Copper", "Google Fonts", "Responsive"],
      interactionType: "El Observatorio II (Mapa Estelar)",
      interactionData: [
        "La primera nota del archivo habla de paciencia y método.",
        "Los datos forman un patrón cuando se los observa con atención.",
        "El mapa no predice el futuro: ayuda a formular mejores preguntas.",
        "La señal cambia, pero el trabajo en equipo mantiene el rumbo.",
        "El patrón se vuelve más claro. La observación empieza a generar nuevas preguntas.",
        "Registro final: los datos no entregan respuestas. Entregan mejores formas de buscarlas."
      ],
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sergio-pasini"
    },
    {
      idNumber: "03",
      name: "Juan Sebastián Páez Horbath",
      responsibility: "JavaScript, Lógica e Interactividad",
      skills: ["Lógica dinámica", "Manejo de eventos", "Depuración", "Scripts"],
      interactionType: "Buceo en el Vacío",
      interactionData: [
        "El vacío permanece inmóvil.",
        "Mira con atención a la nada misma.",
        "Los límites entre pensamiento y espacio comienzan a desdibujarse.",
        "Empápate en los efluvios de tu mente, mientras tus sentidos no tienen de dónde agarrarse.",
        "Déjate llevar por la oscuridad completa, indivisible e inconceptuable.",
        "El vacío mismo te devuelve la mirada de forma penetrante.",
        "En este momento eres un habitante de un mundo abstracto e indescriptible.",
        "La inmensidad vuelve a quedar en silencio."
      ],
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=juan-paez"
    },
    {
      idNumber: "04",
      name: "Alvaro Gabriel Mamani",
      responsibility: "Documentación, Bitácora e Integración",
      skills: ["Redacción técnica", "Bitácora", "Control de versiones", "Pruebas finales"],
      interactionType: "Susurros del Vacío Cósmico",
      interactionData: [
        "El vacío responde... un murmullo ancestral.",
        "Las estrellas tiemblan, el ritual avanza.",
        "Un eco interdimensional se abre paso.",
        "El abismo observa y sonríe en silencio."
      ],
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=alvaro-mamani"
    }
  ];

  return (
    <section>
      <header style={{ marginBottom: '2rem' }}>
        <h2>Expedientes del Umbral 5B</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Cuatro investigadores vinculando código, diseño y horror cósmico mediante componentes React reutilizables.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {teamMembers.map((member) => (
          <ProfileCard key={member.idNumber} {...member} />
        ))}
      </div>
    </section>
  );
}