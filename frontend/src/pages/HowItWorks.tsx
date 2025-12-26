import { CheckCircle2, QrCode, Share2, Volume2 } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import InfoCard from '../components/ui/InfoCard';

const HowItWorks = () => (
  <div className="mx-auto flex max-w-5xl flex-col gap-8">
    <div className="space-y-3">
      <Badge tone="mint">Cómo funciona</Badge>
      <h1 className="text-3xl font-bold text-ink">El bingo de toda la vida, sin papeles ni complicaciones.</h1>
      <p className="text-lg text-ink/75">
        Tres pasos: creas la partida, compartes los QR y cantas números. Todo pasa en persona; el móvil solo ayuda
        a organizar.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {[
        { title: '1. Crea', desc: 'Ponle nombre, modo y cuántos cartones necesitas.', icon: <CheckCircle2 /> },
        { title: '2. Comparte', desc: 'Cada QR abre un cartón. Sin descargas, sin registros.', icon: <QrCode /> },
        {
          title: '3. Juega juntos',
          desc: 'Pulsa para sacar números y cántalos. Validación y premios en la mesa.',
          icon: <Volume2 />
        }
      ].map((item) => (
        <div key={item.title} className="card-surface rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/60 text-lg text-ink">
              {item.icon}
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">{item.title}</p>
          </div>
          <p className="mt-2 text-ink/80">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Panel de control</p>
            <p className="text-lg font-bold text-ink">Ejemplo de partida</p>
          </div>
          <Badge tone="yellow">Modo familiar</Badge>
        </div>
        <div className="mt-4 grid gap-4">
          <InfoCard
            title="Bombo silencioso"
            description="Extrae números con un toque. El sonido lo pone tu voz."
            icon="🔔"
            tone="ink"
          />
          <InfoCard
            title="Cartones digitales"
            description="Pásalos por QR o compártelos en el salón. Cada quien usa su móvil como cartón."
            icon="📱"
            tone="coral"
          />
          <InfoCard
            title="Valida en persona"
            description="La línea o el bingo se confirman a viva voz. Mantén la tradición."
            icon="🙌"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Compartir</p>
            <p className="text-lg font-bold text-ink">QR listos para repartir</p>
          </div>
          <Badge tone="coral">Sin apps</Badge>
        </div>
        <div className="mt-5 space-y-3">
          {['Familia', 'Peques', 'Abuelos', 'Amigos', 'Barbacoa'].map((label) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl border border-ink/10 bg-cream px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-inner">
                  <Share2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="text-xs text-ink/70">Escanea y juega</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                Mostrar QR
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-ink text-cream p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Nota</p>
          <p className="mt-1 text-sm">
            Funciona en cualquier móvil con cámara. Incluso en tablets antiguas. Cero instalaciones.
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-ink/5 bg-ink px-6 py-8 text-cream shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint">¿Listo para la próxima partida?</p>
          <h3 className="text-2xl font-bold">
            Crea el juego, reparte los QR y vuelve al bingo de siempre, sin papeles ni complicaciones.
          </h3>
        </div>
        <div className="flex gap-3">
          <Button to="/crear" variant="soft" size="lg" className="bg-cream text-ink hover:bg-mint/70">
            Crear partida
          </Button>
          <Button to="/" variant="ghost" size="lg">
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
