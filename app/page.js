// components/MainMenu.js

"use client"

import Link from 'next/link';
import {
  FiHome,
  FiFileText,
  FiDollarSign,
  FiRepeat,
  FiUsers,
  FiActivity
} from 'react-icons/fi';

const MainMenu = () => {
  return (
    <div className="font-righteous-regular flex flex-col items-center justify-center h-screen bg-[#fffff6]">
      <h1 className="text-4xl font-bold mb-10 text-[#A52A2A] righteous-regular">Dashboard</h1>
      <div className="space-y-4">
        <Link href="/contracts">
          <button className="group flex flex-col items-center justify-center w-full sm:w-96 px-10 py-5 mt-4 bg-[#930000] rounded-full shadow-lg text-white hover:bg-[#A52A2A] hover:shadow-2xl transition duration-300 ease-in-out font-bold text-lg">
            <FiFileText className="text-4xl group-hover:text-white mb-2" />
            Contracts and Negotiation
          </button>

        </Link>
        <Link href="/finances">
          <button className="group flex flex-col items-center justify-center w-full sm:w-96 px-10 py-5 mt-4 bg-[#930000] rounded-full shadow-lg text-white hover:bg-[#A52A2A] hover:shadow-2xl transition duration-300 ease-in-out font-bold text-lg">
            <FiDollarSign className="text-xl group-hover:text-white mb-2" />
            Athlete Finances
          </button>
        </Link>
        <Link href="/transfers">
          <button className="group flex flex-col items-center justify-center w-full sm:w-96 px-10 py-5 mt-4 bg-[#930000] rounded-full shadow-lg text-white hover:bg-[#A52A2A] hover:shadow-2xl transition duration-300 ease-in-out font-bold text-lg">
            <FiRepeat className="text-xl group-hover:text-white mb-2" />
            Transfers, Club and League
          </button>
        </Link>
        <Link href="/pr-media">
          <button className="group flex flex-col items-center justify-center w-full sm:w-96 px-10 py-5 mt-4 bg-[#930000] rounded-full shadow-lg text-white hover:bg-[#A52A2A] hover:shadow-2xl transition duration-300 ease-in-out font-bold text-lg">
            <FiUsers className="text-xl group-hover:text-white mb-2" />
            Public Relations and Media
          </button>
        </Link>
        <Link href="/fit-heal">
          <button className="group flex flex-col items-center justify-center w-full sm:w-96 px-10 py-5 mt-4 bg-[#930000] rounded-full shadow-lg text-white hover:bg-[#A52A2A] hover:shadow-2xl transition duration-300 ease-in-out font-bold text-lg">
            <FiActivity className="text-xl group-hover:text-white mb-2" />
            Fitness and Injuries
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
