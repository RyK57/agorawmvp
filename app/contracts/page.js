"use client"

// pages/contracts-legal.js
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' for Next.js 13
import Link from 'next/link';

const ContractsLegal = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    clubFrom: '',
    clubTo: '',
    signingAmount: '',
    termLength: '1',
    annualSalary: '',
    effectiveDate: '',
    expiryDate: '',
    playerPosition: '',
    squadRole: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Prepare data for passing
  const queryData = new URLSearchParams(formData).toString();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-10 bg-[#fffff6]">
      <h1 className="text-[#660000] font-bold text-4xl mb-8">Contracts and Legal</h1>
      <div className="overflow-auto p-4 max-h-[calc(100vh-200px)] w-full max-w-2xl bg-white rounded-lg shadow">
        <form className="w-full max-w-lg text-black">
          {/* Repeated form field structure for the rest of the fields */}
          {[
            { label: "Player Name", name: "playerFrom", type: "text" },
            { label: "Club From", name: "clubFrom", type: "text" },
            { label: "Club To", name: "clubTo", type: "text" },
            { label: "Signing Amount(GBP)", name: "signingAmount", type: "number" },
            { label: "Term Length (years)", name: "termLength", type: "number", min: 1, max: 10, step: 1 },
            { label: "Annual Salary(GBP)", name: "annualSalary", type: "number" },
            { label: "Effective Date", name: "effectiveDate", type: "date" },
            { label: "Expiry Date", name: "expiryDate", type: "date" },
          ].map(({ label, name, type, min, max, step }) => (
            <div className="mb-6" key={name}>
              <label htmlFor={name} className="block mb-2 text-sm font-medium text-[#660000]">{label}:</label>
              <input type={type} id={name} name={name} value={formData[name]} onChange={handleInputChange} className="bg-white border border-[#660000] text-sm rounded-lg focus:ring-[#660000] focus:border-[#660000] block w-full p-2.5" {...{ min, max, step }} />
            </div>
          ))}
          <div className="mb-6">
            <label htmlFor="playerPosition" className="block mb-2 text-sm font-medium text-[#660000]">Player Position:</label>
            <select id="playerPosition" name="playerPosition" value={formData.playerPosition} onChange={handleInputChange} className="bg-white border border-[#660000] text-sm rounded-lg focus:ring-[#660000] focus:border-[#660000] block w-full p-2.5">
              {/* Options */}
              <option value="">Select Position</option>
              {["CB", "RB", "LB", "CDM", "CAM", "RM", "LM", "RW", "LW", "CF", "ST", "GK"].map((position) => (
                <option value={position} key={position}>{position}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="squadRole" className="block mb-2 text-sm font-medium text-[#660000] text-black">Player Squad Role:</label>
            <select id="squadRole" name="squadRole" value={formData.squadRole} onChange={handleInputChange} className="bg-white border border-[#660000] text-sm rounded-lg focus:ring-[#660000] focus:border-[#660000] block w-full p-2.5">
              {/* Options */}
              <option value="">Select Squad Role</option>
              {["Crucial", "Important", "Prospect", "Sporadic", "Rotation"].map((role) => (
                <option value={role} key={role}>{role}</option>
              ))}
            </select>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between">
            <Link href={{ pathname: '/contprint', query: formData }}>
              <button className="text-white bg-[#660000] hover:bg-[#993333] focus:ring-4 focus:outline-none focus:ring-[#993333] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                Print Contract
              </button>
            </Link>
            <Link href="/contnego">
              <button type="button" className="text-white bg-[#660000] hover:bg-[#993333] focus:ring-4 focus:outline-none focus:ring-[#993333] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                Negotiate
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractsLegal;