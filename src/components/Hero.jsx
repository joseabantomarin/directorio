import { Search, MapPin, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero({
  searchTerm,
  setSearchTerm,
  searchDistrict,
  setSearchDistrict,
  districts,
  onSubmit,
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-900 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(16,185,129,0.25), transparent 40%), radial-gradient(circle at 85% 30%, rgba(74,127,196,0.35), transparent 45%), radial-gradient(circle at 50% 120%, rgba(16,185,129,0.15), transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
            <Sparkles className="h-3.5 w-3.5" /> Comunidad verificada
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Haz que los clientes te encuentren{' '}
            <span className="text-accent-400">antes que a tu competencia</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brand-100 sm:text-lg">
            La red de negocios verificados que conecta tu empresa directamente
            con WhatsApp.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:grid-cols-[1.2fr_1fr_auto]">
            <label className="relative flex items-center">
              <Search className="pointer-events-none absolute left-3 h-5 w-5 text-brand-400" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Qué buscas (ej: dentista, abogado...)"
                className="h-12 w-full rounded-xl border-0 bg-transparent pl-11 pr-3 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </label>
            <label className="relative flex items-center sm:border-l sm:border-brand-100">
              <MapPin className="pointer-events-none absolute left-3 h-5 w-5 text-brand-400 sm:left-5" />
              <select
                value={searchDistrict}
                onChange={(e) => setSearchDistrict(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border-0 bg-transparent pl-11 pr-8 text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-200 sm:pl-12"
              >
                <option value="">Distrito / Zona</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn-primary h-12 px-6">
              <Search className="h-4 w-4" /> Buscar
            </button>
          </div>
        </form>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm text-brand-100 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent-400" /> Negocios
            verificados
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4 text-accent-400" /> Contacto
            directo por WhatsApp
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-accent-400" /> Registro gratuito
          </div>
        </div>
      </div>
    </section>
  );
}
