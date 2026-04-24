import {
  Users,
  TrendingUp,
  Handshake,
  MessageCircle,
  Gift,
  Globe,
  Smartphone,
  Bot,
  LineChart,
  ArrowRight,
} from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Comunidad, no competencia',
    text: 'Como en un clúster comercial, los negocios cercanos traen más clientes, no menos. Juntos atraemos más tráfico que separados.',
  },
  {
    icon: TrendingUp,
    title: 'Visibilidad que crece',
    text: 'Cada negocio verificado sube el nivel de toda la red. Mejor SEO, más reseñas reales, más tráfico calificado para todos.',
  },
  {
    icon: Handshake,
    title: 'Alianzas naturales',
    text: 'Encuentra proveedores, referidos y colaboradores dentro de la misma comunidad. Hacer negocios entre verificados es más seguro.',
  },
  {
    icon: MessageCircle,
    title: 'Contacto sin fricción',
    text: 'Tu cliente te escribe directamente al WhatsApp. Sin formularios tediosos, sin intermediarios, sin perder el hilo.',
  },
];

const services = [
  {
    icon: Globe,
    title: 'Webs y landings',
    text: 'Sitios rápidos y optimizados para convertir visitas en clientes.',
  },
  {
    icon: Smartphone,
    title: 'Apps a medida',
    text: 'Aplicaciones móviles iOS/Android conectadas a tu operación.',
  },
  {
    icon: Bot,
    title: 'Automatización e IA',
    text: 'Chatbots, flujos de WhatsApp y agentes con IA para atender 24/7.',
  },
  {
    icon: LineChart,
    title: 'Datos y analytics',
    text: 'Dashboards claros para tomar decisiones con números reales.',
  },
];

export default function ValueSection({ onRegisterClick }) {
  return (
    <section id="valor" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Nuestra filosofía
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Crecer juntos es más fácil
            </h2>
            <p className="mt-5 text-lg text-brand-700">
              Piensa en Gamarra, en el boulevard de restaurantes o en el hub
              tecnológico de tu ciudad. Cuando los negocios se agrupan, no
              compiten: se potencian. OpenLinks es ese clúster comercial, pero
              digital.
            </p>
            <p className="mt-4 text-brand-600">
              Una comunidad de empresas verificadas que comparten audiencia,
              reputación y oportunidades. Tu visibilidad depende de la red, y
              la red se hace más fuerte con cada negocio que se suma.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500 text-white">
                <Gift className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-accent-700">
                  El registro es 100% gratuito. Siempre.
                </p>
                <p className="mt-0.5 text-sm text-accent-700/80">
                  No cobramos comisiones por contactos, ni mensualidades, ni
                  "planes premium". Crecer con la comunidad no debería costar.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onRegisterClick} className="btn-primary">
                Sumar mi negocio gratis
              </button>
              <a href="#negocios" className="btn-secondary">
                Explorar la comunidad
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-brand-100 bg-brand-50/40 p-6 transition hover:border-brand-200 hover:bg-white hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-800 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-brand-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-900 to-brand-800 p-8 text-white sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                Más que un directorio
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                También construimos la tecnología que tu negocio necesita
              </h3>
              <p className="mt-4 text-brand-100">
                Si quieres ir más allá del perfil en OpenLinks, nuestro equipo
                te acompaña con soluciones digitales a medida: desde tu página
                web hasta agentes de IA que atienden a tus clientes por ti.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-400 hover:text-accent-300"
              >
                Conoce nuestros servicios
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-accent-400/40 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/15 text-accent-400 ring-1 ring-accent-400/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-bold">{title}</h4>
                  <p className="mt-1.5 text-sm text-brand-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
