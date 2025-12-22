import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhonePreview } from "../components/PhonePreview";
import { chatStyles, demoMessages, demoParticipants } from "../data/mockData";

export function Colaborar() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"edit" | "view">("edit");
  const [notes, setNotes] = useState("");
  const [showInvite, setShowInvite] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white md:px-6">
      <div className="flex items-center justify-between">
        <button className="btn-secondary" onClick={() => navigate("/editor")}>
          ← Volver al editor
        </button>
        <h1 className="text-2xl font-semibold">Modo colaborativo</h1>
        <button className="btn-primary" onClick={() => setShowInvite(true)}>
          Invitar a alguien
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-100">Presencia</p>
            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">2 en línea</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm">
              <span className="h-8 w-8 rounded-full bg-primary/20" />
              <div>
                <p className="font-semibold text-white">Tú (propietario)</p>
                <p className="text-xs text-slate-400">Editando ahora</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm">
              <span className="h-8 w-8 rounded-full bg-accent/20" />
              <div>
                <p className="font-semibold text-white">Ana (invitada)</p>
                <p className="text-xs text-slate-400">Editando mensaje 4</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Notas internas</p>
            <textarea
              className="mt-2 w-full rounded-xl bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Nota rápida para tu coautor…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
              <p>Esto no aparece en el export.</p>
              <button className="btn-secondary">Enviar nota</button>
            </div>
          </div>
        </div>

        <div className="card space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-100">Editor compartido</p>
            <p className="text-xs text-slate-400">Editando: Ana</p>
          </div>
          <PhonePreview
            participants={demoParticipants}
            messages={demoMessages}
            style={chatStyles[1]}
            title="Colaborando"
            showTyping
          />
          <div className="rounded-2xl bg-white/5 p-3 text-sm text-slate-300">
            <p>Este mensaje está siendo editado por Ana.</p>
            <button className="btn-secondary mt-2 text-xs">Editar una copia</button>
          </div>
        </div>
      </div>

      {showInvite && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-panel p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Invitar a colaborar</p>
              <button onClick={() => setShowInvite(false)} aria-label="Cerrar" className="text-slate-400">
                ×
              </button>
            </div>
            <p className="text-sm text-slate-400">Cualquiera con el enlace podrá entrar.</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="text-sm font-semibold text-white">Rol</p>
                <div className="mt-2 flex gap-2">
                  <button
                    className={`rounded-xl px-3 py-2 text-sm ${role === "edit" ? "bg-primary text-ink" : "bg-white/5"}`}
                    onClick={() => setRole("edit")}
                  >
                    Puede editar
                  </button>
                  <button
                    className={`rounded-xl px-3 py-2 text-sm ${role === "view" ? "bg-primary text-ink" : "bg-white/5"}`}
                    onClick={() => setRole("view")}
                  >
                    Solo ver
                  </button>
                </div>
              </div>
              <button className="btn-primary w-full">Copiar enlace de invitación</button>
              <button className="btn-secondary w-full" onClick={() => setShowInvite(false)}>
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
