import { Link2, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
              <Link2 className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold text-white">
              Open<span className="text-accent-400">Links</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-brand-200">
            La red de negocios verificados que conecta a tu empresa con
            clientes listos para comprar, directo por WhatsApp.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Social icon={Instagram} label="Instagram" />
            <Social icon={Facebook} label="Facebook" />
            <Social icon={Linkedin} label="LinkedIn" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Empresas
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Registra tu empresa</a></li>
            <li><a href="#" className="hover:text-white">Planes y beneficios</a></li>
            <li><a href="#" className="hover:text-white">Historias de éxito</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            OpenLinks
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-white">Términos</a></li>
            <li><a href="#" className="hover:text-white">Privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-300">
        © {new Date().getFullYear()} OpenLinks. Hecho con ♥ para la comunidad.
      </div>
    </footer>
  );
}

function Social({ icon: Icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-800"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
