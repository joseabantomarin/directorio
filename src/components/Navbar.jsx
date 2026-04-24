import { useState } from 'react';
import { Link2, Search, Menu, X } from 'lucide-react';

export default function Navbar({ onRegisterClick, onQuickSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onQuickSearch?.(query);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-white">
            <Link2 className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-brand-900">
            Open<span className="text-accent-500">Links</span>
          </span>
        </a>

        <form
          onSubmit={submit}
          className="ml-2 hidden flex-1 items-center md:flex"
        >
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca restaurantes, dentistas, academias..."
              className="input !py-2 pl-9"
            />
          </div>
        </form>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          <a href="#negocios" className="btn-ghost">
            Explorar
          </a>
          <a href="#valor" className="btn-ghost">
            Sobre OpenLinks
          </a>
          <button onClick={onRegisterClick} className="btn-primary">
            Registra tu empresa · Gratis
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-200 text-brand-800 md:hidden"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <div className="space-y-3 px-4 py-4">
            <form onSubmit={submit} className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="¿Qué buscas hoy?"
                className="input pl-9"
              />
            </form>
            <div className="flex flex-col gap-2">
              <a href="#negocios" className="btn-ghost justify-start">
                Explorar
              </a>
              <a href="#valor" className="btn-ghost justify-start">
                Sobre OpenLinks
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onRegisterClick?.();
                }}
                className="btn-primary"
              >
                Registra tu empresa
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
