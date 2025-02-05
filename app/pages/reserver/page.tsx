// app/pages/reserver/page.tsx
"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reserver: React.FC = () => {
    const [vehicle, setVehicle] = useState<string>('van1');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className="flex flex-col h-screen items-center justify-center mb-20 bg-gray-100 p-6 shadow-md">
            <h1 className="text-2xl mb-4 text-[#342E27]">Formulaire de Réservation</h1>
            <div className="flex flex-col gap-4 bg-white rounded-[25px] shadow-md p-6 w-full max-w-md">
                {/* Véhicule */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Véhicule</label>
                    <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="outline-none text-sm text-[#CDA274]">
                        <option value="van1">Van 1</option>
                        <option value="van2">Van 2</option>
                        <option value="van3">Van 3</option>
                    </select>
                </div>

                {/* Nom */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Nom</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="outline-none text-sm text-[#CDA274] border-b" placeholder="Votre nom" />
                </div>

                {/* Prénom */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Prénom</label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="outline-none text-sm text-[#CDA274] border-b" placeholder="Votre prénom" />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none text-sm text-[#CDA274] border-b" placeholder="Votre email" />
                </div>

                {/* Téléphone */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Téléphone</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="outline-none text-sm text-[#CDA274] border-b" placeholder="Votre téléphone" />
                </div>

                {/* Date de début */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Date de debut</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Quand ?"
                        className="outline-none text-sm text-[#CDA274] placeholder-gray-500 border-b"
                    />
                </div>

                {/* Date de fin */}
                <div className="flex flex-col">
                    <label className="text-[#342E27] text-sm">Date de fin</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="Quand ?"
                        className="outline-none text-sm text-[#CDA274] placeholder-gray-500 border-b"
                    />
                </div>

                {/* Plus tard mettre redirection vers stripe et passer en searchParams le prix */}
                <button className="mt-4 w-full h-10 bg-[#342E27] rounded-full text-white">
                    Réserver
                </button>
            </div>
        </div>
    );
};

export default Reserver;
