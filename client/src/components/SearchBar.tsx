import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { geocode } from '../services/api';

interface SearchBarProps {
  onSelectLocation: (lat: number, lon: number, name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectLocation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const locations = await geocode(query);
      setResults(locations);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <Search size={20} />
        </button>
      </form>
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((loc) => (
            <li
              key={loc.id}
              onClick={() => {
                onSelectLocation(loc.latitude, loc.longitude, loc.name);
                setResults([]);
                setQuery(loc.name);
              }}
              className="result-item"
            >
              {loc.name}, {loc.admin1}, {loc.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
