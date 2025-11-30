import React, { useState } from 'react';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProjectModal, { Project, ProjectDetails } from '../components/ProjectModal';
import EmailCopy from '../components/EmailCopy';
import strategyImage from '../images/strategy.jpg';
import goinAppImage from '../images/goinapp.png';
import hackathonImage from '../images/hackathon.jpg';
import brandImage from '../images/brand.jpg';
import cloverleafImage from '../images/cloverleaf.png';
import delmanorImage from '../images/delmanor.jpg';
import socialImage from '../images/social.jpg';
import chcImage from '../images/chc.jpg';
import promensilImage from '../images/promensil1.jpg';

// --- DATA DEFINITIONS ---

// Helper to keep data consistent with Modal props
const createProject = (
  id: string,
  category: string,
  title: string,
  summary: string, // Used for card view
  bullets: string[], // Used for card view
  image: string,
  details: ProjectDetails
): Project & { summary: string; bullets: string[] } => ({
  id,
  category,
  title,
  description: summary, // Mapping summary to description for internal consistency
  summary,
  bullets,
  image,
  details
});

const STRATEGY_PROJECTS = [
  createProject(
    'strat1',
    'Strategy',
    'PUSH Media — Competitive Strategy',
    'Built a unified content system after auditing 106 agencies.',
    [
      'Audited 106 competitors',
      'Reduced production time ~30%'
    ],
    strategyImage, // Strategy/Brainstorming
    {
      role: "Creative Services Intern — Digital Strategy",
      headline: "Building a unified social media system to clarify brand voice and improve content performance across PUSH Media’s LinkedIn, Instagram, and newsletter channels.",
      challenge: "PUSH lacked consistent messaging, visual identity alignment, and a content plan that reflected its agency positioning. Social platforms had fragmented tone, low engagement consistency, and no clear structure.",
      actions: [
        { title: "Insight Discovery", content: "Audited 106 competitor agencies, evaluated content performance, analyzed voice inconsistencies, and identified market gaps." },
        { title: "Strategy Development", content: "Built a unified Agency Voice Framework, social pillars, messaging structure, and cross-platform content architecture." },
        { title: "Execution Support", content: "Created reusable templates, optimized workflows, produced sample content, and set up analytics-driven posting guidelines." }
      ],
      impact: "Delivered a scalable content system that reduced production time by ~30%. Resulted in consistent brand expression and improved engagement quality. Adopted by leadership across all channels.",
      tools: "Competitive Analysis · Content Systems · Social Strategy · Brand Voice Frameworks · AI-Enhanced Templates"
    }
  ),
  createProject(
    'strat2',
    'Strategy',
    'Goin App — User Insights',
    'Identified behavioral friction for 100,000+ students.',
    [
      'Built recommendation roadmap',
      'Award-winning user-impact project'
    ],
    goinAppImage, // Mobile App/Tech
    {
      role: "Student Ambassador — Humber International Centre",
      headline: "Identifying behavioral barriers to improve feature adoption for an app serving 100,000+ international students.",
      challenge: "Humber needed deeper insight into how students engage with the Goin App and where feature adoption was breaking down. The team lacked clear behavioral data to guide UX and content improvements.",
      actions: [
        { title: "Insight Discovery", content: "Analyzed student motivations, friction points, and usage journeys across onboarding, community tools, and trip features." },
        { title: "Strategy Development", content: "Built a prioritized recommendation roadmap for clarity, value messaging, and engagement flows." },
        { title: "Execution Support", content: "Proposed UX flow enhancements, improved content clarity, and recommended communication formats tailored to decision stages." }
      ],
      impact: "Delivered a clear roadmap to improve feature comprehension and engagement. Resulted in Goin winning Humber’s Best Integrated Community App (1st Place). Adopted by dev team to reduce churn.",
      tools: "User Insight Analysis · Behavioral Mapping · UX Recommendations · Messaging Strategy · Research Frameworks"
    }
  ),
  createProject(
    'strat3',
    'Strategy',
    'Campus Changemakers — Strategy',
    'Created an award-winning student engagement model.',
    [
      'Engagement model',
      '1st Place for strategic clarity'
    ],
    hackathonImage, // College Campus
    {
      role: "Team Lead — Strategic Problem Solving",
      headline: "Designing an insight-backed engagement solution that won 1st Place at Humber’s Campus Changemakers competition.",
      challenge: "Student engagement across campus was declining, with unclear motivation pathways and fragmented communication. The challenge required solving this in under 24 hours with real-world feasibility.",
      actions: [
        { title: "Insight Discovery", content: "Conducted qualitative analysis of motivations, barriers, and psychological drivers of disengagement." },
        { title: "Strategy Development", content: "Built a user-centered engagement model and step-by-step activation framework grounded in behavioral insights." },
        { title: "Execution Support", content: "Developed a pitch narrative, structured insight → solution → impact flow, and guided team messaging refinement." }
      ],
      impact: "Delivered a strategic solution praised for clarity and feasibility. Resulted in a 1st Place win and recognition for strong insight-to-execution thinking. Adopted as a reference model by judges.",
      tools: "Behavioral Insights · Problem Framing · Strategic Narrative · Presentation Design · Research Synthesis"
    }
  )
];

const BRAND_PROJECTS = [
  createProject(
    'brand1',
    'Brand System',
    'PUSH Academy — Brand System',
    'Developed a scalable internal education brand.',
    [
      'Defined mission + pillars',
      'Built internal identity system'
    ],
    brandImage, // Training/Education
    {
      role: "Creative Strategist — Brand Systems",
      headline: "Building a scalable internal brand system to unify training, onboarding, and creative standards at PUSH Media.",
      challenge: "PUSH lacked a centralized education brand for internal training, leading to inconsistent communication, templates, and learning experience quality.",
      actions: [
        { title: "Insight Discovery", content: "Researched 50+ agency learning brands; analyzed gaps in PUSH’s internal communication." },
        { title: "Strategy Development", content: "Defined brand pillars, mission, tone, and the full value proposition for PUSH Academy." },
        { title: "Execution Support", content: "Built visual identity structures, templates, workflow models, and multi-format content modules." }
      ],
      impact: "Delivered a complete internal brand ecosystem adopted by leadership. Resulted in clearer training communication and greater consistency across all internal content.",
      tools: "Brand Strategy · Content Systems · Visual Frameworks · Internal Communication Design · AI-Enhanced Template Design"
    }
  ),
  createProject(
    'brand2',
    'Brand Strategy',
    'LinkedIn — Personal Brand',
    'Built a data-driven content system with 166% YoY growth.',
    [
      '4-part content architecture',
      'Optimized publishing workflow'
    ],
    'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop', // LinkedIn/Digital Pro
    {
      role: "Marketing Strategist — Personal Brand Development",
      headline: "Creating a scalable personal branding system that increased audience growth by 166% and impressions by 340% YoY.",
      challenge: "Build a professional identity—not an influencer persona—while creating consistent engagement and industry visibility on LinkedIn.",
      actions: [
        { title: "Insight Discovery", content: "Analyzed follower behavior, impression velocity, content performance, and audience intent." },
        { title: "Strategy Development", content: "Built a 4-part content architecture: insights, case breakdowns, event reflections, and career storytelling; defined clear positioning narrative." },
        { title: "Execution Support", content: "Developed an optimized posting workflow, refined messaging structure, and improved consistency across posts and profile touchpoints." }
      ],
      impact: "Delivered a 166% YoY follower increase and 340.6% lift in impressions. Resulted in inbound interviews, industry connections, and improved professional credibility.",
      tools: "LinkedIn Analytics · Positioning Strategy · Content Architecture · SEO for Profiles · AI-Assisted Workflows"
    }
  ),
  createProject(
    'brand3',
    'Brand Support',
    'PUSH — RFP Narrative',
    'Strengthened proposals with clear narrative frameworks.',
    [
      'Strategic narrative design',
      'Branded template system'
    ],
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', // Proposal/Documents
    {
      role: "Creative Strategist — Proposal & Brand Support",
      headline: "Supporting high-value RFPs with brand-aligned content structures and strategic proposal framing.",
      challenge: "PUSH needed clear, visually aligned proposal structures for high-stakes RFP submissions. Existing decks lacked narrative clarity, strategic framing, and consistent branding.",
      actions: [
        { title: "Insight Discovery", content: "Reviewed prior RFPs, evaluated client goals, and analyzed gaps in storytelling and structure." },
        { title: "Strategy Development", content: "Built a narrative flow including objectives, insights, strategic rationale, and proposed solutions with clarity." },
        { title: "Execution Support", content: "Designed branded templates, improved visual consistency, crafted messaging sections, and produced supporting mockups." }
      ],
      impact: "Delivered RFP frameworks that improved clarity and professionalism. Resulted in stronger client perception and increased competitiveness in proposals. Adopted by leadership for future submissions.",
      tools: "Proposal Strategy · Narrative Design · Brand Systems · Content Structuring · Template Design"
    }
  )
];

const CAMPAIGN_PROJECTS = [
  createProject(
    'camp1',
    'Activation',
    'Clover Leaf — Activation',
    'Designed a national trial campaign to increase awareness.',
    [
      'Full activation concept',
      'Sampling strategy'
    ],
    cloverleafImage, // Union Station Toronto
    {
      role: "Creative Strategist — Activation Planning",
      headline: "Designing a national sampling activation to increase brand awareness for Clover Leaf in a highly competitive CPG category.",
      challenge: "Clover Leaf faced low top-of-mind awareness compared to competitors. The brand needed a field activation idea that could introduce the product directly to consumers and drive trial at scale.",
      actions: [
        { title: "Insight Discovery", content: "Analyzed consumer behavior, competitor sampling tactics, and retail environments; identified awareness and trial barriers." },
        { title: "Strategy Development", content: "Built a full sampling activation concept including value proposition, messaging flow, and location strategy." },
        { title: "Execution Support", content: "Designed the activation route, staffing plan, sample distribution flow, KPIs, and measurement framework; delivered full proposal deck." }
      ],
      impact: "Delivered a complete activation strategy used by senior creative leadership. Resulted in clearer brand positioning opportunities and future activation planning alignment.",
      tools: "Consumer Insight Analysis · Activation Planning · Experience Design · Messaging Strategy · Proposal Frameworks"
    }
  ),
  createProject(
    'camp2',
    'Campaign',
    'Delmanor — Storytelling',
    'Led a multi-video narrative series lifting engagement.',
    [
      'Multi-video concept',
      'Engagement lift'
    ],
    delmanorImage, // Happy Seniors
    {
      role: "Digital Communications Coordinator — Content & Campaigns",
      headline: "Leading a month-long brand storytelling campaign to elevate Delmanor’s emotional connection with residents and families.",
      challenge: "Delmanor needed a campaign that humanized the brand and showcased meaningful resident stories during Seniors Month. The existing content lacked narrative depth and emotional resonance.",
      actions: [
        { title: "Insight Discovery", content: "Identified key emotional themes, resident experiences, and brand storytelling gaps." },
        { title: "Strategy Development", content: "Developed a multi-video campaign narrative highlighting lived experiences, wisdom, and community spirit." },
        { title: "Execution Support", content: "Coordinated filming, conducted interviews, managed production workflows, and delivered final video assets for social channels." }
      ],
      impact: "Delivered a high-engagement storytelling campaign that strengthened brand warmth and community presence. Resulted in a measurable lift in social engagement and positive feedback from residents and families.",
      tools: "Content Strategy · Storytelling Frameworks · Video Production Coordination · Interview Design · Social Campaign Execution"
    }
  ),
  createProject(
    'camp3',
    'Activation',
    'Marlies — Ticket Campaign',
    'Delivered a segmented campaign ranked #2 of 150.',
    [
      'Target segmentation',
      '2nd out of 150 competitors'
    ],
    'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2069&auto=format&fit=crop', // Stadium/Arena
    {
      role: "Campaign Strategist — Ticket Sales Activation",
      headline: "Executing an integrated student-targeted ticket campaign that achieved 2nd place among 150 participants.",
      challenge: "The campaign required developing a conversion-focused strategy to promote Toronto Marlies tickets to a diverse student population with varying interests and price sensitivity.",
      actions: [
        { title: "Insight Discovery", content: "Analyzed student behaviors, motivations, and willingness-to-purchase across different campus groups." },
        { title: "Strategy Development", content: "Built a segmented targeting plan, selected optimal communication channels, and crafted tailored messaging for different student segments." },
        { title: "Execution Support", content: "Executed outreach across campus networks, club groups, social channels, and peer communities; optimized messaging based on response patterns." }
      ],
      impact: "Drove strong ticket sales performance and ranked 2nd out of 150 participants. Resulted in recognition for strategic clarity, audience understanding, and execution strength.",
      tools: "Audience Segmentation · Channel Strategy · Messaging Optimization · Campus Activation · Performance Tracking"
    }
  )
];

