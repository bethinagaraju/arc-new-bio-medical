

import React from "react";
import {
  FileText,
  Users,
  Upload,
  Target,
  Presentation,
  CheckCircle,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useConference } from '../contexts/ConferenceContext';

const AboutTheCall: React.FC = () => {
  const { data } = useConference();
  return (
    <>
      {/* ================= SEO (UNCHANGED) ================= */}
      <Helmet>
        <title>Call for Papers | Health Innovation Summit Conference 2026 Rome</title>
        <meta
          name="description"
          content="Submit your research abstract for the Health Innovation Summit Conference (ICHIS 2026) in Rome. Peer-reviewed presentation opportunities for global researchers."
        />
        <meta
          name="keywords"
          content="Call for Abstracts AI, AI ML Robotics Conference, Abstract Submission, Research Conference, ICHIS 2026"
        />
        <link
          rel="canonical"
          href="https://roboticsaisummit.com/call-for-abstracts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Call for Abstracts - ICHIS 2026" />
        <meta
          property="og:description"
          content="Submit your abstract and present your research at ICHIS 2026 in Rome."
        />
        <meta
          property="og:image"
          content="https://roboticsaisummit.com/aimllogo.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Call for Abstracts | ICHIS 2026" />
        <meta
          name="twitter:description"
          content="Join global researchers at ICHIS 2026. Abstract submissions now open."
        />
        <meta
          name="twitter:image"
          content="https://roboticsaisummit.com/aimllogo.jpg"
        />
      </Helmet>

      <div className="font-sans text-[#1E293B] bg-white">

        {/* ================= PAGE HEADER ================= */}
        <div className="bg-white px-6 pt-12 pb-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#004E5A] tracking-tight">
              CALL FOR ABSTRACTS – ICHIS 2026
            </h1>

            <p className="mt-2 text-[17px] text-slate-600 max-w-3xl">
              Submit your research abstract and join the global Health Innovation Summit research community.
            </p>

            <div className="mt-5 h-[2px] w-full bg-[#0F766E]" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* ================= INTRO ================= */}
          <div className="mb-12 border-l-2 border-[#0F766E]/40 pl-5">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-[#0F766E]" />
              <h3 className="text-lg font-bold text-[#004E5A]">
                About the Call
              </h3>
            </div>

            <p className="text-[16.5px] text-slate-600 leading-relaxed max-w-3xl">
              We cordially invite researchers, academicians, industry professionals,
              and students to submit research abstracts for presentation at the
              International Conference on Health Innovation Summit (ICHIS 2026), held in Seoul, South Korea with hybrid participation.
            </p>

            <p className="mt-2 text-[16.5px] text-slate-600 leading-relaxed max-w-3xl">
              The conference provides a global platform to present innovative ideas,
              ongoing research, and real-world applications.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="space-y-0">

            <SectionRow icon={<Users className="w-5 h-5" />} title="Who Can Submit?">
              {[
                "Professors & Academicians",
                "Researchers & Scientists",
                "PhD Scholars & Postdoctoral Researchers",
                "Postgraduate & Undergraduate Students",
                "Industry Professionals",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>

            <Divider />

            <SectionRow icon={<Upload className="w-5 h-5" />} title="What Can Be Submitted?">
              {[
                "Research Abstract (150–300 words)",
                "Original or ongoing research work",
                "Theoretical, experimental, or applied research",
                "Interdisciplinary topics are also welcome",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>

            <Divider />

            <SectionRow icon={<Target className="w-5 h-5" />} title="Topics of Interest">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {data?.topics?.slice(0, 8).map((item) => (
                  <ListItem key={item.id} text={item.topicName} />
                ))}
              </div>

              <div className="mt-3">
                <Link
                  to="/sessions"
                  className="inline-flex items-center gap-1 text-[#0F766E] font-semibold hover:underline"
                >
                  View all topics <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionRow>

            <Divider />

            <SectionRow
              icon={<Presentation className="w-5 h-5" />}
              title="Presentation Types"
            >
              {[
                "Oral Presentation",
                "Poster Presentation",
                "Virtual Presentation",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>

            <Divider />

            <SectionRow icon={<CheckCircle className="w-5 h-5" />} title="Review Process">
              <p className="text-[16.5px] text-slate-600 leading-relaxed">
                All submitted abstracts will be reviewed by the conference review
                committee to ensure relevance, originality, and clarity.
              </p>
            </SectionRow>

            <Divider />

            <SectionRow
              icon={<Award className="w-5 h-5" />}
              title="Benefits of Participation"
            >
              {[
                "International presentation opportunity",
                "Certificate of Presentation",
                "Inclusion in conference proceedings",
                "Networking with global experts",
                "Visa support letter (for eligible participants)",
              ].map((item, idx) => (
                <ListItem key={idx} text={item} />
              ))}
            </SectionRow>
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#004E5A] text-[#FFFFFF] font-bold hover:brightness-95 transition"
            >
              Register Now <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/AbstractSubmission"
              className="flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-[#004E5A] font-bold hover:border-[#0F766E] hover:text-[#0F766E] transition"
            >
              Abstract Submission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

/* ================= HELPERS ================= */

const SectionRow: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-8">
    <div className="md:w-1/3 flex-shrink-0">
      <div className="flex items-center gap-3 sticky top-6">
        <div className="p-2 bg-[#ECFDF5] text-[#004E5A]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-[#004E5A]">
          {title}
        </h3>
      </div>
    </div>

    <div className="md:w-2/3">{children}</div>
  </div>
);

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 mb-2 last:mb-0">
    <div className="mt-3 w-[5px] h-[5px] rounded-full bg-[#0F766E]" />
    <span className="text-[16.5px] text-slate-600 leading-relaxed">
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="border-slate-100" />;

export default AboutTheCall;
