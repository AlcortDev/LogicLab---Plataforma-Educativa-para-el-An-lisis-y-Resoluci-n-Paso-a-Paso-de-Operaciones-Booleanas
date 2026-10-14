const features = [
  {
    number: "01",
    title: "Simplifica paso a paso",
    description: "Sigue cada transformación y entiende por qué se aplica.",
    symbol: "→",
  },
  {
    number: "02",
    title: "Explora tablas de verdad",
    description: "Observa el resultado de cada combinación de entradas.",
    symbol: "⊞",
  },
  {
    number: "03",
    title: "Reconoce las compuertas",
    description: "Relaciona la expresión con su circuito lógico.",
    symbol: "⌁",
  },
];

function LogicMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 40 40" fill="none">
      <rect x="1" y="1" width="38" height="38" rx="12" stroke="currentColor" />
      <path d="M12 12v16h7M20 20h8M25 16l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="28" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="LogicLab, inicio">
          <LogicMark />
          <span>logic<span className="brand-accent">lab</span></span>
        </a>
        <span className="topbar-note"><span className="status-dot" /> Laboratorio de lógica digital</span>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> APRENDE HACIENDO</p>
          <h1 id="hero-title">La lógica se entiende <span>paso a paso.</span></h1>
          <p className="hero-description">
            Explora las operaciones booleanas, descubre cómo se simplifican y
            comprende qué sucede en cada etapa.
          </p>
          <a className="primary-button" href="#herramientas">
            Explorar LogicLab <span aria-hidden="true">↗</span>
          </a>
          <p className="hero-footnote"><span aria-hidden="true">✳</span> Hecho para aprender, no solo para obtener respuestas.</p>
        </div>

        <div className="logic-card" aria-label="Ejemplo de expresión booleana: A Y B negada, o C">
          <div className="card-topline">
            <span><span className="live-dot" /> EJEMPLO EN PIZARRA</span>
            <span className="card-index">LL—001</span>
          </div>
          <div className="expression-label">Expresión booleana</div>
          <div className="expression" aria-hidden="true">(A <i>·</i> B̅) <b>+</b> C</div>
          <div className="card-divider" />
          <div className="steps-label">UNA IDEA, EN TRES MOVIMIENTOS</div>
          <div className="mini-step"><span className="step-number">1</span><span>Identifica las operaciones</span><span className="step-symbol">∧ ∨ ¬</span></div>
          <div className="mini-step"><span className="step-number">2</span><span>Aplica las leyes booleanas</span><span className="step-symbol">↗</span></div>
          <div className="mini-step"><span className="step-number">3</span><span>Comprueba el resultado</span><span className="step-symbol">✓</span></div>
          <div className="card-footer"><span>ENTENDER TAMBIÉN ES PARTE DEL RESULTADO</span><span>01 / 03</span></div>
        </div>
      </section>

      <section className="features" id="herramientas" aria-labelledby="features-title">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" /> TU MESA DE TRABAJO</p><h2 id="features-title">Todo conecta.</h2></div>
          <p>De la expresión al circuito, con claridad en cada paso.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top"><span>{feature.number} / 03</span><span className="feature-symbol" aria-hidden="true">{feature.symbol}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer"><span>LOGICLAB <span className="footer-separator">/</span> APRENDE A PENSAR EN LÓGICA</span><span>Construido para aprender.</span></footer>
    </main>
  );
}
