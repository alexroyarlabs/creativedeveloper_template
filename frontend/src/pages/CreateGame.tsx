import { FormEvent, useMemo, useState } from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

type GameConfig = {
  name: string;
  mode: 'clasico' | 'personalizado';
  cards: number;
};

const defaultConfig: GameConfig = {
  name: 'Bingo del domingo',
  mode: 'clasico',
  cards: 6
};

const CreateGame = () => {
  const [config, setConfig] = useState<GameConfig>(defaultConfig);
  const [saved, setSaved] = useState(false);

  const qrList = useMemo(() => Array.from({ length: config.cards }, (_, i) => `CARTON-${i + 1}`), [config.cards]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Badge tone="mint">Crear partida</Badge>
        <h1 className="text-3xl font-bold text-ink">Genera tu partida y comparte los cartones.</h1>
        <p className="text-lg text-ink/75">
          Elige nombre, modo de juego y cuántos cartones quieres. Al guardar, tendrás un panel con bombo y los QR
          listos para repartir.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft space-y-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Configuración</p>
              <p className="text-lg font-bold text-ink">Personaliza tu partida</p>
            </div>
            {saved && <Badge tone="yellow">Guardado</Badge>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-ink/80" htmlFor="name">
              Nombre de la partida
            </label>
            <input
              id="name"
              type="text"
              value={config.name}
              onChange={(e) => setConfig((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink shadow-inner focus:border-ink/30 focus:outline-none"
              placeholder="Bingo en casa de la abuela"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ink/80">Tipo de bingo</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  id: 'clasico',
                  title: 'Clásico 1-90',
                  desc: 'El de toda la vida, listo para cantar.',
                  accent: 'bg-mint/50'
                },
                {
                  id: 'personalizado',
                  title: 'Personalizado',
                  desc: 'Elige rango de números y tamaño de cartón.',
                  accent: 'bg-coral/15'
                }
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 transition hover:-translate-y-0.5 ${
                    config.mode === option.id
                      ? 'border-ink bg-white shadow-soft'
                      : 'border-ink/10 bg-cream'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${option.accent}`}>
                      {option.id === 'clasico' ? 'Recomendado' : 'Flexible'}
                    </div>
                    <input
                      type="radio"
                      name="mode"
                      value={option.id}
                      checked={config.mode === option.id}
                      onChange={() => setConfig((prev) => ({ ...prev, mode: option.id as GameConfig['mode'] }))}
                      className="h-4 w-4"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-ink">{option.title}</p>
                    <p className="text-sm text-ink/70">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink/80" htmlFor="cards">
                Número de cartones
              </label>
              <input
                id="cards"
                type="range"
                min={2}
                max={12}
                value={config.cards}
                onChange={(e) => setConfig((prev) => ({ ...prev, cards: Number(e.target.value) }))}
                className="w-full accent-ink"
              />
              <p className="text-sm font-semibold text-ink/70">
                {config.cards} cartones listos para compartir
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-ink/80">Velocidad</label>
              <p className="rounded-xl bg-white px-4 py-3 text-sm text-ink/80 shadow-inner">
                Pulsa “Sacar número” a tu ritmo. Puedes pausar entre línea y bingo.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" size="lg">
              Generar partida
            </Button>
            <Button variant="ghost" size="lg" to="/como-funciona">
              Ver guía rápida
            </Button>
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Sparkles size={16} />
              <span>Sin registro ni correo. Solo necesitas tu enlace.</span>
            </div>
          </div>
        </form>

        <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Cartones</p>
              <p className="text-lg font-bold text-ink">QR listos para la mesa</p>
            </div>
            <Badge tone="coral">Compartir en persona</Badge>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {qrList.map((code) => (
              <div key={code} className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-inner">
                  <QrCode />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">{code}</p>
                  <p className="text-xs text-ink/70">Escanéalo y listo.</p>
                </div>
                <Button size="sm" variant="ghost">
                  Mostrar
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-ink/90 p-4 text-cream">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Consejo</p>
            <p className="mt-1 text-sm text-cream/85">
              Coloca tu móvil en el centro de la mesa en modo silencio y ve cantando los números. Los QR pueden
              proyectarse o pasarse de mano en mano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
