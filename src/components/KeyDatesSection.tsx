import React from 'react';
import { Calendar, Clock, FileText, UserCheck } from 'lucide-react';
import { useConference } from '../contexts/ConferenceContext';

const KeyDatesSection: React.FC = () => {
  const { data, loading, error } = useConference();

  if (loading) return <div>Loading key dates...</div>;
  if (error) return <div>Error loading key dates: {error}</div>;

  const importantDates = data?.importantDates || [];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-32 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-indigo-600" />
          </div> */}
          <h2
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Key Dates
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mark your calendar for the most important dates of ICHIS 2026
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">

          {/* Important Dates */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Important Dates</h3>
            </div>

            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
                  <div>
                    <p className="font-semibold text-gray-800">{item.dateType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyDatesSection;