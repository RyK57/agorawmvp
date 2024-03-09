"use client"

import React from 'react';

const Transfers = () => {
    // Fake data for transfers - replace with real data from your API/backend
    const transferData = [
        {
            id: 1,
            player: 'Jude Bellingham',
            age: 20,
            marketValue: '€120m',
            nationality: '🇬🇧',
            joined: 'Real Madrid',
            fee: '€103m'
        },
        {
            id: 2,
            player: 'Declan Rice',
            age: 24,
            marketValue: '€90m',
            nationality: '🇬🇧',
            joined: 'Arsenal',
            fee: '€116.6m'
        },
        {
            id: 3,
            player: 'Moisés Caicedo',
            age: 21,
            marketValue: '€75m',
            nationality: '🇪🇨',
            joined: 'Chelsea',
            fee: '€116m'
        },
        // ... more players
    ];


    return (
        <div className="bg-[#FFFFF6] min-h-screen p-8">
            <h1 className="text-2xl font-bold text-[#660000] mb-6">European Football Transfers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Transfer Filters */}
                <div className="lg:col-span-2 flex flex-wrap gap-4 items-center mb-8">
                    {/* Repeated structure for each filter dropdown */}
                    {['Season', 'Transfer Window', 'Citizenship', 'Position', 'Age Group'].map(filter => (
                        <select key={filter} className="bg-white border border-[#660000] text-[#660000] rounded p-2">
                            <option value="">{filter}</option>
                            {/* Dynamically generate options */}
                        </select>
                    ))}
                    <button className="bg-[#660000] text-white p-2 rounded transition duration-300 ease-in-out hover:bg-[#7a1f1f]">
                        Display Selection
                    </button>
                </div>


                {/* Transfers Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">Player</th>
                                <th scope="col" className="py-3 px-6">Age</th>
                                <th scope="col" className="py-3 px-6">Market value</th>
                                <th scope="col" className="py-3 px-6">Nat.</th>
                                <th scope="col" className="py-3 px-6">Joined</th>
                                <th scope="col" className="py-3 px-6">Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transferData.map((transfer, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <td className="py-4 px-6">{transfer.player}</td>
                                    <td className="py-4 px-6">{transfer.age}</td>
                                    <td className="py-4 px-6">{transfer.marketValue}</td>
                                    <td className="py-4 px-6">{transfer.nationality}</td>
                                    <td className="py-4 px-6">{transfer.joined}</td>
                                    <td className="py-4 px-6">{transfer.fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Latest Rumours Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">Latest Rumours</h2>
                    <div className="bg-white rounded-lg shadow p-4">
                        <ul>
                            <li className="py-2 border-b">
                                <div className="flex justify-between items-center text-black">
                                    <span>F. Redondo to Manchester United</span>
                                    <span className="text-[#660000]">50%</span>
                                </div>
                            </li>
                            <li className="py-2 border-b">
                                <div className="flex justify-between items-center text-black">
                                    <span>L. Rodriguez to Barcelona</span>
                                    <span className="text-[#660000]">53%</span>
                                </div>
                            </li>
                            {/* More rumours */}
                        </ul>
                    </div>
                </div>


                {/* Latest Transfers Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#660000] mb-4">Latest Transfers</h2>
                    <div className="bg-white rounded-lg shadow p-4">
                        <ul>
                            <li className="py-2 border-b">
                                <div className="flex justify-between items-center text-black">
                                    <span>J. Sancho to PSG</span>
                                    <span className="text-[#660000]">€75m</span>
                                </div>
                            </li>
                            <li className="py-2 border-b">
                                <div className="flex justify-between items-center text-black">
                                    <span>E. Haaland to Real Madrid</span>
                                    <span className="text-[#660000]">€110m</span>
                                </div>
                            </li>
                            {/* More transfers */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transfers;
