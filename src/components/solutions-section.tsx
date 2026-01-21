"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, MessageCircle, Video, Headphones, Globe, FileText, Users, Building2, ChevronUp, Mic, BookOpen, Languages, Briefcase, Award, Clock, Brain } from "lucide-react";

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

const solutions: Solution[] = [
  {
    title: "Over-the-Phone Interpretation",
    description: "Connect to a professional interpreter within seconds, reducing wait times and facilitating prompt communication across 200+ languages.",
    icon: <Phone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=90",
    link: "/solutions/remote-interpretation/opi",
  },
  {
    title: "Video Remote Interpretation",
    description: "Face-to-face interpretation services via secure video connection, perfect for medical, legal, and business meetings requiring visual context.",
    icon: <Video className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=90",
    link: "/solutions/remote-interpretation/vri",
  },
  {
    title: "Multilingual Chat Support",
    description: "Real-time chat assistance in various languages, allowing businesses to connect with customers from different regions without language barriers.",
    icon: <MessageCircle className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=90",
    link: "/solutions/customer-experience/chat-support",
  },
  {
    title: "Multilingual Customer Experience",
    description: "End-to-end CX solutions with native-speaking agents who understand cultural nuances and deliver exceptional customer service globally.",
    icon: <Headphones className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=90",
    link: "/solutions/customer-experience/customer-service",
  },
  {
    title: "Omnichannel Support",
    description: "Unified customer experience across all communication channels for seamless interactions.",
    icon: <FileText className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=90",
    link: "/solutions/customer-experience/omnichannel",
  },
  {
    title: "Social Media Support",
    description: "Engaging with customers on social platforms to build relationships and resolve concerns.",
    icon: <Globe className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=90",
    link: "/solutions/customer-experience/social-media-support",
  },
  {
    title: "AI Voice Agents for Support",
    description: "Automated voice solutions for handling routine calls and inquiries.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90",
    link: "/solutions/ai-automation/ai-voice-agents",
  },
  {
    title: "Enterprise Solutions",
    description: "Customized language solutions tailored to large organizations with complex multilingual communication requirements.",
    icon: <Building2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=90",
    link: "/solutions/enterprise",
  },
  {
    title: "On-Site Interpretation",
    description: "Professional interpreters dispatched to your location for conferences, meetings, and events requiring in-person language support.",
    icon: <Mic className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=90",
    link: "/solutions/onsite",
  },
  {
    title: "AI Language Training",
    description: "AI-powered language courses and cultural training programs to upskill your workforce for global business communication.",
    icon: <Brain className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=90",
    link: "/solutions/ai-automation/data-training",
  },
  {
    title: "Sign Language Interpretation",
    description: "Professional sign language services bridging communication gaps for the hearing-impaired.",
    icon: <Languages className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=90",
    link: "/solutions/remote-interpretation/sign-language",
  },
  {
    title: "AI Translation",
    description: "Advanced machine translation enhanced by human expertise for accurate results.",
    icon: <Briefcase className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=90",
    link: "/solutions/ai-automation/ai-translation",
  },
  {
    title: "Sales Generation",
    description: "Data-driven prospecting and segmentation ensures your message reaches the right decision-makers at the right time.",
    icon: <Award className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=90",
    link: "/solutions/customer-experience/sales-generation",
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance to resolve issues quickly and keep your operations running smoothly.",
    icon: <Clock className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=90",
    link: "/solutions/customer-experience/technical-support",
  },
];

const SolutionsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSolutions = showAll ? solutions : solutions.slice(0, 8);

  return (
    <section className="py-20 md:py-25 lg:py-35 bg-linear-to-b from-[#00003d] via-[#000052] to-[#00003d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[5%] w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-[#ef9c31]/20 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[200px] md:w-[280px] lg:w-[350px] h-[200px] md:h-[280px] lg:h-[350px] bg-[#4F46E5]/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-150 bg-[#00008B]/30 rounded-full blur-[150px] md:blur-[200px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-350 relative z-10">
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-[#ef9c31]/10 border border-[#ef9c31]/30 rounded-full text-[#ef9c31] text-[11px] md:text-[13px] font-semibold tracking-wide uppercase mb-4 md:mb-6">
            Our Solutions
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-[-0.02em] px-2">
            Increase language access and<br className="hidden sm:block" /> improve global communication
          </h2>
          <p className="text-[14px] md:text-[17px] lg:text-[19px] text-white/60 leading-[1.7] max-w-[750px] mx-auto px-2">
            A diverse range of solutions designed for global corporate needs to enhance customer interaction and improve business operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {visibleSolutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-white/8 to-white/2 backdrop-blur-md border border-white/[0.08] rounded-[20px] overflow-hidden hover:border-[#ef9c31]/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(239,156,49,0.25)] hover:-translate-y-1"
            >
              <div className="relative h-35 md:h-40 lg:h-45 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#00003d] via-[#00003d]/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#ef9c31] flex items-center justify-center text-[#00003d] shadow-lg shadow-[#ef9c31]/30 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>

                <div className="p-4 md:p-5 lg:p-6">
                  <h3 className="text-[15px] md:text-[17px] lg:text-[18px] font-bold text-white mb-2 md:mb-3 leading-[1.3] group-hover:text-[#ef9c31] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] text-white/50 leading-[1.7] mb-4 md:mb-5 line-clamp-3">
                    {solution.description}
                  </p>

                  <a href={solution.link} className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-semibold text-[#ef9c31] hover:text-white transition-colors duration-300 group/btn">
                    Learn More
                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ef9c31]/10 flex items-center justify-center group-hover/btn:bg-[#ef9c31]/20 transition-colors">
                      <ArrowUpRight 
                        size={12} 
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
                      />
                    </span>
                  </a>
                </div>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ef9c31] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#ef9c31] to-[#f5b54a] hover:from-[#f5b54a] hover:to-[#ef9c31] text-[#00003d] font-bold text-[13px] md:text-[15px] px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 shadow-[0_8px_30px_-8px_rgba(239,156,49,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(239,156,49,0.6)] hover:-translate-y-0.5"
          >
            {showAll ? "Show Less" : "Explore All Solutions"}
            {showAll ? (
              <ChevronUp size={18} className="transition-transform" />
            ) : (
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
