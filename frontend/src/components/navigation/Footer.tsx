const Footer = () => (
  <footer className="border-t border-ink/5 bg-white/70">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-ink/80 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <div>
        <p className="font-semibold text-ink">Hecho para jugar juntos, no para mirar pantallas.</p>
        <p className="text-ink/60">El bingo familiar, más fácil que nunca.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <a className="hover:text-ink" href="/como-funciona">
          Cómo funciona
        </a>
        <a className="hover:text-ink" href="/crear">
          Crear partida
        </a>
        <a className="hover:text-ink" href="mailto:hola@bingofamiliar.app">
          Contacto
        </a>
        <a className="hover:text-ink" href="#creditos">
          Créditos
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
