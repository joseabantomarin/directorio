import { Users, TrendingUp, Handshake, MessageCircle } from 'lucide-react';

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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onRegisterClick} className="btn-primary">
                Sumar mi negocio
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
      </div>
    </section>
  );
}
