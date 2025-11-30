import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Lightbulb, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import headshot from '../images/headshot.png';
import networkingImage from '../images/1networking.jpg';
import volunteerImage from '../images/2volunteer.jpeg';
import pushImage from '../images/3hackthon.jpeg';
import humberImage from '../images/4humber.jpeg';
import healthImage from '../images/5health_challange.jpg';

// --- CAROUSEL DATA ---
const CAROUSEL_SLIDES = [
  {
    id: 1,
    label: "Networking & Events",
    image: networkingImage,
    detailTitle: "Networking & Events",
    detailText: "Actively present at industry events and networking spaces across Toronto to stay connected and informed."
  },
  {
    id: 2,
    label: "Event Support",
    image: volunteerImage,
    detailTitle: "Event Support",
    detailText: "Supporting large-scale industry events through coordination, logistics, and on-site execution."
  },
  {
    id: 3,
    label: "Hackathon Winner",
    image: pushImage,
    detailTitle: "Hackathon Winner",
    detailText: "Led a team to 1st Place with a strategy-backed solution focused on student engagement and behavioral insights."
  },
  {
    id: 4,
    label: "Academic Excellence",
    image: humberImage,
    detailTitle: "Academic Excellence",
    detailText: "Recipient of multiple merit-based scholarships recognizing leadership, performance, and impact across programs."
  },
  {
    id: 5,
    label: "Innovation Challenge",
    image: healthImage,
    detailTitle: "Innovation Challenge",
    detailText: "Developed a human-centered solution in a multidisciplinary team for improving community health outcomes."
  }
];

const Home: React.FC = () => {
  // --- PARALLAX STATE ---
  const heroBgRef = useRef<HTMLDivElement>(null);

  // --- CAROUSEL STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Parallax Effect
  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (heroBgRef.current) {
        // Subtle parallax: moves at 30% of scroll speed
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  return (
    <div className="w-full">
      {/* SECTION 1 — HERO (FULL WIDTH) */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center px-6 bg-white pt-32 pb-16 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          ref={heroBgRef}
          className="absolute w-full h-[150%] -top-[25%] left-0 z-0 pointer-events-none will-change-transform opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white z-0 pointer-events-none" />

        <div className="max-w-4xl text-center relative z-10">
          <FadeIn delay={100}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] text-black mb-8 drop-shadow-sm">
              Strategic Marketing.<br />
              Creative Precision.<br />
              Work That Moves People.
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-tight mb-12 max-w-2xl mx-auto leading-relaxed">
              I use insight, storytelling, and AI-enhanced workflows to help brands communicate clearly and grow consistently.
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all duration-300 text-base font-medium hover:scale-105 shadow-lg shadow-black/10"
            >
              Explore My Work <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — ABOUT (MEET CHARLIE) */}
      <section className="py-24 px-6 bg-white border-t border-gray-100/50 relative z-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Headshot */}
          <FadeIn>
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 bg-gray-100 relative max-w-md mx-auto md:mx-0 group">
              <img
                src={headshot}
                alt="Charlie Yan"
                className="w-full h-full object-cover object-top block group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </FadeIn>

          {/* Right: Bio & Values */}
          <div className="flex flex-col justify-center h-full">
            <FadeIn delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">Meet Charlie Yan</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-12">
                I’m a marketing strategist and creative hybrid based in Toronto. My work blends strategy, content systems, and AI-accelerated workflows—turning complex ideas into simple, powerful stories that drive results.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <FadeIn delay={300}>
                <div className="space-y-3">
                  <Brain size={24} className="text-gray-900" strokeWidth={1.5} />
                  <h3 className="font-semibold text-black tracking-tight">Strategic</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Clear thinking, audience insight, and structured planning.</p>
                </div>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="space-y-3">
                  <Lightbulb size={24} className="text-gray-900" strokeWidth={1.5} />
                  <h3 className="font-semibold text-black tracking-tight">Creative</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Story-driven content and clean, memorable visuals.</p>
                </div>
              </FadeIn>
              <FadeIn delay={500}>
                <div className="space-y-3">
                  <Zap size={24} className="text-gray-900" strokeWidth={1.5} />
                  <h3 className="font-semibold text-black tracking-tight">Adaptive</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">Fast, solution-oriented, and AI-native.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CORE STRENGTHS */}
      <section className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-black">Core Strengths</h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Insight-driven strategy",
                "AI-powered content workflows",
                "Systems thinking for scalable content",
                "Social storytelling & audience engagement",
                "Data-backed decision making"
              ].map((strength, i) => (
                <div
                  key={i}
                  className="px-8 py-4 bg-gray-100 rounded-full text-base md:text-lg font-medium text-gray-900 tracking-tight transition-all hover:bg-gray-200 duration-300 cursor-default"
                >
                  {strength}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 — PROVEN RESULTS */}
      <section className="py-32 px-6 bg-black text-white relative z-10">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Proven Results.</h2>
            <p className="text-xl text-gray-400 mb-16 font-light">Impact driven by strategic thinking and creative execution.</p>
          </FadeIn>

          <div className="flex flex-col space-y-0">
            {[
              "1st Place — Campus Changemakers Hackathon",
              "2nd Place — Toronto Marlies Ticket Sales Program",
              "4 Outstanding Performance Awards — Tencent",
              "60+ Marketing Projects Delivered Across Canada"
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="py-6 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
                  <p className="text-lg md:text-xl font-light tracking-tight leading-relaxed">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — IN THE WORK (CAROUSEL) */}
      <section className="py-32 px-6 bg-white overflow-hidden relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">In the Work. In the Community.</h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              A quick look at the projects, events, and teams I’ve been part of.
            </p>
          </FadeIn>

          {/* Carousel Container */}
          <FadeIn delay={200}>
            <div
              className="relative group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides Track */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] md:aspect-[3/2] shadow-sm">
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {CAROUSEL_SLIDES.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="min-w-full h-full relative group/slide"
                    >
                      {/* Blurred Background for Ambience */}
                      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
                        <img
                          src={slide.image}
                          alt=""
                          className="w-full h-full object-cover blur-3xl scale-125 opacity-40"
                        />
                      </div>

                      {/* Main Image - Full View */}
                      <img
                        src={slide.image}
                        alt={slide.label}
                        className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/slide:scale-105 drop-shadow-sm"
                      />

                      {/* Default Label (Bottom Left) - Fades out on hover */}
                      <div className="absolute z-20 inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 md:p-12 transition-opacity duration-300 group-hover/slide:opacity-0">
                        <span className="text-white text-xl md:text-2xl font-semibold tracking-tight drop-shadow-md">
                          {slide.label}
                        </span>
                      </div>

                      {/* Hover Details Overlay - Fades in on hover */}
                      <div className="absolute z-30 inset-0 bg-black/90 flex flex-col justify-center items-center p-8 md:p-16 text-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight translate-y-4 group-hover/slide:translate-y-0 transition-transform duration-500 delay-75">
                          {slide.detailTitle}
                        </h3>
                        <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl translate-y-4 group-hover/slide:translate-y-0 transition-transform duration-500 delay-100">
                          {slide.detailText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows (visible on group hover) */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {CAROUSEL_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;