import { useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const generateCard = () =>
  Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => row * 15 + col + 1 + Math.floor(Math.random() * 5))
  );

const PlayerCard = () => {
  const [numbers] = useState(generateCard());
  const [marked, setMarked] = useState<Record<number, boolean>>({});

  const progress = useMemo(() => {
    const flat = numbers.flat();
    const checked = flat.filter((num) => marked[num]).length;
    return Math.round((checked / flat.length) * 100);
  }, [numbers, marked]);

  const toggle = (value: number) => {
    setMarked((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8">
      <div className="space-y-3">
        <Badge tone="ink">Cartón del jugador</Badge>
        <h1 className="text-3xl font-bold text-ink">Interfaz limpia y silenciosa para cantar línea o bingo.</h1>
        <p className="text-lg text-ink/75">
          Escanea el QR, abre tu cartón y toca los números que escuchas. Números grandes, contraste suave y sin
          distracciones digitales.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Mi cartón</p>
              <p className="text-lg font-bold text-ink">Mesa del domingo</p>
            </div>
            <Badge tone="mint">Modo silencio</Badge>
          </div>
          <div className="mt-5 grid grid-cols-5 gap-3">
            {numbers.flat().map((num) => (
              <button
                key={num}
                onClick={() => toggle(num)}
                className={`flex h-16 items-center justify-center rounded-2xl border text-xl font-bold transition-all ${
                  marked[num]
                    ? 'border-ink bg-ink text-cream shadow-soft'
                    : 'border-ink/15 bg-cream hover:-translate-y-0.5'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-mint/60 px-4 py-3 text-sm font-semibold text-ink">
            <span>Progreso del cartón</span>
            <span>{progress}% marcado</span>
          </div>
          <p className="mt-3 text-sm text-ink/70">
            Cuando tengas línea o bingo, dilo en voz alta. La validación siempre es humana.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
          <Badge tone="coral">Consejos rápidos</Badge>
          <ul className="space-y-3 text-sm text-ink/75">
            <li>• Mantén el brillo medio para no distraer en la mesa.</li>
            <li>• Usa modo avión si no quieres notificaciones durante el juego.</li>
            <li>• Puedes compartir el QR del cartón con alguien que llegue tarde.</li>
            <li>• El botón táctil es suave para mayores y peques.</li>
          </ul>
          <div className="rounded-2xl bg-ink text-cream p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Recordatorio</p>
            <p className="mt-2 text-base">
              El móvil es solo un cartón. Las risas, la emoción y la validación siguen siendo en persona.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/crear" variant="primary">
              Crear partida
            </Button>
            <Button to="/" variant="ghost">
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
