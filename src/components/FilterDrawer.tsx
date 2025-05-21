'use client';

import { FiltersState } from '@/types/postTypes';
import React, { useState } from 'react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FiltersState) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose, onApply }) => {
  const [filters, setFilters] = useState<FiltersState>({
    keyword: '',
    contentType: '',
    page: 1,
});

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform duration-300">
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="text-lg text-black font-bold">Filters</h3>
        <button onClick={onClose} className="text-black hover:text-gray-700">✕</button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Keyword</label>
          <input
            type="text"
            className="w-full border text-black  border-gray-300 rounded px-3 py-2 mt-1"
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Author (fromMember)</label>
          <input
            type="text"
            className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
            value={filters.fromMember}
            onChange={(e) => setFilters({ ...filters, fromMember: e.target.value })}
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700">Content Type</label>
          <select
            className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
            value={filters.contentType}
            onChange={(e) => setFilters({ ...filters, contentType: e.target.value })}
          >
            <option value="">All</option>
            <option value="video">Video</option>
            <option value="photos">Photos</option>
            <option value="liveVideos">Live Videos</option>
            <option value="collaborativeArticles">Collaborative Articles</option>
            <option value="documents">Documents</option>
          </select>
        </div>

        <button
          onClick={handleApply}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer transition duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterDrawer;
