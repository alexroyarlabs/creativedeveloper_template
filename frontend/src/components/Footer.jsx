const Footer = () => (
  <footer className="border-t border-white/10 bg-background/70">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-white/60">Crafted for teams who write with precision.</p>
      <div className="flex items-center gap-3 text-sm text-white/60">
        <a className="hover:text-secondary transition" href="#">Docs</a>
        <a className="hover:text-secondary transition" href="#">Changelog</a>
        <a className="hover:text-secondary transition" href="#">@charcount</a>
      </div>
    </div>
  </footer>
);

export default Footer;
