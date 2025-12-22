import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { galleryItems } from "../data/mockData";

const tabs = ["Destacados", "Colecciones", "Más recientes"] as const;

export function Galeria() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Destacados");
  const [collection, setCollection] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const collections = Array.from(new Set(galleryItems.map((i) => i.collection).filter(Boolean))) as string[];

  const filtered = useMemo(() => {
    let list = [...galleryItems];
    if (collection) list = list.filter((i) => i.collection === collection);
    if (query) list = list.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()));
    return list;
  }, [collection, query]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="text-sm text-slate-400">Inicio &gt; Galería</div>
      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-title">Inspiración</p>
          <h1 className="section-heading">Galería</h1>
          <p className="text-slate-300">Destacados, colecciones y lo más reciente listo para remixar.</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/5 p-1 text-sm">
          {tabs.map((t) => (
            <button
              key={t}
              className={`rounded-full px-4 py-2 ${tab === t ? "bg-white text-ink" : "text-slate-200"}`}
              onClick={() => {
                setTab(t);
                setCollection(null);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
              placeholder="Buscar por título o tag…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn-secondary" onClick={() => setQuery("")}>
              × Borrar
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div key={item.id} className="card group flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={item.preview} alt={item.title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-2 text-[11px] font-semibold">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/90 px-2 py-1 text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-xs text-slate-400">
                      {item.collection ? `Colección: ${item.collection}` : "Destacado"}
                    </p>
                  </div>
                  <div className="text-xs text-slate-300">48 ejemplos</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="btn-primary flex-1"
                    onClick={() => navigate("/editor", { state: { remix: true, sourceId: item.id } })}
                  >
                    Remixar
                  </button>
                  <button className="btn-secondary" onClick={() => navigate(`/galeria/${item.id}`)}>
                    Ver detalle
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="font-semibold text-white">Esta colección está vacía por ahora.</p>
              <button className="btn-primary mt-3" onClick={() => setCollection(null)}>
                Explorar destacados
              </button>
            </div>
          )}
        </div>

        <aside className="w-full lg:w-64">
          <div className="card space-y-3">
            <p className="text-sm font-semibold text-slate-100">Colecciones populares</p>
            <div className="flex flex-col gap-2">
              {collections.map((col) => (
                <button
                  key={col}
                  className={`rounded-2xl border px-3 py-2 text-left text-sm transition ${
                    collection === col ? "border-primary bg-primary/10 text-white" : "border-white/10 bg-white/5"
                  }`}
                  onClick={() => {
                    setCollection(col);
                    setTab("Colecciones");
                  }}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
