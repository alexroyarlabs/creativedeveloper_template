import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { chatStyles, demoMessages, demoParticipants, galleryItems } from "../data/mockData";
import { PhonePreview } from "../components/PhonePreview";
import { ChatStyle } from "../types";

export function GaleriaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = useMemo(() => galleryItems.find((g) => g.id === id), [id]);
  const [style, setStyle] = useState<ChatStyle>(chatStyles[0]);

  if (!item) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-white md:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-lg font-semibold">Este ejemplo no está disponible.</p>
          <div className="mt-3 flex justify-center gap-3">
            <button className="btn-primary" onClick={() => navigate("/galeria")}>
              Volver a la galería
            </button>
            <button className="btn-secondary" onClick={() => navigate("/editor")}>
              Abrir editor
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="text-sm text-slate-400">
        Inicio &gt; Galería{item.collection ? ` > ${item.collection}` : ""} &gt; {item.title}
      </div>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <PhonePreview
            participants={demoParticipants}
            messages={demoMessages}
            style={style}
            title={item.title}
            showTyping
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {chatStyles.map((s) => (
              <button
                key={s.id}
                className={`chip ${style.id === s.id ? "border-primary/60 text-white" : ""}`}
                onClick={() => setStyle(s)}
              >
                {s.name}
              </button>
            ))}
            <p className="w-full text-xs text-slate-400">Solo vista previa. Al remixar podrás elegir.</p>
          </div>
        </div>
        <div className="card space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Ejemplo</p>
              <h1 className="text-3xl font-semibold">{item.title}</h1>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-primary">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right text-xs text-slate-400">48 ejemplos</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="btn-primary"
              onClick={() => navigate("/editor", { state: { remix: true, sourceId: item.id } })}
            >
              Remixar este ejemplo
            </button>
            <button className="btn-secondary" onClick={() => navigate("/editor")}>
              Crear desde cero
            </button>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Estructura</p>
            <p className="text-xs text-slate-400">Haz clic para navegar las escenas.</p>
            <div className="mt-3 space-y-2">
              {item.scenes?.map((scene) => (
                <div
                  key={scene.id}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span>{scene.title}</span>
                  <button className="btn-secondary text-xs">Saltar</button>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Notas</p>
            <p className="text-sm text-slate-300">
              Remixar crea una copia editable con skins coherentes. Añade beats, escenas y modo historia si lo
              necesitas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
