import React, { useState } from 'react';

const CompaniesSec = () => {
  const [activeTab, setActiveTab] = useState('retail');

  const retailBanks = [
    { name: 'SBI', logo: '🏦' },
    { name: 'Citi', logo: '🏛️' },
    { name: 'HDFC Bank', logo: '🏦' },
    { name: 'ICICI Bank', logo: '🏦' },
    { name: 'Kotak', logo: '🏦' },
    { name: 'HSBC', logo: '🏛️' },
    { name: 'Standard Chartered', logo: '🏦' },
    { name: 'IndusInd Bank', logo: '🏦' },
    { name: 'Yes Bank', logo: '🏦' },
    { name: 'RBL Bank', logo: '🏦' },
    { name: 'Motilal Oswal', logo: '💼' },
    { name: 'Religare', logo: '💼' },
    { name: 'Genpact', logo: '⚙️' },
    { name: 'EY', logo: '📊' },
    { name: 'Morgan Stanley', logo: '🏛️' },
    { name: 'Goldman Sachs', logo: '🏛️' }
  ];

  const investmentBanks = [
    { name: 'Goldman Sachs', logo: '🏛️' },
    { name: 'PayU', logo: '💳' },
    { name: 'JP Morgan', logo: '🏛️' },
    { name: 'Deloitte', logo: '📊' },
    { name: 'PwC', logo: '📊' },
    { name: 'EY', logo: '📊' },
    { name: 'Edelweiss', logo: '💼' },
    { name: 'Religare', logo: '💼' },
    { name: 'Cisco', logo: '💻' },
    { name: 'Morgan Stanley', logo: '🏛️' },
    { name: 'BNP Paribas', logo: '🏦' },
    { name: 'Barclays', logo: '🏦' },
    { name: 'Société Générale', logo: '🏦' },
    { name: 'KPMG', logo: '📊' },
    { name: 'BNY Mellon', logo: '🏦' },
    { name: 'Standard Chartered', logo: '🏦' },
    { name: 'State Street', logo: '🏦' },
    { name: 'Birla Sun Life', logo: '☀️' },
    { name: 'MSCI', logo: '📈' },
    { name: 'Nomura', logo: '🏛️' }
  ];

  const techCompanies = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '💻' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Meta', logo: '👥' },
    { name: 'Apple', logo: '🍎' },
    { name: 'IBM', logo: '💻' },
    { name: 'Oracle', logo: '🗄️' },
    { name: 'SAP', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Adobe', logo: '🎨' },
    { name: 'Cisco', logo: '💻' },
    { name: 'Intel', logo: '⚡' },
    { name: 'Accenture', logo: '⚙️' },
    { name: 'TCS', logo: '💼' },
    { name: 'Infosys', logo: '💼' },
    { name: 'Wipro', logo: '💼' }
  ];

  const getCompanies = () => {
    switch (activeTab) {
      case 'investment':
        return investmentBanks;
      case 'retail':
        return retailBanks;
      case 'tech':
        return techCompanies;
      default:
        return retailBanks;
    }
  };

  const companies = getCompanies();
  const midPoint = Math.ceil(companies.length / 2);
  const row1 = companies.slice(0, midPoint);
  const row2 = companies.slice(midPoint);

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            We place you with{' '}
            <span className="text-emerald-600 relative inline-block">
              industry leaders
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600 rounded"></div>
            </span>{' '}
            in every field
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-6">
            3500+ leading companies hire our learners
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <button
            onClick={() => setActiveTab('investment')}
            className={`px-6 py-3 text-base md:text-lg font-semibold transition-all duration-300 border-b-4 ${
              activeTab === 'investment'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Investment Banking
          </button>
          <button
            onClick={() => setActiveTab('retail')}
            className={`px-6 py-3 text-base md:text-lg font-semibold transition-all duration-300 border-b-4 ${
              activeTab === 'retail'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Retail Banking
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-6 py-3 text-base md:text-lg font-semibold transition-all duration-300 border-b-4 ${
              activeTab === 'tech'
                ? 'text-teal-700 border-teal-700'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Analytics & Technology
          </button>
        </div>

        {/* Company Logos - Marquee */}
        <div className="space-y-6">
          {/* First Row - Left to Right */}
          <div className="relative">
            <marquee behavior="scroll" direction="left" scrollamount="5">
              <div className="flex gap-6 items-center">
                {[...row1, ...row1].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-w-[200px] h-32 flex flex-col items-center justify-center border border-gray-100 hover:scale-105 hover:border-emerald-200"
                  >
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <span className="text-sm font-semibold text-gray-700 text-center">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </marquee>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <marquee behavior="scroll" direction="right" scrollamount="5">
              <div className="flex gap-6 items-center">
                {[...row2, ...row2].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-w-[200px] h-32 flex flex-col items-center justify-center border border-gray-100 hover:scale-105 hover:border-emerald-200"
                  >
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <span className="text-sm font-semibold text-gray-700 text-center">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </marquee>
          </div>

          {/* Third Row - Left to Right */}
          <div className="relative">
            <marquee behavior="scroll" direction="left" scrollamount="4">
              <div className="flex gap-6 items-center">
                {[...row1, ...row1].map((company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-w-[200px] h-32 flex flex-col items-center justify-center border border-gray-100 hover:scale-105 hover:border-emerald-200"
                  >
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <span className="text-sm font-semibold text-gray-700 text-center">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSec;