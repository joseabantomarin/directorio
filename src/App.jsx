import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedBusinesses from './components/FeaturedBusinesses.jsx';
import ValueSection from './components/ValueSection.jsx';
import RegisterModal from './components/RegisterModal.jsx';
import Footer from './components/Footer.jsx';
import { businesses, categories, districts } from './data.js';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDistrict, setSearchDistrict] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [registerOpen, setRegisterOpen] = useState(false);

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return businesses.filter((b) => {
      const matchesTerm =
        !term ||
        b.name.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term) ||
        b.description.toLowerCase().includes(term);
      const matchesDistrict = !searchDistrict || b.district === searchDistrict;
      const matchesCategory =
        activeCategory === 'Todos' || b.category === activeCategory;
      return matchesTerm && matchesDistrict && matchesCategory;
    });
  }, [searchTerm, searchDistrict, activeCategory]);

  const scrollToResults = () => {
    const el = document.getElementById('negocios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        onRegisterClick={() => setRegisterOpen(true)}
        onQuickSearch={(q) => {
          setSearchTerm(q);
          scrollToResults();
        }}
      />

      <main className="flex-1">
        <Hero
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchDistrict={searchDistrict}
          setSearchDistrict={setSearchDistrict}
          districts={districts}
          onSubmit={scrollToResults}
        />

        <FeaturedBusinesses
          businesses={filtered}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          totalCount={businesses.length}
        />

        <ValueSection onRegisterClick={() => setRegisterOpen(true)} />
      </main>

      <Footer />

      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        categories={categories}
      />
    </div>
  );
}
