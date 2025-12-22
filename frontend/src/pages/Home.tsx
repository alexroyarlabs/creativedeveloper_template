import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chatStyles, demoMessages, demoParticipants, galleryItems } from "../data/mockData";
import { ChatStyle, Message } from "../types";
import { PhonePreview } from "../components/PhonePreview";

export function Home() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [style, setStyle] = useState<ChatStyle>(chatStyles[0]);
  const [speaker, setSpeaker] = useState("a");
  const [composer, setComposer] = useState("");
  const [interacted, setInteracted] = useState(false);
  const examplesRef = useRef<HTMLDivElement | null>(null);

  const lastTimestamp = useMemo(
    () => `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")}`,
    [messages.length]
  );

  const handleSend = () => {
    if (!composer.trim()) return;
    const newMsg: Message = {
      id: `u-${Date.now()}`,
      senderId: speaker,
      content: composer.trim(),
      type: "text",
      timestamp: lastTimestamp
    };
    setMessages((prev) => [...prev, newMsg]);
    setComposer("");
    setInteracted(true);
  };

  const handleExamplesScroll = () => {
    examplesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const exampleThumbnails = galleryItems.slice(0, 8);

  return (
    <main className="bg-gradient-to-b from-canvas via-canvas to-slate-900 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="space-y-6 md:max-w-xl">
            <p className="section-title">ChatScene</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Diseña historias como si fueran conversaciones reales.
            </h1>
            <p className="text-lg text-slate-200">
              Crea, edita y exporta chats visuales compartibles en minutos. Vista previa tipo teléfono,
              skins creíbles y exportación lista para redes.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="btn-primary text-base" onClick={() => navigate("/editor")}>
                Comenzar una conversación
              </button>
              <button className="btn-secondary" onClick={handleExamplesScroll}>
                Ver ejemplos
              </button>
              <button className="btn-ghost" onClick={() => navigate("/plantillas")}>
                Explorar plantillas
              </button>
            </div>
            <p className="text-sm text-slate-400">Sin registro. Exporta cuando quieras.</p>
          </div>
          <div className="flex w-full max-w-lg flex-col gap-4">
            <PhonePreview
              participants={demoParticipants}
              messages={messages}
              style={style}
              title="Mini demo"
              showTyping
              statusBar
            />
            <div className="glass rounded-3xl p-4 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 p-1 text-xs">
                  {demoParticipants.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSpeaker(p.id);
                        setInteracted(true);
                      }}
                      className={`rounded-full px-3 py-1 font-semibold transition ${
                        speaker === p.id ? "bg-white text-ink" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400">Enter para enviar · Shift+Enter para salto de línea</p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/50"
                  placeholder="Escribe un mensaje…"
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <button className="btn-primary px-4 py-2" onClick={handleSend}>
                  Enviar
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Estilo</span>
                {chatStyles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setStyle(s);
                      setInteracted(true);
                    }}
                    className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs transition ${
                      style.id === s.id ? "border-primary/70 bg-primary/10 text-white" : "border-white/10 text-slate-300 hover:border-primary/40"
                    }`}
                    aria-label={`Cambiar a estilo ${s.name}`}
                  >
                    <span className="h-2.5 w-8 rounded-full" style={{ background: s.accent }} />
                    <span>{s.name}</span>
                  </button>
                ))}
                <p className="text-xs text-slate-400 w-full">Puedes cambiarlo después.</p>
              </div>
              {interacted && (
                <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-100">
                  <span>Listo. ¿Continuamos en el editor?</span>
                  <button
                    className="text-primary underline decoration-primary/60 underline-offset-4"
                    onClick={() =>
                      navigate("/editor", { state: { draft: messages, styleId: style.id } })
                    }
                  >
                    Ir al editor
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {["Vista previa en tiempo real", "Plantillas narrativas", "Detalles de verosimilitud", "Exporta como imagen o carrusel"].map(
            (benefit) => (
              <div key={benefit} className="card">
                <p className="text-lg font-semibold text-white">{benefit}</p>
                <p className="mt-2 text-sm text-slate-400">
                  Ajustes rápidos, siempre en español, listos para exportar sin sorpresas.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section ref={examplesRef} className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Galería</p>
            <h2 className="section-heading">Ejemplos listos para remixar</h2>
          </div>
          <button className="btn-secondary" onClick={() => navigate("/galeria")}>
            Abrir galería
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exampleThumbnails.map((item) => (
            <div key={item.id} className="card group flex flex-col gap-3">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={item.preview} alt={item.title} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-ink">
                  Remixable
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-400">Tags: {item.tags.join(", ")}</p>
              </div>
              <button
                className="btn-primary"
                onClick={() => navigate(`/galeria/${item.id}`, { state: { remix: true } })}
              >
                Remixar
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-title">Panel vivo</p>
              <h2 className="section-heading">Comprueba ritmo y exportaciones</h2>
              <p className="mt-2 text-slate-300">
                Un vistazo rápido al flujo: qué se está creando, en qué estilo y cuántos archivos lista para compartir.
              </p>
            </div>
            <button className="btn-secondary" onClick={() => navigate("/export")}>
              Ir a exportación
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { label: "Escenas creadas hoy", value: "48", trend: "+12%" },
              { label: "Exports listos", value: "126", trend: "WYSIWYG" },
              { label: "Remixes activos", value: "32", trend: "En vivo" }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-primary">{stat.trend}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <p>Vista previa activa</p>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">Sin registro</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Mini demo → Editor → Export: 8 pasos listos.</li>
                <li>• Seguridad visual: guías y safe area siempre visibles.</li>
                <li>• Enlaces: ver o ver + remix antes de copiar.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-slate-300">Últimos flujos completados</p>
              <div className="mt-3 space-y-2 text-sm">
                {[
                  "Plantilla “El malentendido” → Export Story",
                  "Remix de Galería “Feedback onboarding”",
                  "Colaboración 2 personas → Carrusel"
                ].map((line) => (
                  <div key={line} className="rounded-xl bg-white/5 px-3 py-2 text-slate-200">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="card flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-title">Cómo funciona</p>
            <h2 className="section-heading">Elige un estilo, escribe el diálogo, exporta y comparte</h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Ritmo fluido, capas opcionales, exportación segura. Siempre con vista previa realista.
            </p>
          </div>
          <div className="grid gap-3 md:w-[360px]">
            {[
              { title: "Elige un estilo", desc: "Skins coherentes y creíbles." },
              { title: "Escribe el diálogo", desc: "Modo texto, imagen o sistema con reordenamiento." },
              { title: "Exporta y comparte", desc: "Imagen única o carrusel listo para redes." }
            ].map((step, idx) => (
              <div key={step.title} className="rounded-2xl bg-white/5 p-4 shadow-soft">
                <p className="text-sm text-slate-400">Paso {idx + 1}</p>
                <p className="text-lg font-semibold text-white">{step.title}</p>
                <p className="text-sm text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
