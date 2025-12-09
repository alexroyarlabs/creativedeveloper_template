import CharacterCounter from "../components/CharacterCounter";
import PrimaryButton from "../components/PrimaryButton";

const CounterPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-secondary/80">Workspace</p>
          <h1 className="text-3xl font-semibold text-muted">Characters Counter</h1>
          <p className="mt-2 text-white/60">
            Draft, measure, and adjust in real time with channel presets and usage guidance.
          </p>
        </div>
        <PrimaryButton as="a" href="/">
          Back to home
        </PrimaryButton>
      </div>
      <CharacterCounter />
    </main>
  );
};

export default CounterPage;
