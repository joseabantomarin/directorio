import { SlidersHorizontal, Search } from 'lucide-react';
import BusinessCard from './BusinessCard.jsx';

export default function FeaturedBusinesses({
  businesses,
  categories,
  activeCategory,
  setActiveCategory,
  totalCount,
}) {
  const hasResults = businesses.length > 0;

  return (
    <section id="negocios" className="bg-brand-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Negocios destacados
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Los {totalCount}+ negocios de la comunidad
            </h2>
            <p className="mt-2 max-w-xl text-brand-600">
              Empresas verificadas listas para atenderte. Filtra por rubro o usa
              el buscador para encontrar exactamente lo que necesitas.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            {businesses.length} resultado{businesses.length === 1 ? '' : 's'}
          </div>
        </div>

        <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:overflow-visible sm:px-0">
          <CategoryChip
            label="Todos"
            active={activeCategory === 'Todos'}
            onClick={() => setActiveCategory('Todos')}
          />
          {categories.map((c) => (
            <CategoryChip
              key={c}
              label={c}
              active={activeCategory === c}
              onClick={() => setActiveCategory(c)}
            />
          ))}
        </div>

        {hasResults ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {businesses.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-brand-200 bg-white p-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Search className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-900">
              No encontramos negocios con esos filtros
            </h3>
            <p className="mt-1 max-w-md text-sm text-brand-600">
              Prueba cambiar el rubro, el distrito, o amplía tu búsqueda. Si
              eres dueño de un negocio, puedes registrarlo gratis.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function CategoryChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
        active
          ? 'bg-brand-800 text-white shadow'
          : 'border border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50'
      }`}
    >
      {label}
    </button>
  );
}
