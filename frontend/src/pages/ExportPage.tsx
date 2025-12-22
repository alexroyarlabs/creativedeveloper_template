import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PhonePreview } from "../components/PhonePreview";
import { chatStyles, demoMessages, demoParticipants } from "../data/mockData";
import { Message } from "../types";

type Format = "single" | "carousel";

export function ExportPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const incomingMessages: Message[] = (location.state as any)?.messages ?? demoMessages;
  const [format, setFormat] = useState<Format>("single");
  const [safeArea, setSafeArea] = useState(true);
  const [slide, setSlide] = useState(0);
  const [includeStory, setIncludeStory] = useState(true);

  const slides = format === "single" ? [incomingMessages] : [incomingMessages.slice(0, 4), incomingMessages.slice(4)];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="flex items-center justify-between">
        <button className="btn-secondary" onClick={() => navigate("/editor")}>
          ← Volver al editor
        </button>
        <h1 className="text-2xl font-semibold">Exportación</h1>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">Copiar enlace</button>
          <button className="btn-primary">Descargar</button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card flex flex-col items-center gap-4">
          <div className="flex w-full items-center justify-between text-sm text-slate-300">
            <p>{format === "single" ? "Imagen única" : `Carrusel (${slide + 1}/${slides.length})`}</p>
            <div className="flex items-center gap-2">
              <label className="inline-flex items-center gap-2 text-xs">
                <input type="checkbox" className="accent-primary" checked={safeArea} onChange={() => setSafeArea((s) => !s)} />
                Mostrar área segura
              </label>
              <label className="inline-flex items-center gap-2 text-xs">
                <input type="checkbox" className="accent-primary" checked={includeStory} onChange={() => setIncludeStory((s) => !s)} />
                Incluir título y contexto
              </label>
            </div>
          </div>
          <PhonePreview
            participants={demoParticipants}
            messages={slides[slide] || incomingMessages}
            style={chatStyles[0]}
            title={includeStory ? "Título y contexto" : "ChatScene"}
            safeArea={safeArea}
          />
          {format === "carousel" && (
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-8 rounded-full ${idx === slide ? "bg-primary" : "bg-white/20"}`}
                  onClick={() => setSlide(idx)}
                  aria-label={`Abrir diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="card space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-100">Formato</p>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                className={`rounded-2xl border px-4 py-3 text-left ${format === "single" ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"}`}
                onClick={() => setFormat("single")}
              >
                <p className="font-semibold text-white">Imagen única</p>
                <p className="text-sm text-slate-400">Ideal si el texto cabe en una sola captura.</p>
              </button>
              <button
                className={`rounded-2xl border px-4 py-3 text-left ${format === "carousel" ? "border-primary bg-primary/10" : "border-white/10 bg-white/5"}`}
                onClick={() => setFormat("carousel")}
              >
                <p className="font-semibold text-white">Carrusel</p>
                <p className="text-sm text-slate-400">Reparte el diálogo en varias pantallas.</p>
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">Presets de tamaño</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Story", "Post cuadrado", "Vertical"].map((preset) => (
                <span key={preset} className="chip">
                  {preset}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Antes de exportar</p>
            <div className="mt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-xl bg-primary/5 px-3 py-2">
                <span>Texto muy pequeño en la diapositiva 3.</span>
                <button className="btn-secondary text-xs">Ajustar tamaño</button>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2">
                <span>Evita cortes raros en el carrusel.</span>
                <button className="btn-secondary text-xs">Repartir mejor</button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary">Descargar</button>
            <button className="btn-secondary">Descargar como paquete</button>
            <button className="btn-secondary">Copiar enlace</button>
          </div>
        </div>
      </div>
    </main>
  );
}
