"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import linkdin from '../asset/logo.svg';
import { FaFilter } from 'react-icons/fa';
import FilterDrawer from './FilterDrawer';
import { FiltersState } from '@/types/postTypes';

interface LinkdinHeaderProps {
  onApply: (filters: FiltersState) => void;
}

const LinkdinHeader: React.FC<LinkdinHeaderProps> = ({ onApply }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleApplyFilters = (newFilters: FiltersState) => {
    onApply(newFilters); // Pass to parent (Home)
    setIsFilterOpen(false);
  };
  return (
    <>
      <div className="bg-background max-w-5xl mx-auto p-2 px-4 rounded-2xl w-full flex items-center justify-between border-b border-gray-300">

        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md text-white flex items-center justify-center font-bold">
            <Image src={linkdin} alt='Linkdin' width={50} height={50} />
          </div>
          <span className="font-bold text-blue-500 text-3lg">Linked In</span>
        </div>

        {/* Center: Title */}
        <div className="text-center text-xl hidden md:block font-semibold text-gray-700 ">
          LinkedIn Post Viewer
        </div>

        {/* Right: Filter Icon */}
        <div className="cursor-pointer" onClick={() => setIsFilterOpen(true)}>
          <div className='h-8 w-8 rounded-full flex justify-center items-center shadow-sm text-black'>
            <FaFilter />
          </div>
        </div>
      </div>
      {/* Filter Drawer */}
       <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />
    </>
  );
};

export default LinkdinHeader;
