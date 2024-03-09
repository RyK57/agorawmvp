// pages/FormDataDisplay.js

"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import jsPDF from 'jspdf';



const ContractPrint = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState(null);
  const [editableContractText, setEditableContractText] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        setSearchParams(params);
    }
}, []);


useEffect(() => {
  const contractText = createContract(
    searchParams?.get('playerName') ?? '',
    searchParams?.get('clubFrom') ?? '',
    searchParams?.get('clubTo') ?? '',
    searchParams?.get('signingAmount') ?? '',
    searchParams?.get('termLength') ?? '',
    searchParams?.get('annualSalary') ?? '',
    searchParams?.get('effectiveDate') ?? '',
    searchParams?.get('expiryDate') ?? '',
    searchParams?.get('playerPosition') ?? '',
    searchParams?.get('squadRole') ?? ''
  );
  setEditableContractText(contractText);
}, [searchParams]);



  function createContract(name, prev, go, sign, len, sal, eff, exp, pos, squa ) {
    return `Contract Agreement

    Between: ${go} ("The Club")
    And: ${name} ("The Player")
  
    Player Position: ${pos}
    Squad Role: ${squa}
  
    Former Club: ${prev}
  
    1. Agreement and Term
    This agreement is effective from ${eff} and will remain in effect until ${exp}, the term length being ${len} year(s)
    
    2. Position and Duties
       The Player agrees to play in the position(s) as directed by the Club's management...
  
    3. Compensation
      a. Signing Amount: ${sign} GBP
      b. Salary: ${sal} GBP per annum...
  
    Signatures:
  
    ${go} Representative: ________________________
    Date: ______________
  
    Player: ${name} ________________________
    Date: ______________


    `;
}

// const contractText = createContract(playerName, clubFrom, clubTo, signingAmount, termLength, annualSalary, effectiveDate, expiryDate, playerPosition, squadRole);

const handleDownloadPdf = () => {
  const pdf = new jsPDF();
  pdf.setFontSize(10);
  pdf.text(editableContractText, 10, 10);
  pdf.save('contract.pdf');
};


return (
  <div className="flex flex-col items-center justify-start min-h-screen py-10 bg-[#fffff6]">
    <h1 className="text-[#660000] font-bold text-4xl mb-8">Contract Details</h1>
    <div className="overflow-auto p-4 max-h-[calc(100vh-200px)] w-full max-w-2xl bg-white rounded-lg shadow text-black">
      {/* Inbuilt Text Editor */}
      <TextareaAutosize
        className="w-full p-2"
        value={editableContractText}
        onChange={(e) => setEditableContractText(e.target.value)}
      />
    </div>
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownloadPdf}
    >
      Download PDF
    </button>
  </div>
);
};


export default ContractPrint;
