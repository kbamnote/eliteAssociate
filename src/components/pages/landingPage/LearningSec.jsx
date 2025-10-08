import React, { useState } from 'react';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';

const LearningSec = () => {
  const [activeCategory, setActiveCategory] = useState('Finance');
  const [activeProgram, setActiveProgram] = useState('Job Assured Programs');

  const categories = ['Finance', 'Analytics', 'Marketing', 'Technology', 'General Management', 'Operations'];
  const programTypes = ['Job Assured Programs', 'Certification Programs', 'Executive Programs', 'Senior Leadership Programs'];

  const programs = {
    'Finance': {
      'Job Assured Programs': [
        {
          duration: '4 or 8 Months | Classroom or Online Training',
          title: 'Postgraduate Financial Analysis Program',
          features: [
            '100% Job Assurance',
            '18 LPA Highest Salary'
          ],
          badge: '4500+ Career Transitions',
          companies: [
            { name: 'Bank of America', logo: 'https://logo.clearbit.com/bankofamerica.com' },
            { name: 'BNP Paribas', logo: 'https://logo.clearbit.com/bnpparibas.com' },
            { name: 'Capgemini', logo: 'https://logo.clearbit.com/capgemini.com' }
          ],
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
        },
        {
          duration: '3 Months | Classroom Training',
          title: 'Postgraduate Program in Banking and Finance',
          features: [
            '100% Job Assurance',
            '10000+ Learners Impacted'
          ],
          badge: '85% Placement Record',
          companies: [
            { name: 'Genpact', logo: 'https://logo.clearbit.com/genpact.com' },
            { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
            { name: 'Kotak', logo: 'https://logo.clearbit.com/kotak.com' }
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
        },
        {
          duration: '3 or 6 Months | Classroom or Live Online Training',
          title: 'Certified Investment Banking Operations Professional',
          features: [
            '100% Job Assurance',
            '1200+ Batches Completed'
          ],
          badge: '36000+ Placements',
          companies: [
            { name: 'JP Morgan', logo: 'https://logo.clearbit.com/jpmorgan.com' },
            { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com' },
            { name: 'Nomura', logo: 'https://logo.clearbit.com/nomura.com' }
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
        }
      ],
      'Executive Programs': [
        {
          institute: 'INDIAN INSTITUTE OF MANAGEMENT CALCUTTA',
          duration: '4 Months | Live Online Training & Campus Immersion',
          title: 'IIM Calcutta Private Equity & Venture Capital Programme',
          features: [
            'Personalised professional coaching',
            'Premiere mentorship from top industry veterans',
            'IIM Calcutta Executive Education Alumni status'
          ],
          badge: "India's 1st 'Triple Accredited' Management School",
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop'
        },
        {
          institute: 'KPMG',
          duration: '4 Months | Live Online Training',
          title: 'KPMG Financial Analysis Prodegree',
          features: [
            'FAP Certification, co-branded with KPMG',
            'Masterclasses by KPMG in India',
            'Extensive Career Support'
          ],
          badge: '45,000+ Career Transitions',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop'
        },
        {
          institute: 'INDIAN INSTITUTE OF MANAGEMENT LUCKNOW',
          duration: '11 Months | Live Online Training & Campus Immersion',
          title: 'IIM Lucknow Executive Programme in Corporate and Investment Banking',
          features: [
            'IIM Lucknow Executive Alumni Status',
            'Dedicated Game-based Simulations',
            'Campus Immersion at IIM Lucknow'
          ],
          badge: '#4 by India FT 2023',
          image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=400&fit=crop'
        }
      ]
    },
    'Analytics': {
      'Job Assured Programs': [
        {
          duration: '6 Months Weekdays | 10 Months Weekends | Classroom/Live Online',
          title: 'Postgraduate Program in Data Science and Analytics with GenAI',
          features: [
            '10 Guaranteed Interviews',
            '35+ Tools & Projects'
          ],
          badge: '22.5 LPA Highest Salary',
          companies: [
            { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
            { name: 'EY', logo: 'https://logo.clearbit.com/ey.com' },
            { name: 'PwC', logo: 'https://logo.clearbit.com/pwc.com' }
          ],
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
        }
      ]
    },
    'Marketing': {
      'Job Assured Programs': [
        {
          duration: '18 Weeks | Classroom & Online Training',
          title: 'MyCaptain Digital Marketing Program',
          features: [
            '100% Job Assurance',
            '1000+ Hiring Partners'
          ],
          badge: '12 LPA Highest Salary',
          companies: [
            { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com' },
            { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
            { name: 'OLA', logo: 'https://logo.clearbit.com/olacabs.com' }
          ],
          image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=400&fit=crop'
        }
      ]
    }
  };

  const currentPrograms = programs[activeCategory]?.[activeProgram] || [];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn using a <span className="text-teal-600">curriculum built by industry</span>
          </h2>
          <p className="text-lg text-gray-600">
            Designed to meet market demands and propel your career success
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max justify-center pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'text-teal-700 border-b-4 border-teal-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Program Type Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-4 justify-center flex-wrap">
            {programTypes.map((program) => (
              <button
                key={program}
                onClick={() => setActiveProgram(program)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeProgram === program
                    ? 'bg-teal-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {program}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <ResponsiveImage
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  quality={85}
                />
                {program.institute && (
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md max-w-xs">
                    <div className="text-xs font-bold text-gray-800">{program.institute}</div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-medium text-gray-800">
                  {program.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-16">
                  {program.title}
                </h3>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Badge */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 mb-6">
                  <p className="text-sm font-semibold text-teal-800 text-center">
                    {program.badge}
                  </p>
                </div>

                {/* Company Logos */}
                {program.companies && (
                  <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                    {program.companies.map((company, idx) => (
                      <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="text-xs font-bold text-gray-700">{company.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-800 text-teal-800 rounded-full font-semibold hover:bg-teal-50 transition-all">
                    <span>Brochure</span>
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-teal-800 text-white rounded-full font-semibold hover:bg-teal-900 transition-all">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If no programs available */}
        {currentPrograms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Programs coming soon for {activeCategory} - {activeProgram}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningSec;