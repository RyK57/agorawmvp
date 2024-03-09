// components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="flex flex-col items-start justify-between h-screen p-5 bg-[#660000] text-white w-80 font-righteous-regular">
            {/* Logo at the top */}
            <div className="mb-10 w-full">
                <Image src="/logo.png" alt="Logo" width={100} height={100} layout="responsive" />
                <div> <h1 className="flex flex-col items-center justify-center text-2xl font-bold mb-5">AGORAW (MVP)</h1> </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col w-full">
                <Link href="/">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">Dashboard</button>
                </Link>
                <Link href="/contracts">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">Contracts and Legal</button>
                </Link>
                <Link href="/finances">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">Financial Management</button>
                </Link>
                <Link href="/fit-heal">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">Fitness, Health, and Injuries</button>
                </Link>
                <Link href="/pr-media">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">PR and Media</button>
                </Link>
                <Link href="/transfers">
                    <button className="text-left py-3 px-4 w-full hover:bg-[#993333] transition duration-300 ease-in-out font-bold rounded-lg">Transfers Market</button>
                </Link>
                {/* Add other links as needed */}
            </nav>

            {/* Optional: Footer or additional content at the bottom of the sidebar */}
            <div className="mt-10 w-full">
                {/* Footer content here */}
            </div>
        </div>
    );
};

export default Sidebar;
