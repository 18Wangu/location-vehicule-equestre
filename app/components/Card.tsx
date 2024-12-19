// components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  startDate: string;
  endDate: string;
}

const Card: React.FC<CardProps> = ({ image, title, location, price, startDate, endDate }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt="Property" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#342E27]">{title}</h2>
        <p className="text-gray-500">{location}</p>
        <div className="mt-4">
          <span className="text-lg font-bold text-[#CDA274]">{price} €</span> <span className="text-sm text-gray-500">par jour</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <span>{startDate} - {endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

/*
Faire en sorte que apres avoir choisi les dates ca modifie les dates dans la card 
(ne pas les afficher quand date par encore renseigne)

Si on clique sur une card, on est redirigé vers la page de ce van avec plus de details sur le van
*/