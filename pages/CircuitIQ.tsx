import React from 'react';
import { Target, BarChart3, Users, ArrowRight, CheckCircle2, Layers, Filter, MessageSquare } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CircuitIQ: React.FC = () => {
  return (
    <div className="w-full pt-20 bg-white text-gray-900">

      {/* SECTION 1 – HERO */}
      <section className="py-32 px-6 max-w-[1200px] mx-auto text-center border-b border-gray-100">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-[1.1]">
            Building a Simple, Measurable Marketing Engine for CircuitIQ.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500 font-light tracking-tight max-w-3xl mx-auto mb-12">
            A practical plan to turn awareness into qualified demos, pilots, and revenue.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-gray-50 text-gray-600 font-medium text-sm tracking-wide">
            I don’t want to ‘run social.’ I want to own the growth engine.
          </div>
        </FadeIn>
      </section>

      {/* SECTION 2 – HOW I SEE THE ROLE */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-8">How I See This Role</h2>
            <ul className="space-y-6">
              {[
                "Define the right segments: Ontario school boards, LTC/healthcare, industrial/commercial, ASP partners.",
                "Align positioning and messaging across website, decks, social, and events.",
                "Prioritize channels by ROI, not trends.",
                "Build funnels from Awareness → Consideration → Decision.",
                "Measure success in qualified opportunities, not likes."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-lg text-gray-600 leading-relaxed">
                  <div className="mt-3 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Horizontal Flow Diagram */}
          <FadeIn delay={200} className="w-full">
            <div className="bg-gray-50 rounded-3xl p-8 w-full border border-gray-100 flex items-center justify-center">

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 w-full justify-center">

                {/* Step 1: Right Segments */}
                <div className="group transition-all duration-300 ease-out">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60 flex items-center justify-center text-gray-900 transition-all duration-300 ease-out">
                      <Users size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 tracking-tight text-center max-w-[80px] leading-tight">Right Segments</span>
                  </div>
                </div>

                <div className="flex justify-center lg:h-14 lg:items-center">
                  <ArrowRight className="text-gray-300 rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>

                {/* Step 2: Messaging */}
                <div className="group transition-all duration-300 ease-out">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60 flex items-center justify-center text-gray-900 transition-all duration-300 ease-out">
                      <MessageSquare size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 tracking-tight text-center max-w-[90px] leading-tight">Messaging & Channels</span>
                  </div>
                </div>

                <div className="flex justify-center lg:h-14 lg:items-center">
                  <ArrowRight className="text-gray-300 rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>

                {/* Step 3: Funnel */}
                <div className="group transition-all duration-300 ease-out">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/60 flex items-center justify-center text-gray-900 transition-all duration-300 ease-out">
                      <Filter size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-semibold text-gray-900 tracking-tight text-center max-w-[80px] leading-tight">Funnel</span>
                  </div>
                </div>

                <div className="flex justify-center lg:h-14 lg:items-center">
                  <ArrowRight className="text-gray-300 rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>

                {/* Outcomes */}
                <div className="lg:h-14 lg:flex lg:items-center">
                  <div className="px-5 py-2.5 bg-white rounded-full border border-gray-200/60 shadow-sm text-[10px] font-bold text-gray-900 tracking-wide uppercase text-center">
                    Qualified Opportunities
                  </div>
                </div>

                <div className="flex justify-center lg:h-14 lg:items-center">
                  <ArrowRight className="text-gray-300 rotate-90 lg:rotate-0 shrink-0" size={16} />
                </div>

                <div className="lg:h-14 lg:flex lg:items-center">
                  <div className="px-5 py-2.5 bg-white rounded-full border border-gray-200/60 shadow-sm text-[10px] font-bold text-gray-900 tracking-wide uppercase text-center">
                    Revenue
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 – TARGET OUTCOMES (DARK THEME) */}
      <section className="py-24 px-6 bg-black text-white border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">What I Aim to Deliver</h2>
            <p className="text-xl text-gray-400 font-light">Targets for the first 12 months.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "20–30", label: "Marketing-sourced qualified opportunities / year." },
              { num: "2–5", label: "New paying customers or major projects." },
              { num: "2k–2.5k", label: "LinkedIn followers (from ~1k today)." },
              { num: "3–5", label: "Flagship case studies across schools, LTC, and industry." }
            ].map((tile, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-gray-900 p-8 rounded-2xl h-full flex flex-col justify-between hover:bg-gray-800 transition-colors duration-300">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{tile.num}</span>
                  <span className="text-sm font-medium text-gray-400 leading-snug">{tile.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400} className="text-center">
            <p className="text-gray-500 text-sm font-medium">
              The goal: a repeatable engine that feeds pipeline and makes every sales conversation easier.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 – FUNNEL + THREE PILLARS */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">How I’d Build the Engine</h2>

          {/* Funnel Visual */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 max-w-3xl mx-auto">
            <div className="flex-1 py-4 w-full bg-gray-50 rounded-xl text-gray-900 font-bold tracking-tight">Awareness</div>
            <ArrowRight className="text-gray-300 rotate-90 md:rotate-0" />
            <div className="flex-1 py-4 w-full bg-gray-100 rounded-xl text-gray-900 font-bold tracking-tight">Consideration</div>
            <ArrowRight className="text-gray-300 rotate-90 md:rotate-0" />
            <div className="flex-1 py-4 w-full bg-gray-900 text-white rounded-xl font-bold tracking-tight">Decision</div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pillar 1: Generate Awareness",
              bullets: [
                "LinkedIn-led content (1–2 posts/week) with clear CTAs.",
                "SEO articles on high-intent topics (panel labeling, mapping, code compliance).",
                "Light presence on YouTube, Instagram, and events to support visibility."
              ]
            },
            {
              title: "Pillar 2: Move Prospects Through Consideration",
              bullets: [
                "Turn real projects into case studies (problem → approach → results).",
                "Quarterly webinars / live demos with Q&A.",
                "Simple email nurture: checklist → story → case study → demo invite."
              ]
            },
            {
              title: "Pillar 3: Support Decisions & Scale via Partners",
              bullets: [
                "ROI one-pagers and board-ready slides for schools, LTC, and industry.",
                "Co-marketing with ASPs and vendors (joint webinars, emails, site placements).",
                "Small, focused LinkedIn ad tests optimized for cost per qualified demo."
              ]
            }
          ].map((card, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="border border-gray-200 rounded-2xl p-8 h-full hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-bold mb-6 tracking-tight">{card.title}</h3>
                <ul className="space-y-4">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed flex gap-3">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 5 – 90-DAY PLAN */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100">
        <FadeIn className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">First 90 Days – How I’d Start</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              time: "Days 0–30",
              phase: "Diagnose & Align",
              bullets: [
                "Map the current funnel with founders and sales.",
                "Agree on priority segments (e.g., Ontario schools + LTC).",
                "Audit website, LinkedIn, and existing assets."
              ]
            },
            {
              time: "Days 31–60",
              phase: "Launch the Basics",
              bullets: [
                "Start a consistent LinkedIn + content cadence.",
                "Ship first SEO articles and a panel audit checklist.",
                "Turn an existing project into Case Study #1."
              ]
            },
            {
              time: "Days 61–90",
              phase: "Prove What Works",
              bullets: [
                "Refine messages based on early data.",
                "Build one decision-support pack for a key vertical.",
                "Test one co-marketing or small paid campaign and track marketing-sourced demos."
              ]
            }
          ].map((segment, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="relative pt-6 border-t-2 border-gray-100">
                <div className="absolute top-0 left-0 w-12 h-0.5 bg-black" /> {/* Timeline indicator */}
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{segment.time}</div>
                <h3 className="text-xl font-bold text-black mb-6 tracking-tight">{segment.phase}</h3>
                <ul className="space-y-3">
                  {segment.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SECTION 6 – CLOSING STATEMENT */}
      <section className="py-32 px-6 max-w-[700px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-black">How I Add Value</h2>
          <p className="text-xl text-gray-500 font-light mb-12">
            I don’t just create content. I build measurable growth engines.
          </p>

          <div className="flex flex-col gap-6 text-left max-w-md mx-auto mb-12">
            {[
              "Put CircuitIQ in front of the right decision-makers.",
              "Provide the education and proof buyers need.",
              "Build the confidence required to say ‘yes’."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} className="text-gray-900" strokeWidth={3} />
                </div>
                <span className="text-lg font-medium text-gray-900 tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <div className="w-24 h-px bg-gray-200 mx-auto mb-12" />

          <p className="text-sm font-medium text-gray-400 tracking-wide">
            Measured by opportunities, reusable assets, and market trust.
          </p>
        </FadeIn>
      </section>
    </div>
  );
};

export default CircuitIQ;