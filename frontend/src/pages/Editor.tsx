import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { chatStyles, demoMessages, demoParticipants } from "../data/mockData";
import { Message, Participant } from "../types";
import { PhonePreview } from "../components/PhonePreview";

export function Editor() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDraft: Message[] = (location.state as any)?.draft ?? demoMessages;
  const [participants, setParticipants] = useState<Participant[]>(demoParticipants);
  const [messages, setMessages] = useState<Message[]>(initialDraft);
  const [speaker, setSpeaker] = useState(participants[0].id);
  const [composer, setComposer] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(chatStyles[0]);
  const [storyMode, setStoryMode] = useState(false);
  const [title, setTitle] = useState("Conversación sin título");
  const [viewMode, setViewMode] = useState<"editar" | "escenas">("editar");
  const [showGuides, setShowGuides] = useState(false);

  const remixBanner = (location.state as any)?.remix;

  const addMessage = () => {
    if (!composer.trim()) return;
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: speaker,
      content: composer.trim(),
      type: "text"
    };
    setMessages((prev) => [...prev, newMsg]);
    setComposer("");
  };

  const updateParticipant = (id: string, name: string) => {
    setParticipants((prev) => prev.map((p) => (p.id === id ? { ...p, name } : p)));
  };

  return (
    <main className="bg-canvas text-white">
      <div className="border-b border-white/10 bg-panel/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="btn-secondary">
              ←
            </button>
            <div>
              <input
                className="text-lg font-semibold bg-transparent outline-none focus:ring-2 focus:ring-primary/40"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="text-xs text-slate-400">Ponle un nombre para encontrarla después (opcional).</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-secondary">Deshacer</button>
            <button className="btn-secondary">Rehacer</button>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 text-sm">
              <button
                className={`rounded-full px-3 py-1 ${viewMode === "editar" ? "bg-white text-ink" : "text-slate-200"}`}
                onClick={() => setViewMode("editar")}
              >
                Editar
              </button>
              <button
                className={`rounded-full px-3 py-1 ${viewMode === "escenas" ? "bg-white text-ink" : "text-slate-200"}`}
                onClick={() => setViewMode("escenas")}
              >
                Escenas
              </button>
              <label className="flex cursor-pointer items-center gap-1 px-2">
                <input
                  type="checkbox"
                  className="accent-primary"
                  checked={showGuides}
                  onChange={() => setShowGuides((s) => !s)}
                />
                <span className="text-xs">Mostrar guías</span>
              </label>
            </div>
            <button className="btn-primary" onClick={() => navigate("/export", { state: { messages } })}>
              Exportar
            </button>
            <button className="btn-secondary" onClick={() => navigate("/colaborar")}>
              Compartir
            </button>
            <button className="btn-secondary" onClick={() => navigate("/colaborar")}>
              ⋯
            </button>
          </div>
        </div>
        {remixBanner && (
          <div className="border-t border-primary/20 bg-primary/10 px-4 py-2 text-center text-sm text-primary">
            Remix de un ejemplo. Ver original
          </div>
        )}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:flex-row md:px-6">
        <aside className="w-full space-y-4 md:w-72">
          <div className="card">
            <p className="text-sm font-semibold text-slate-200">Personajes</p>
            <p className="text-xs text-slate-400">Mantén 2–3 personajes para que se lea fácil.</p>
            <div className="mt-3 space-y-3">
              {participants.map((p) => (
                <div key={p.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-10 w-10 rounded-full"
                      style={{ background: p.color }}
                      aria-hidden
                    />
                    <input
                      className="w-full rounded-lg bg-white/5 px-2 py-1 text-sm font-semibold text-white outline-none"
                      value={p.name}
                      onChange={(e) => updateParticipant(p.id, e.target.value)}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                    <span>Lado</span>
                    <div className="flex items-center gap-2">
                      <button
                        className={`rounded-full px-3 py-1 ${p.side === "left" ? "bg-white text-ink" : "bg-white/10"}`}
                        onClick={() =>
                          setParticipants((prev) =>
                            prev.map((x) => (x.id === p.id ? { ...x, side: "left" } : x))
                          )
                        }
                      >
                        Izquierda
                      </button>
                      <button
                        className={`rounded-full px-3 py-1 ${p.side === "right" ? "bg-white text-ink" : "bg-white/10"}`}
                        onClick={() =>
                          setParticipants((prev) =>
                            prev.map((x) => (x.id === p.id ? { ...x, side: "right" } : x))
                          )
                        }
                      >
                        Derecha
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn-secondary w-full">+ Añadir personaje</button>
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" className="accent-primary" />
                Anonimizar
              </label>
            </div>
          </div>

          <div className="card">
            <p className="text-sm font-semibold text-slate-200">Estilo</p>
            <p className="text-xs text-slate-400">Lo importante es el texto. Ajusta lo mínimo.</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {chatStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                    selectedStyle.id === style.id ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="h-2 w-10 rounded-full" style={{ background: style.accent }} />
                  <p className="mt-2 font-semibold text-white">{style.name}</p>
                </button>
              ))}
            </div>
            <div className="mt-3 space-y-2">
              <label className="flex items-center justify-between text-xs text-slate-300">
                Claro / Oscuro
                <input type="range" className="accent-primary" />
              </label>
              <label className="flex items-center justify-between text-xs text-slate-300">
                Tamaño de texto
                <input type="range" className="accent-primary" />
              </label>
              <label className="flex items-center justify-between text-xs text-slate-300">
                Fondo
                <select className="rounded-lg bg-white/5 px-2 py-1 text-xs">
                  <option>Gradient</option>
                  <option>Sólido</option>
                  <option>Wallpaper</option>
                </select>
              </label>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-200">Historia</p>
              <label className="flex items-center gap-2 text-xs text-slate-300">
                <input
                  type="checkbox"
                  className="accent-primary"
                  checked={storyMode}
                  onChange={() => setStoryMode((s) => !s)}
                />
                Modo historia
              </label>
            </div>
            {storyMode && (
              <div className="mt-3 space-y-2">
                <input
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Título"
                />
                <textarea
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Contexto (opcional)"
                  rows={3}
                />
                <button className="btn-secondary w-full">Sugerir estructura</button>
              </div>
            )}
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-4 md:flex-row">
          <div className="card flex-1">
            <PhonePreview
              participants={participants}
              messages={messages}
              style={selectedStyle}
              title={title}
              safeArea={showGuides}
              showTyping
            />
            <p className="mt-2 text-center text-xs text-slate-400">Clic en un mensaje para editarlo.</p>
          </div>
          <div className="card flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Guion</p>
                <p className="text-xs text-slate-400">Arrastra para reordenar.</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="rounded-full bg-white/10 px-3 py-2 text-xs text-white outline-none"
                  placeholder="Buscar en la conversación…"
                />
                <button className="btn-secondary text-sm">+ Insertar</button>
              </div>
            </div>
            <div className="mt-3 space-y-3 max-h-[360px] overflow-y-auto pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {participants.find((p) => p.id === msg.senderId)?.name ?? "A"}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-white">{msg.content}</p>
                    <p className="text-[11px] text-slate-400">Tipo: {msg.type}</p>
                  </div>
                  <button className="text-sm text-slate-300">⋯</button>
                </div>
              ))}
            </div>
            <div className="sticky bottom-0 mt-4 space-y-2 rounded-2xl bg-white/5 p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs">
                  {participants.map((p) => (
                    <button
                      key={p.id}
                      className={`rounded-full px-3 py-1 font-semibold ${
                        speaker === p.id ? "bg-white text-ink" : "text-white/70"
                      }`}
                      onClick={() => setSpeaker(p.id)}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400">↵ Enter para enviar · Shift+Enter para salto</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40"
                  placeholder="Escribe un mensaje…"
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      addMessage();
                    }
                  }}
                />
                <button className="btn-primary px-4 py-2" onClick={addMessage}>
                  Enviar
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <button className="btn-secondary px-3 py-2 text-sm">+ Pausa</button>
                <select className="rounded-full bg-white/5 px-3 py-2 text-xs outline-none">
                  <option>Tipo: Texto</option>
                  <option>Imagen</option>
                  <option>Audio</option>
                  <option>Sistema</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
