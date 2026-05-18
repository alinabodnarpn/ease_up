import { useState, useMemo } from 'react';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import VolunteerCard from '../../components/explore/VolunteerCard';
import useFetch from '../../hooks/useFetch';
import { getVolunteers } from '../../services/exploreApi';

const FILTERS = [
  { label: 'Всі волонтери', value: 'all' },
  { label: 'Рейтинг 5.0', value: '5' },
  { label: 'Від 4.5', value: '4.5' },
  { label: 'Від 4.0', value: '4' },
];

export default function VolunteersPage() {
  const { data: volunteers, loading, error } = useFetch(getVolunteers, []);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (!volunteers) return [];
    if (activeFilter === 'all') return volunteers;
    return volunteers.filter((v) => v.rating >= Number(activeFilter));
  }, [volunteers, activeFilter]);

  return (
    <main className="main-content">
      <InnerPageHeader title="Волонтери" onFilterClick={() => setFilterOpen(true)} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="volunteers-grid">
        {filtered.map((volunteer) => (
          <VolunteerCard key={volunteer.id} {...volunteer} />
        ))}
      </section>

      {filterOpen && (
        <div className="filter-sheet-overlay" onClick={() => setFilterOpen(false)}>
          <div className="filter-sheet" onClick={(e) => e.stopPropagation()}>
            <h3 className="filter-sheet__title">Фільтр</h3>
            <div className="filter-sheet__options">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className={`filter-sheet__option ${activeFilter === f.value ? 'filter-sheet__option--active' : ''}`}
                  onClick={() => {
                    setActiveFilter(f.value);
                    setFilterOpen(false);
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}