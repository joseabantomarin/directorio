import { Star, MapPin, BadgeCheck, ArrowUpRight } from 'lucide-react';

function Stars({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Calificación ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && hasHalf);
        return (
          <Star
            key={i}
            className={`h-4 w-4 ${filled ? 'fill-amber-400 text-amber-400' : 'text-brand-200'}`}
          />
        );
      })}
      <span className="ml-1 text-xs font-semibold text-brand-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function BusinessCard({ business }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-cardHover">
      <div className="relative h-44 w-full overflow-hidden bg-brand-100">
        <img
          src={business.image}
          alt={business.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 badge bg-white/95 text-brand-800 ring-white/70">
          {business.category}
        </span>
        {business.verified && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow">
            <BadgeCheck className="h-3.5 w-3.5" /> Verificado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-bold text-brand-900">
            {business.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-brand-600">
            {business.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Stars rating={business.rating} />
          <span className="text-xs text-brand-500">
            {business.reviews} reseñas
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-brand-600">
          <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
          <span className="truncate">
            {business.district} · {business.address}
          </span>
        </div>

        <button
          type="button"
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-800 transition hover:border-accent-500 hover:bg-accent-50 hover:text-accent-700"
        >
          Ver perfil
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}
