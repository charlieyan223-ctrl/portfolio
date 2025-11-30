import React, { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export interface ProjectAction {
  title: string;
  content: string;
}

export interface ProjectDetails {
  role: string;
  headline: string;
  challenge: string;
  actions: ProjectAction[]; // Array of exactly 3 steps: Insight, Strategy, Execution
  impact: string;
  tools: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string; // Used for summary in cards
  image: string;
  details: ProjectDetails;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      cancelAnimationFrame(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 600); // Wait for animation to finish
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div 
        className={`bg-white w-full max-w-4xl max-h-[100vh] sm:max-h-[90vh] overflow-y-auto sm:rounded-3xl shadow-2xl relative z-10 transform transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) will-change-transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="fixed sm:absolute top-6 right-6 z-50 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-900 transition-colors shadow-sm border border-gray-200 group"
        >
          <X size={20} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-[450px] w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-white max-w-3xl">
             <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide uppercase mb-4 border border-white/30">
               {project.category}
             </div>
             <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">{project.title}</h1>
          </div>
        </div>

        {/* Content Body - Apple Style Structure */}
        <div className="px-8 py-12 sm:p-16 max-w-3xl mx-auto">
          
          <div className={`space-y-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            {/* ROLE & HEADLINE */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Role: {project.details.role}</h3>
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight leading-snug">
                {project.details.headline}
              </p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* THE CHALLENGE */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">The Challenge</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                {project.details.challenge}
              </p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* THE ACTIONS */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">The Actions</h3>
              <div className="space-y-8">
                {project.details.actions.map((action, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-lg font-bold text-gray-300 shrink-0">{index + 1}.</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{action.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* KEY IMPACT */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Key Impact</h3>
              <p className="text-xl font-medium text-gray-900 tracking-tight leading-relaxed">
                {project.details.impact}
              </p>
            </div>

            <div className="w-full h-px bg-gray-100" />

            {/* TOOLS */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Tools</h3>
              <p className="text-sm text-gray-500 font-medium">
                {project.details.tools}
              </p>
            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-100 flex justify-center">
             <button 
              onClick={handleClose}
              className="group text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-2 transition-colors px-8 py-4 rounded-full bg-gray-50 hover:bg-gray-100"
             >
               Close Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;