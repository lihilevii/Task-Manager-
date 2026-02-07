import React from 'react';
import { FilterType } from '../types';

interface FilterControlProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

export const FilterControl: React.FC<FilterControlProps> = ({ currentFilter, setFilter }) => {
  
  const getButtonClass = (filter: FilterType) => {
    return `filter-btn ${currentFilter === filter ? 'active' : ''}`;
  };

  return (
    <div className="filter-container">
      <button 
        onClick={() => setFilter(FilterType.ALL)} 
        className={getButtonClass(FilterType.ALL)}
      >
        הכל
      </button>
      <button 
        onClick={() => setFilter(FilterType.ACTIVE)} 
        className={getButtonClass(FilterType.ACTIVE)}
      >
        פעיל
      </button>
      <button 
        onClick={() => setFilter(FilterType.COMPLETED)} 
        className={getButtonClass(FilterType.COMPLETED)}
      >
        הושלם
      </button>
    </div>
  );
};