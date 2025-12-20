import React, { useEffect, useMemo, useState } from 'react';

const STORAGE_KEYS = {
  text: 'characterscounter:text',
  dark: 'characterscounter:dark',
  goal: 'characterscounter:goal',
};

const WORDS_PER_MINUTE = 200;

const formatReadingTime = (words) => {
  if (words === 0) return '~0 s';
  const totalSeconds = Math.ceil((words / WORDS_PER_MINUTE) * 60);
  if (totalSeconds < 60) return `~${totalSeconds} s`;
  const minutes = Math.ceil(totalSeconds / 60);
  return `~${minutes} min`;
};

const computeMetrics = (text) => {
  const charactersWithSpaces = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, '').length;
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const lines = text === '' ? 0 : text.split(/\r?\n/).length;
  const paragraphs = trimmed ? trimmed.split(/\n\s*\n+/).filter(Boolean).length : 0;

  return {
    words,
    charactersWithSpaces,
    charactersWithoutSpaces,
    lines,
    paragraphs,
    readingTime: formatReadingTime(words),
  };
};

const StatCard = ({ label, value, hint }) => (
  <div className="dark-card rounded-2xl p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
    <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
    <div className="mt-1 text-3xl font-semibold text-slate-900 dark:text-softAlt">{value}</div>
    {hint ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">{hint}</p> : null}
  </div>
);

const Button = ({ children, variant = 'primary', onClick, title }) => {
  const base =
    'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const variants = {
    primary:
      'bg-primary/90 text-slate-900 hover:bg-primary shadow-soft focus-visible:outline-primary',
    secondary:
      'bg-white/40 text-slate-900 hover:bg-white/60 border border-slate-200 focus-visible:outline-primary dark:bg-white/10 dark:text-soft dark:hover:bg-white/20 dark:border-white/10',
    ghost:
      'bg-transparent text-slate-800 hover:bg-slate-200/60 border border-slate-200 focus-visible:outline-primary dark:text-slate-200 dark:hover:bg-white/10 dark:border-white/10',
    danger:
      'bg-accent text-slate-900 hover:bg-accent/90 focus-visible:outline-accent shadow-soft dark:text-slate-900',
  };

  return (
    <button type="button" className={`${base} ${variants[variant]}`} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

const HowWeCount = () => (
  <div className="glass rounded-3xl p-5">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-softAlt">Cómo contamos</h3>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
        Reglas claras
      </span>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-slate-300">
      <li>
        <strong>Caracteres (con espacios):</strong> cuenta todos los caracteres tal cual se
        escriben, incluidos espacios y saltos de línea.
      </li>
      <li>
        <strong>Caracteres (sin espacios):</strong> excluye cualquier whitespace (espacios,
        tabulaciones y saltos de línea).
      </li>
      <li>
        <strong>Palabras:</strong> si el texto recortado está vacío son 0; de lo contrario se divide
        por uno o más espacios en blanco y se cuentan los bloques no vacíos.
      </li>
      <li>
        <strong>Líneas:</strong> si el texto está vacío son 0; si no, cuenta los segmentos al dividir
        por saltos de línea.
      </li>
      <li>
        <strong>Párrafos:</strong> si el texto recortado está vacío son 0; de lo contrario se divide
        por una o más líneas en blanco y se cuentan los bloques.
      </li>
      <li>
        <strong>Tiempo de lectura:</strong> estimación a {WORDS_PER_MINUTE} palabras por minuto.
      </li>
    </ul>
  </div>
);

function App() {
  const [text, setText] = useState(() => localStorage.getItem(STORAGE_KEYS.text) || '');
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem(STORAGE_KEYS.dark) === 'true',
  );
  const [wordGoal, setWordGoal] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.goal);
    return stored ? Number(stored) : 500;
  });
  const [feedback, setFeedback] = useState('');

  const metrics = useMemo(() => computeMetrics(text), [text]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.text, text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.goal, String(wordGoal || 0));
  }, [wordGoal]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEYS.dark, darkMode ? 'true' : 'false');
  }, [darkMode]);

  useEffect(() => {
    if (!feedback) return undefined;
    const id = setTimeout(() => setFeedback(''), 2200);
    return () => clearTimeout(id);
  }, [feedback]);

  const setAndNotify = (message) => {
    setFeedback(message);
  };

  const handleClear = () => {
    setText('');
    setFeedback('Texto limpiado');
  };

  const handleCopyText = async () => {
    if (!navigator?.clipboard) {
      setAndNotify('El portapapeles no está disponible en este navegador.');
      return;
    }
    await navigator.clipboard.writeText(text);
    setAndNotify('Texto copiado');
  };

  const handleCopyMetrics = async () => {
    if (!navigator?.clipboard) {
      setAndNotify('El portapapeles no está disponible en este navegador.');
      return;
    }
    const summary = `Palabras: ${metrics.words}
Caracteres (con espacios): ${metrics.charactersWithSpaces}
Caracteres (sin espacios): ${metrics.charactersWithoutSpaces}
Líneas: ${metrics.lines}
Párrafos: ${metrics.paragraphs}
Tiempo de lectura: ${metrics.readingTime}`;
    await navigator.clipboard.writeText(summary);
    setAndNotify('Métricas copiadas');
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const goalProgress =
    wordGoal && wordGoal > 0 ? Math.min(metrics.words / wordGoal, 1) : metrics.words > 0 ? 1 : 0;

  return (
    <div className="min-h-screen bg-softAlt text-slate-900 transition-colors duration-300 dark:bg-background dark:text-soft">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-lg font-bold text-primary ring-1 ring-primary/30">
              cc
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-900 dark:text-softAlt">characterscounter</p>
              <p className="text-sm text-slate-400">Cuenta, limpia y entiende tu texto al instante</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={handleCopyText} title="Copiar el texto completo">
              Copiar texto
            </Button>
            <Button variant="secondary" onClick={handleCopyMetrics} title="Copiar el resumen de métricas">
              Copiar métricas
            </Button>
            <Button variant="ghost" onClick={toggleTheme} title="Cambiar modo">
              {darkMode ? 'Modo claro' : 'Modo oscuro'}
            </Button>
            <Button variant="danger" onClick={handleClear} title="Vaciar todo el texto">
              Limpiar
            </Button>
          </div>
        </header>

        {feedback ? (
          <div className="mt-3 rounded-xl bg-white/80 px-4 py-2 text-sm text-slate-900 shadow-soft dark:bg-white/10 dark:text-softAlt">
            {feedback}
          </div>
        ) : null}

        <main className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="glass rounded-3xl p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-400">Entrada</div>
              <div className="text-xs text-slate-500">Guardado automáticamente en tu navegador</div>
            </div>
            <textarea
              className="mt-3 min-h-[260px] w-full resize-vertical rounded-2xl border border-slate-200 bg-white p-4 text-base text-slate-900 outline-none ring-2 ring-transparent transition focus:border-primary/60 focus:ring-primary/40 dark:border-white/10 dark:bg-white/5 dark:text-softAlt"
              placeholder="Pega o escribe tu texto aquí…"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-3 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
              <p>
                {metrics.words} palabras · {metrics.charactersWithSpaces} caracteres
              </p>
              <p className="text-xs text-slate-400">
                Tu texto se analiza localmente. No se envía a ningún servidor.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-softAlt">
                    Meta de palabras
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Define un objetivo y mira el progreso en vivo.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    className="w-28 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-2 ring-transparent transition focus:border-primary/60 focus:ring-primary/40 dark:border-white/10 dark:bg-slate-900/60 dark:text-softAlt"
                    value={wordGoal}
                    onChange={(e) => setWordGoal(Math.max(Number(e.target.value) || 0, 0))}
                  />
                  <span className="text-xs text-slate-400">palabras</span>
                </div>
              </div>
              <div className="mt-3 h-3 rounded-full bg-slate-800/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                  style={{ width: `${Math.min(goalProgress * 100, 100)}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>
                  {metrics.words}/{wordGoal || '—'} palabras
                </span>
                <span>
                  {goalProgress >= 1 && wordGoal ? 'Meta alcanzada' : 'Progreso en tiempo real'}
                </span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-softAlt">
                  Resultados en vivo
                </h2>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Actualizado al escribir
                </span>
              </div>
              <div className="metric-grid mt-4">
                <StatCard label="Palabras" value={metrics.words} />
                <StatCard
                  label="Caracteres (con espacios)"
                  value={metrics.charactersWithSpaces}
                  hint="Cuenta todos los caracteres tal cual."
                />
                <StatCard
                  label="Caracteres (sin espacios)"
                  value={metrics.charactersWithoutSpaces}
                  hint="Excluye espacios, tabs y saltos de línea."
                />
                <StatCard label="Líneas" value={metrics.lines} />
                <StatCard
                  label="Párrafos"
                  value={metrics.paragraphs}
                  hint="Separados por una o más líneas en blanco."
                />
                <StatCard label="Tiempo de lectura" value={metrics.readingTime} hint="Estimado" />
              </div>
            </div>
            <HowWeCount />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
