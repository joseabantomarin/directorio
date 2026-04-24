import {
  Search,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Star,
  BadgeCheck,
  Gift,
  Code2,
  Bot,
} from 'lucide-react';

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
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
              <Gift className="h-3.5 w-3.5" /> 100% Gratis · Siempre
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Haz que los clientes te encuentren{' '}
              <span className="text-accent-400">antes que a tu competencia</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-brand-100 sm:text-lg lg:mx-0">
              La red de negocios verificados que conecta tu empresa directamente
              con WhatsApp. <strong className="text-white">Registrarte no cuesta nada</strong>,
              y nunca te cobraremos por estar aquí.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-200 lg:mx-0">
              Además desarrollamos tu <span className="font-semibold text-white">web, apps, automatizaciones e IA</span>
              {' '}para que tu negocio crezca con tecnología de verdad.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit?.();
              }}
              className="mt-8"
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

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm text-brand-100 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <Feature icon={Gift} label="Registro 100% gratis" />
              <Feature icon={ShieldCheck} label="Negocios verificados" />
              <Feature icon={MessageCircle} label="Contacto directo" />
              <Feature icon={Code2} label="Soluciones digitales" />
            </div>
          </div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 lg:justify-start">
      <Icon className="h-4 w-4 text-accent-400" /> {label}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div
      className="relative mx-auto mt-4 h-[420px] w-full max-w-md lg:mt-0 lg:h-[480px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent-400/25 via-brand-400/20 to-transparent blur-3xl" />

      <div className="absolute left-2 top-6 w-[84%] max-w-sm -rotate-[5deg] rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:left-6">
        <div className="relative h-32 w-full overflow-hidden rounded-xl bg-brand-100">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
            Gastronomía
          </span>
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-accent-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            <BadgeCheck className="h-3 w-3" /> Verificado
          </span>
        </div>
        <div className="mt-3 px-1">
          <p className="text-sm font-bold text-brand-900">
            Sazón Criolla Doña Rosa
          </p>
          <div className="mt-1 flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="ml-1 text-[11px] font-semibold text-brand-700">
              4.9
            </span>
            <span className="ml-auto text-[11px] text-brand-500">Barranco</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 right-0 w-64 rotate-[4deg] rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:right-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-brand-900">
              WhatsApp · nuevo cliente
            </p>
            <p className="text-[10px] text-brand-500">hace 2 min</p>
          </div>
        </div>
        <div className="mt-2 rounded-lg rounded-tl-none bg-brand-50 px-3 py-2 text-xs text-brand-800">
          ¡Hola! Vi tu negocio en OpenLinks, ¿tienen mesa para 4?
        </div>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
        <Bot className="h-4 w-4 text-brand-700" />
        <span className="text-xs font-semibold text-brand-800">
          IA · automatización
        </span>
      </div>

      <div className="absolute right-10 top-0 hidden items-center gap-2 rounded-full bg-accent-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:flex">
        <Sparkles className="h-3.5 w-3.5" /> Registro gratis
      </div>
    </div>
  );
}
