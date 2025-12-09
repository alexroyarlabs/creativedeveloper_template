import { useEffect, useMemo, useState } from "react";
import PrimaryButton from "./PrimaryButton";

const MAX_LIMIT = 280;

const CharacterCounter = () => {
  const [text, setText] = useState(
    "Tell your story here. The counter updates live, tracks limits, and highlights insights.",
  );
  const [limit, setLimit] = useState(MAX_LIMIT);
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const length = text.length;
    const words = text.trim().length ? text.trim().split(/\s+/).length : 0;
    const remaining = Math.max(limit - length, 0);
    const overBy = Math.max(length - limit, 0);
    const saturation = Math.min(length / limit, 1);
    return { length, words, remaining, overBy, saturation };
  }, [text, limit]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
  };

  const handlePreset = (preset) => {
    setText(preset);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="glass rounded-3xl border border-white/10 p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-wide text-secondary/80">Live drafting</p>
              <h2 className="text-2xl font-semibold text-muted">Character counter</h2>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="w-24 rounded-xl border border-white/10 bg-surface/80 px-3 py-2 text-sm text-muted outline-none focus:border-secondary"
                value={limit}
                min={10}
                max={2000}
                onChange={(e) => setLimit(Number(e.target.value) || MAX_LIMIT)}
              />
              <span className="text-sm text-white/60">Limit</span>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={8}
              className="w-full rounded-2xl border border-white/10 bg-card/90 px-4 py-4 text-base text-muted shadow-inner outline-none transition focus:border-secondary focus:shadow-glow"
              placeholder="Start typing to see counts..."
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <PrimaryButton onClick={handleCopy}>{copied ? "Copied!" : "Copy text"}</PrimaryButton>
            <PrimaryButton variant="ghost" onClick={() => setText("")}>
              Reset
            </PrimaryButton>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              Live updates enabled
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <InsightBadge label="Social post" onClick={() => handlePreset("Launching our new characters counter—track length, stay on-brand, and publish confidently. Try it out!")}/>
            <InsightBadge label="Product blurb" onClick={() => handlePreset("Characters Counter is a sleek web tool that tracks character and word counts, enforces limits, and highlights overages in real time.")}/>
            <InsightBadge label="Meeting notes" onClick={() => handlePreset("Key decisions: ship beta Friday, lock messaging at 120 chars, add word density checks for marketing drafts.")}/>
            <InsightBadge label="Blank template" onClick={() => handlePreset("")}/>
          </div>
        </div>
      </div>
      <div className="glass lg:col-span-2 rounded-3xl border border-white/10 p-6 shadow-card">
        <h3 className="text-xl font-semibold text-muted">Counts & limits</h3>
        <p className="mt-2 text-sm text-white/60">
          Monitor limits across channels and keep drafts concise. Limits adjust per campaign.
        </p>
        <div className="mt-4 space-y-3">
          <Meter label="Usage" value={stats.saturation} limit={limit} />
          <StatRow label="Characters" value={stats.length} />
          <StatRow label="Words" value={stats.words} />
          <StatRow label="Remaining" value={stats.remaining} />
          {stats.overBy > 0 && (
            <p className="text-sm font-semibold text-red-400">
              Over limit by {stats.overBy} characters — tighten phrasing.
            </p>
          )}
        </div>
        <div className="mt-6 space-y-3 rounded-2xl border border-white/5 bg-card/70 p-4">
          <h4 className="text-sm uppercase tracking-wide text-secondary/80">Channel presets</h4>
          <div className="grid grid-cols-2 gap-3">
            <PresetChip name="Tweet" count={280} onClick={() => setLimit(280)} active={limit === 280} />
            <PresetChip name="LinkedIn" count={3000} onClick={() => setLimit(3000)} active={limit === 3000} />
            <PresetChip name="SMS" count={160} onClick={() => setLimit(160)} active={limit === 160} />
            <PresetChip name="Ad copy" count={90} onClick={() => setLimit(90)} active={limit === 90} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatRow = ({ label, value }) => (
  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-muted">
    <span className="text-white/60">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const PresetChip = ({ name, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition ${
      active
        ? "bg-primary/20 text-secondary ring-1 ring-secondary/40"
        : "bg-white/5 text-white/70 hover:text-secondary hover:ring-1 hover:ring-secondary/40"
    }`}
  >
    <span>{name}</span>
    <span className="text-white/60">{count}</span>
  </button>
);

const Meter = ({ label, value, limit }) => (
  <div>
    <div className="mb-2 flex items-center justify-between text-sm text-white/70">
      <span>{label}</span>
      <span>{Math.round(value * 100)}% of {limit}</span>
    </div>
    <div className="h-3 rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-300"
        style={{ width: `${Math.min(value * 100, 100)}%` }}
      />
    </div>
  </div>
);

const InsightBadge = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/80 transition hover:border-secondary hover:text-secondary"
  >
    {label}
  </button>
);

export default CharacterCounter;