const SOCIAL_PROJECTS = [
  createProject(
    'soc1',
    'Content',
    'PUSH — Social Content',
    'Created a cross-channel content suite and workflow.',
    [
      'Trend-aligned creative',
      'Newsletter workflow'
    ],
    socialImage, // Using smartphone/social
    {
      role: "Creative Services Intern — Content Execution & Social Publishing",
      headline: "Delivering timely, brand-aligned content across LinkedIn, Instagram, and newsletters to support client wins, industry events, and agency visibility.",
      challenge: "PUSH needed a consistent and reliable content execution system that ensured all social posts and newsletters were on time, aligned with brand voice, and responsive to client updates, cultural moments, and agency milestones.",
      actions: [
        { title: "Insight Discovery", content: "Monitored industry trends, seasonal moments, and analytics to identify high-engagement opportunities; evaluated which topics resonated most with PUSH’s audience." },
        { title: "Strategy Development", content: "Built a weekly content flow covering client highlights, team updates, cultural touchpoints, and PUSH’s acquisition/news; structured newsletter content for narrative consistency." },
        { title: "Execution Support", content: "Produced and published LinkedIn and IG content on schedule, coordinated visuals and copy, and managed newsletter layout and distribution." }
      ],
      impact: "Delivered consistent weekly social and newsletter content that increased audience engagement and strengthened PUSH’s visibility during key industry moments. Adopted as the standard weekly process by internal teams.",
      tools: "Content Execution · Social Publishing · Engagement Analytics · Newsletter Production · AI-Assisted Creative Workflow"
    }
  ),
  createProject(
    'soc2',
    'Creative',
    'Choice Hotels — Creative',
    'Produced performance-aligned assets for a national push.',
    [
      'Brand-aligned assets',
      'Digital promo delivery'
    ],
    chcImage, // Hotel Exterior
    {
      role: "Creative Strategist — Social Creative Execution",
      headline: "Executing Black Friday creative assets for Choice Hotels to support a national promotional push.",
      challenge: "Choice Hotels needed clear, on-brand Black Friday creative that matched national campaign messaging while maintaining visual consistency across platforms. Quick turnaround and strict brand guidelines required strategic creative decisions.",
      actions: [
        { title: "Insight Discovery", content: "Reviewed brand guidelines, campaign goals, and audience behavior for seasonal promotions; analyzed competitor Black Friday creative." },
        { title: "Strategy Development", content: "Developed a visual direction aligned with Choice Hotels' existing brand architecture; refined messaging hierarchy for clarity and promotional impact." },
        { title: "Execution Support", content: "Created social-ready visuals, optimized layout for readability, and coordinated asset delivery under tight timelines." }
      ],
      impact: "Delivered campaign-ready creative that met brand requirements and supported the national Black Friday push. Resulted in seamless integration with the broader marketing campaign and positive client approval.",
      tools: "Brand Guidelines · Creative Direction · Social Design Systems · Campaign Messaging · Adobe/Canva Workflow"
    }
  ),
  createProject(
    'soc3',
    'Events',
    'Promensil — Event Content',
    'Coordinated production and social-ready event content.',
    [
      'Video workflow support',
      'Promo content delivery'
    ],
    promensilImage, // Trade Show
    {
      role: "Creative Coordinator — Video Production & Event Support",
      headline: "Coordinating video production and onsite activation to strengthen Promensil’s presence at the National Menopause Show.",
      challenge: "Promensil needed creative support to communicate credibility, product education, and brand warmth at a high-traffic consumer health event. The team lacked cohesive video storytelling and onsite coordination.",
      actions: [
        { title: "Insight Discovery", content: "Assessed brand messaging, event audience motivations, and competitive exhibitor presence." },
        { title: "Strategy Development", content: "Shaped video narrative structure, ensured content alignment with brand tone, and planned key storyline moments for the final edit." },
        { title: "Execution Support", content: "Coordinated filming, managed onsite logistics, supported live activation, and ensured the content captured aligned storytelling moments for the post-event campaign." }
      ],
      impact: "Delivered cohesive video and activation support that enhanced Promensil’s brand presence at the show. Resulted in stronger consumer engagement and improved storytelling consistency.",
      tools: "Video Coordination · Event Activation · Brand Messaging · Creative Planning · Onsite Production Support"
    }
  )
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the section
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash for deep linking support
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 pt-20">

      {/* Main Content Wrapper - Blurs when modal is open */}
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] origin-top ${isModalOpen ? 'blur-[4px] scale-[0.98] opacity-60 pointer-events-none' : ''}`}>

        {/* SECTION 1 — Page Header */}
        <section className="pt-20 pb-12 px-6 max-w-[1200px] mx-auto text-center border-b border-gray-100">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Portfolio</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              A curated selection of strategic, brand, campaign, and creative work.
            </p>

            {/* Category Navigation Bar */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-12">
              {[
                { name: 'Strategy & Insights', id: 'strategy' },
                { name: 'Brand & Content', id: 'brand' },
                { name: 'Campaigns', id: 'campaigns' },
                { name: 'Social & Creative', id: 'social' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm md:text-base font-medium text-gray-600 hover:text-black transition-colors pb-1 border-b border-transparent hover:border-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </FadeIn>
        </section>

        {/* SECTION 2 — Strategy & Insights */}
        <section id="strategy" className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100 scroll-mt-24">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Strategy & Insights</h2>
            <p className="text-xl text-gray-500 font-light">
              How I analyze markets, uncover insights, and build strategic direction.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STRATEGY_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 100}>
                <div className="group cursor-pointer" onClick={() => handleOpenModal(project)}>
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden mb-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 will-change-transform">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-black transition-colors">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{project.summary}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Brand & Content Systems */}
        <section id="brand" className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100 scroll-mt-24">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Brand & Content Systems</h2>
            <p className="text-xl text-gray-500 font-light">
              How I build scalable brand narratives and content structures.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 100}>
                <div className="group cursor-pointer" onClick={() => handleOpenModal(project)}>
                  <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden mb-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 will-change-transform">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-black transition-colors">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{project.summary}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 4 — Campaigns & Activations */}
        <section id="campaigns" className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100 scroll-mt-24">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Campaigns & Activations</h2>
            <p className="text-xl text-gray-500 font-light">
              Marketing initiatives I’ve led or contributed to, with real outcomes.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPAIGN_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 100}>
                <div className="group cursor-pointer" onClick={() => handleOpenModal(project)}>
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden mb-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 will-change-transform">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-black transition-colors">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{project.summary}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Social & Creative Work */}
        <section id="social" className="py-24 px-6 max-w-[1200px] mx-auto border-b border-gray-100 scroll-mt-24">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Social & Creative Work</h2>
            <p className="text-xl text-gray-500 font-light">
              Content execution powered by strategy and AI-enhanced workflows.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOCIAL_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={i * 100}>
                <div className="group cursor-pointer" onClick={() => handleOpenModal(project)}>
                  <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden mb-8 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out group-hover:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 will-change-transform">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-black transition-colors">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{project.summary}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(project);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION 6 — Footer CTA */}
        <section className="py-32 px-6 max-w-[1200px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl font-medium tracking-tight mb-8">
              Looking for deeper case studies or full documents?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="https://www.linkedin.com/in/charlieyan0203" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors font-medium">
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
              <EmailCopy
                email="charlieyan223@gmail.com"
                className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors font-medium"
              >
                <Mail size={20} />
                Email Me
              </EmailCopy>
            </div>
          </FadeIn>
        </section>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Portfolio;