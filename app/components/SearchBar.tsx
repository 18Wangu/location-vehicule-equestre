// app/components/SearchBar.tsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex items-center justify-center mb-20 bg-gray-100">
      <div className="flex items-center gap-4 bg-white rounded-full shadow-md px-6 py-3">
        {/* Destination */}
        <div className="flex flex-col">
          <label className="text-[#342E27] text-sm">Véhicule</label>
          <select className="outline-none text-sm text-[#CDA274]">
            <option value="van1">Van 1</option>
            <option value="van2">Van 2</option>
            <option value="van3">Van 3</option>
          </select>
        </div>

        {/* Arrivée */}
        <div className="flex flex-col">
          <label className="text-[#342E27] text-sm">Début</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Quand ?"
            className="outline-none text-sm text-[#CDA274] placeholder-gray-500"
          />
        </div>

        {/* Départ */}
        <div className="flex flex-col">
          <label className="text-[#342E27] text-sm">Fin</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Quand ?"
            className="outline-none text-sm text-[#CDA274] placeholder-gray-500"
          />
        </div>

        {/* Bouton de recherche */}
        <Link href="/pages/reserver">
            <button className="w-10 h-10 flex items-center justify-center bg-[#342E27] rounded-full text-[#CDA274]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
                />
            </svg>
            </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;

/*
Faire en sorte que lorsque l'on clique sur van 1 ca affiche que le van 1 dans les cards
Egalement que apres avoir choisi les dates ca modifie les dates dans la card (ne pas les afficher quand date par encore renseigne)
 */