const column = [
  {
    title: "Producto",
    links: ["Guía rápida", "Atajos del editor", "Preguntas frecuentes"]
  },
  {
    title: "Comunidad",
    links: ["Galería", "Plantillas", "Enviar un ejemplo"]
  },
  {
    title: "Contacto",
    links: ["Contacto", "Reportar un problema"]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-6 md:flex-row md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">ChatScene</p>
          <p className="text-sm text-slate-400 max-w-sm mt-2">
            Diseña escenas creíbles en minutos. Vista previa en tiempo real, exportación sin fricción.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3">
          {column.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="font-semibold text-white">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-4 text-center text-xs text-slate-500">
        ChatScene v1.0 · Español
      </div>
    </footer>
  );
}
