import '../styles/Cars.css';

const BRAND_PILLS = [
  { id: 'ALL', label: 'All Fleet' },
  { id: 'Lamborghini', label: 'Lamborghini' },
  { id: 'Mercedes-AMG', label: 'Mercedes-AMG' },
  { id: 'BMW', label: 'BMW M' },
  { id: 'Audi', label: 'Audi RS' },
  { id: 'Porsche', label: 'Porsche GT' },
  { id: 'Range Rover', label: 'Range Rover' },
  { id: 'Ferrari', label: 'Ferrari' },
  { id: 'Mercedes-Maybach', label: 'Maybach VIP' },
];

function FilterBar({ activeBrand, onSelectBrand }) {
  return (
    <div className="filter-pills-container">
      {BRAND_PILLS.map((pill) => (
        <button
          key={pill.id}
          type="button"
          onClick={() => onSelectBrand(pill.id)}
          className={`filter-pill ${activeBrand === pill.id ? 'active' : ''}`}
        >
          {pill.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
