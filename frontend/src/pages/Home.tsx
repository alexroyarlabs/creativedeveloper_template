import { ArrowRight, QrCode, Sparkles, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import InfoCard from '../components/ui/InfoCard';
import StatCard from '../components/ui/StatCard';

const drawnNumbers = [4, 12, 19, 24, 32, 43, 54, 67, 71, 83];
const playerCard = [
  [5, 13, 24, 36, 41],
  [9, 19, 22, 47, 59],
  [1, 16, 31, 53, 63],
  [7, 18, 29, 44, 70],
  [3, 12, 27, 58, 75]
];

const steps = [
  { title: 'Crea tu partida', desc: 'Ponle nombre y elige bingo clásico o personalizado.' },
  { title: 'Comparte los QR', desc: 'Genera los cartones y pásalos con un escaneo.' },
  { title: 'Canta los números', desc: 'Usa el bombo digital y vive el juego en la mesa.' }
];

const Home = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-14">
      <section className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-ink/5 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <Badge tone="yellow">El bingo de siempre, más fácil que nunca</Badge>
            <h1 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Tu bingo familiar, en versión digital (pero con el mismo espíritu de siempre).
            </h1>
            <p className="max-w-2xl text-lg text-ink/80">
              Organiza una partida en segundos, reparte cartones con QR y deja que la diversión suceda en la
              mesa. Sin apps, sin registros, sin ruido.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/crear" size="lg">
                Crear partida
              </Button>
              <Button to="/carton" variant="ghost" size="lg">
                Ver cartón demo
              </Button>
              <Button to="/como-funciona" variant="soft" size="lg">
                Cómo funciona
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-ink/70">
              <span className="flex items-center gap-2 rounded-full bg-mint/60 px-3 py-1">
                <Sparkles size={16} /> Sin instalación
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-ink/5">
                <QrCode size={16} /> QR listos al instante
              </span>
              <span className="flex items-center gap-2 rounded-full bg-coral/15 px-3 py-1 text-coral ring-1 ring-coral/30">
                <Volume2 size={16} /> Las voces llevan el ritmo
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-16 w-16 rounded-2xl bg-mint/60 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft">
              <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Panel</p>
                  <p className="text-lg font-bold text-ink">Noche de bingo</p>
                </div>
                <Badge tone="mint">Bombo activo</Badge>
              </div>
              <div className="grid gap-6 p-5">
                <div>
                  <p className="text-sm font-semibold text-ink/60">Números cantados</p>
                  <div className="mt-3 grid grid-cols-5 gap-2 text-center">
                    {drawnNumbers.map((num) => (
                      <span
                        key={num}
                        className="rounded-lg bg-ink text-sm font-bold text-cream shadow-sm ring-1 ring-ink/10"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-mint/40 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-ink/80">
                    <span>Siguiente extracción</span>
                    <span className="rounded-full bg-white px-3 py-1 text-ink">72 bolas restantes</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-ink/70">Comparte los QR y lista la mesa.</p>
                    <Button size="sm" variant="primary">
                      Sacar número
                    </Button>
                  </div>
                </div>
                <div className="grid gap-3 rounded-2xl border border-ink/5 bg-white p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
                    <span>Cartones listos</span>
                    <span className="rounded-full bg-coral/15 px-3 py-1 text-coral">6 jugadores</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-ink/80">
                    {['Abuela', 'Peques', 'Tíos', 'Papá', 'Mamá', 'Vecinos'].map((name) => (
                      <span className="rounded-lg bg-mint/50 px-2 py-2 text-center" key={name}>
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <InfoCard
          title="Organiza sin papeles"
          description="Genera la partida y los cartones digitales en segundos. Tu móvil es el bombo, no la protagonista."
          icon="📋"
        />
        <InfoCard
          title="Cartones con QR"
          description="Cada jugador escanea su código. Nada de apps, contraseñas ni correos."
          icon="📲"
          tone="ink"
        />
        <InfoCard
          title="Fácil para todos"
          description="Números grandes, interfaz clara y sin efectos. Los mayores también se sienten cómodos."
          icon="🤝"
          tone="coral"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <Badge>Panel del organizador</Badge>
          <h2 className="text-3xl font-bold text-ink">Un bombo silencioso, pensado para la mesa.</h2>
          <p className="text-lg text-ink/80">
            Saca números con un toque, marca el ritmo con tu voz y lleva el control visualmente. El móvil ayuda,
            pero el juego pasa entre las personas.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <StatCard label="Partidas creadas" value="12,4K" helper="Familias y peñas pequeñas" />
            <StatCard label="Cartones listos" value="58K" helper="Compartidos con códigos QR" />
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-ink/70">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-ink/5">Sin cuenta</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-ink/5">Offline first</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-ink/5">Modo silencio</span>
          </div>
        </div>

        <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
          <div className="floating-grid rounded-2xl bg-cream p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Bombo</p>
                <p className="text-lg font-bold text-ink">Turno actual</p>
              </div>
              <Button size="sm" variant="soft">
                Generar QR
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-10 gap-2 text-center text-sm font-semibold text-ink/80">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                <span
                  key={num}
                  className={
                    drawnNumbers.includes(num)
                      ? 'rounded-lg bg-ink text-cream shadow-sm'
                      : 'rounded-lg bg-white/80'
                  }
                >
                  {num}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-ink/5 bg-white p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
                <span>Último número</span>
                <Badge tone="yellow">24</Badge>
              </div>
              <p className="mt-3 text-ink/70">
                Cántalo en voz alta, celebra la línea o el bingo como siempre. La tecnología queda al margen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Cartón</p>
              <p className="text-lg font-bold text-ink">Vista del jugador</p>
            </div>
            <Badge tone="coral">Modo silencio</Badge>
          </div>
          <div className="mt-6 grid grid-cols-5 gap-2">
            {playerCard.flat().map((num, idx) => {
              const checked = idx % 4 === 0;
              return (
                <button
                  key={num}
                  className={`flex h-14 items-center justify-center rounded-xl border text-lg font-bold transition ${
                    checked
                      ? 'border-ink bg-ink text-cream shadow-soft'
                      : 'border-ink/10 bg-cream hover:-translate-y-0.5'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm font-semibold text-ink/70">
            Un toque para tachar, nada más. La validación sigue siendo entre las personas.
          </p>
        </div>
        <div className="space-y-4">
          <Badge tone="ink">Cartón del jugador</Badge>
          <h2 className="text-3xl font-bold text-ink">El móvil es solo el cartón, no la estrella.</h2>
          <p className="text-lg text-ink/80">
            Interfaz grande y silenciosa. Cada quien ve sus números y canta cuando hace línea o bingo. El resto
            es charla, risas y miradas.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard
              title="Legible para todos"
              description="Tipografía redondeada, contrastes suaves y botones grandes."
              icon="🧡"
              tone="ink"
            />
            <InfoCard
              title="Sin distracciones"
              description="Sin animaciones exageradas ni sonidos. La acción pasa en la mesa."
              icon="🔇"
              tone="coral"
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge tone="mint">Guía rápida</Badge>
            <h2 className="mt-2 text-3xl font-bold text-ink">Así de simple: 1, 2, 3.</h2>
            <p className="text-lg text-ink/80">Sin apps, sin registros. Un QR por jugador y a cantar números.</p>
          </div>
          <Button to="/crear" variant="primary" size="md" className="w-full md:w-auto">
            Crear partida ahora
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="card-surface rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/60 text-lg font-bold text-ink">
                  {idx + 1}
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">Paso {idx + 1}</p>
              </div>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-ink/5 bg-ink px-6 py-10 text-cream shadow-soft md:px-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">Diferencial</p>
            <h3 className="text-3xl font-bold">
              Diseño mínimo, humano y offline-first. El móvil es un accesorio, no el centro.
            </h3>
            <p className="text-lg text-cream/80">
              Sin chats ni efectos. Solo una herramienta útil para que el bingo siga sonando en la mesa.
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-ink">
              {['Sin cuentas', 'Compatible con mayores', 'Comparte en persona', 'Listo en segundos'].map(
                (item) => (
                  <span key={item} className="rounded-full bg-cream px-3 py-1 text-ink">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Button to="/crear" variant="soft" size="lg" className="bg-cream text-ink hover:bg-mint/70">
              Empezar partida
            </Button>
            <Link className="text-sm font-semibold text-mint hover:text-cream" to="/como-funciona">
              Ver pasos tranquilos <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
