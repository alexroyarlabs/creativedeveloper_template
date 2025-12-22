import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "../data/mockData";

const genreFilters = ["Humor", "Drama", "Didáctico", "UX"];
const lengthFilters = ["Corta", "Media", "Larga"];
const toneFilters = ["Ligero", "Serio", "Sarcástico"];

export function Plantillas() {
  const navigate = useNavigate();
  const [genre, setGenre] = useState<string | null>(null);
  const [length, setLength] = useState<string | null>(null);
  const [tone, setTone] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      templates.filter((tpl) => {
        const byGenre = genre ? tpl.tags.includes(genre) : true;
        const byLength = length ? tpl.tags.includes(length) : true;
        const byTone = tone ? tpl.tags.includes(tone) : true;
        const byQuery = query ? tpl.title.toLowerCase().includes(query.toLowerCase()) : true;
        return byGenre && byLength && byTone && byQuery;
      }),
    [genre, length, tone, query]
  );

  const clearFilters = () => {
    setGenre(null);
    setLength(null);
    setTone(null);
    setQuery("");
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-title">Plantillas</p>
          <h1 className="section-heading">Plantillas para arrancar con ritmo</h1>
          <p className="text-slate-300">Estructuras narrativas listas: humor, drama, aula, UX y más.</p>
        </div>
        <button className="btn-primary" onClick={() => navigate("/editor")}>
          Comenzar
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <input
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
          placeholder="Buscar plantilla…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400">Género</span>
          {genreFilters.map((g) => (
            <button
              key={g}
              onClick={() => setGenre((prev) => (prev === g ? null : g))}
              className={`chip ${genre === g ? "border-primary/60 text-white" : ""}`}
            >
              {g}
            </button>
          ))}
          <span className="text-xs text-slate-400">Longitud</span>
          {lengthFilters.map((g) => (
            <button
              key={g}
              onClick={() => setLength((prev) => (prev === g ? null : g))}
              className={`chip ${length === g ? "border-primary/60 text-white" : ""}`}
            >
              {g}
            </button>
          ))}
          <span className="text-xs text-slate-400">Tono</span>
          {toneFilters.map((g) => (
            <button
              key={g}
              onClick={() => setTone((prev) => (prev === g ? null : g))}
              className={`chip ${tone === g ? "border-primary/60 text-white" : ""}`}
            >
              {g}
            </button>
          ))}
          <button className="btn-secondary ml-auto" onClick={clearFilters}>
            Limpiar filtros
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tpl) => (
          <div key={tpl.id} className="card flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-2xl">
              <img src={tpl.preview} alt={tpl.title} className="h-40 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-ink">
                {tpl.tags[0]}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold">{tpl.title}</p>
              <p className="text-sm text-slate-400">{tpl.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-primary">
                {tpl.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                className="btn-primary flex-1"
                onClick={() => navigate("/editor", { state: { templateId: tpl.id } })}
              >
                Usar esta plantilla
              </button>
              <button className="btn-secondary" onClick={() => navigate("/galeria")}>
                Ver ejemplos
              </button>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="font-semibold text-white">No encontramos plantillas con esos filtros.</p>
          <button className="btn-primary mt-3" onClick={clearFilters}>
            Limpiar filtros
          </button>
        </div>
      )}
    </main>
  );
}
