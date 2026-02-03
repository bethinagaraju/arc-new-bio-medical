
import React from "react";
import { MapPin, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useConference } from "../contexts/ConferenceContext";

interface Venue {
  id: number;
  venue: string;
  conferencecode: string;
  description: string;
}

const VenueAndContactSection: React.FC = () => {
  const { data, loading, error } = useConference();

  const venueData = data?.venues[0] || null;
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#047857] mb-4">
            Venue & Contact Information
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Conference venue details and direct communication with the ICBME 2026 organizing committee.
          </p>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading venue information...
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            Error loading venue: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

          {/* Venue Info — wide panel */}
          <div className="lg:col-span-2 bg-[#ECFDF5] border border-[#D1FAE5] p-10 flex flex-col justify-between rounded-xl">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D1FAE5] flex items-center justify-center text-[#047857]">
                  <MapPin size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[#1E293B]">
                  Conference Venue
                </h3>
              </div>

              <p className="text-xl font-medium text-[#1E293B] mb-3">
                {venueData?.venue || "Loading venue..."}
              </p>

              <p className="text-[#64748B] leading-relaxed max-w-xl">
                {venueData?.description || "Loading description..."}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/venue-travel"
                className="inline-flex items-center gap-2 text-[#047857] font-semibold hover:text-[#065F46] transition"
                title="View detailed venue and travel information for ICBME 2026"
                aria-label="View detailed venue and travel information for ICBME 2026"
              >
                View Venue & Travel Details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Contact CTA — vertical card */}
          <div className="bg-[#047857] p-10 text-white flex flex-col justify-between rounded-xl shadow-lg">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail size={22} />
                </div>
                <h3 className="text-2xl font-semibold">
                  Contact the Organizers
                </h3>
              </div>

              <p className="text-white/90 leading-relaxed mb-8">
                For inquiries related to registration, submissions, sponsorship,
                or participation, please reach out to the ICBME 2026 organizing team.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#84CC16]
              text-[#1E293B] font-bold py-3 px-8 rounded-md
              hover:bg-[#65A30D] transition"
              title="Contact ICBME 2026 Conference Organizers"
              aria-label="Contact ICBME 2026 Conference Organizers"
            >
              Contact Us
            </Link>
          </div>

        </div>
        )}
      </div>
    </section>
  );
};

export default VenueAndContactSection;
