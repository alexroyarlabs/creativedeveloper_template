import { ChatStyle, Message, Participant } from "../types";

interface PhonePreviewProps {
  participants: Participant[];
  messages: Message[];
  style: ChatStyle;
  title?: string;
  statusBar?: boolean;
  loading?: boolean;
  onMessageClick?: (id: string) => void;
  showTyping?: boolean;
  safeArea?: boolean;
}

export function PhonePreview({
  participants,
  messages,
  style,
  title = "ChatScene",
  statusBar = true,
  loading = false,
  onMessageClick,
  showTyping,
  safeArea
}: PhonePreviewProps) {
  const participantById = (id: string) => participants.find((p) => p.id === id);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/60 shadow-2xl">
        <div
          className="relative flex h-[540px] flex-col"
          style={{ background: style.background }}
          aria-label="Vista previa tipo teléfono"
        >
          {statusBar && (
            <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-200">
              <span>21:30</span>
              <div className="flex items-center gap-1">
                <div className="h-4 w-6 rounded-full bg-white/20" />
                <div className="h-4 w-4 rounded-full bg-white/40" />
              </div>
            </div>
          )}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-white/15" />
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-[11px] text-white/70">En línea · editable</p>
              </div>
            </div>
            <div className="flex gap-2 text-white/70">
              <span className="text-sm">⋯</span>
              <span className="text-sm">⚙</span>
            </div>
          </div>

          <div className="relative flex-1 space-y-3 overflow-y-auto px-4 py-2">
            {safeArea && <div className="pointer-events-none absolute inset-3 rounded-xl border-2 border-dashed border-white/30" aria-hidden />}
            {loading ? (
              <div className="space-y-3 pt-6">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className={`h-10 w-2/3 rounded-2xl bg-white/10 ${item % 2 === 0 ? "ml-auto w-1/2" : ""}`}
                  />
                ))}
                <p className="text-center text-xs text-white/70">Cargando demo…</p>
              </div>
            ) : (
              messages.map((msg) => {
                const sender = participantById(msg.senderId);
                const isRight = sender?.side === "right";
                const bubbleColor = isRight ? style.bubbleRight : style.bubbleLeft;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isRight ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      onClick={() => onMessageClick?.(msg.id)}
                      className="max-w-[80%] cursor-pointer space-y-1 rounded-2xl px-4 py-2 text-sm text-slate-900 shadow-lg"
                      style={{ background: bubbleColor }}
                    >
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-900/70">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: sender?.color || style.accent }}
                        />
                        <span>{sender?.name ?? "Invitado"}</span>
                        {msg.timestamp && <span className="text-slate-900/50">{msg.timestamp}</span>}
                      </div>
                      <p className="text-slate-950">{msg.content}</p>
                    </div>
                  </div>
                );
              })
            )}
            {showTyping && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[11px] text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white/60" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white/60 [animation-delay:120ms]" />
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white/60 [animation-delay:240ms]" />
                  <span className="pl-1">Escribiendo…</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-slate-400">
        Esto es interactivo: prueba cambiar el estilo o escribir una línea.
      </p>
    </div>
  );
}
