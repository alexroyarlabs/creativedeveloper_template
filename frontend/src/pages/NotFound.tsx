import Button from '../components/ui/Button';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/60">Página no encontrada</p>
    <h1 className="text-3xl font-bold text-ink">Ups, esta ruta no existe.</h1>
    <p className="max-w-xl text-ink/70">
      Quizá buscabas crear una partida o abrir un cartón. Usa los botones para volver a la mesa.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <Button to="/" variant="primary">
        Ir al inicio
      </Button>
      <Button to="/crear" variant="soft">
        Crear partida
      </Button>
    </div>
  </div>
);

export default NotFound;
