import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const tabs = [
  { id: "remote", label: "Remote Interpretation" },
  { id: "cx", label: "Customer Experience" },
  { id: "startups", label: "Start-ups cx Solutions" },
  { id: "ai", label: "AI Automation" },
];

const content: Record<
  string,
  { title: string; desc: string; icon: string; href: string }[]
> = {
  remote: [
    {
      title: "Over the Phone Interpretation",
      desc: "Instant language support through professional interpreters, available on-demand over the phone.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a825609087f8a9ad4_Kalam_20Over_20the_20Phon-1.png",
      href: "/solutions/remote-interpretation/opi",
    },
    {
      title: "Video Remote Interpretation",
      desc: "Seamless interpretation via video for enhanced communication across languages and distances.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3b59b25a2ba8b5ba31_Kalam_20Video_20Remote_20-2.png",
      href: "/solutions/remote-interpretation/vri",
    },
    {
      title: "Sign Language Interpretation",
      desc: "Professional sign language services bridging communication gaps for the hearing-impaired.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a59b25a2ba8b5b816_Kalam_20Sign_20Language_2-3.png",
      href: "/solutions/remote-interpretation/sign-language",
    },
  ],

  cx: [
    {
      title: "Customer Service",
      desc: "Delivering top-tier customer experiences with responsive, knowledgeable support teams.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c394ed8e88e1b37e721_Kalam_20Customer_20Servic-4.png",
      href: "/solutions/customer-experience/customer-service",
    },
    {
      title: "Sales Generation",
      desc: "Driving revenue growth through targeted and effective sales outreach strategies.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a38786b0e8b6e6204_Kalam_20Sales_20Generatio-5.png",
      href: "/solutions/customer-experience/sales-generation",
    },
    {
      title: "Technical Support",
      desc: "Expert technical assistance to resolve issues quickly and keep your operations running smoothly.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a825609087f8a9ad4_Kalam_20Over_20the_20Phon-1.png",
      href: "/solutions/customer-experience/technical-support",
    },
    {
      title: "Chat Support",
      desc: "Real-time chat assistance providing instant solutions to customer inquiries.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3b59b25a2ba8b5ba31_Kalam_20Video_20Remote_20-2.png",
      href: "/solutions/customer-experience/chat-support",
    },
    {
      title: "Omnichannel",
      desc: "Unified customer experience across all communication channels for seamless interactions.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a59b25a2ba8b5b816_Kalam_20Sign_20Language_2-3.png",
      href: "/solutions/customer-experience/omnichannel",
    },
    {
      title: "Social Media Support",
      desc: "Engaging with customers on social platforms to build relationships and resolve concerns.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c394ed8e88e1b37e721_Kalam_20Customer_20Servic-4.png",
      href: "/solutions/customer-experience/social-media-support",
    },
  ],

  startups: [
    {
      title: "Human Resources Outsourcing",
      desc: "Comprehensive HR solutions to manage your workforce efficiently and compliantly.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a825609087f8a9ad4_Kalam_20Over_20the_20Phon-1.png",
      href: "/solutions/startup-support/hr-outsourcing",
    },
    {
      title: "Payroll Processing",
      desc: "Accurate and timely payroll services to ensure your team is compensated correctly.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3b59b25a2ba8b5ba31_Kalam_20Video_20Remote_20-2.png",
      href: "/solutions/startup-support/payroll-processing",
    },
    {
      title: "Billing Support",
      desc: "Professional billing management to streamline your financial operations.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a59b25a2ba8b5b816_Kalam_20Sign_20Language_2-3.png",
      href: "/solutions/startup-support/billing-support",
    },
    {
      title: "Back-office Support",
      desc: "Essential administrative services to keep your business running smoothly behind the scenes.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c394ed8e88e1b37e721_Kalam_20Customer_20Servic-4.png",
      href: "/solutions/startup-support/back-office-support",
    },
    {
      title: "Virtual Assistant",
      desc: "Dedicated virtual assistants to handle tasks and boost your productivity.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a38786b0e8b6e6204_Kalam_20Sales_20Generatio-5.png",
      href: "/solutions/startup-support/virtual-assistant",
    },
  ],

  ai: [
    {
      title: "Chatbot",
      desc: "Intelligent AI-powered chatbots to automate customer interactions 24/7.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a825609087f8a9ad4_Kalam_20Over_20the_20Phon-1.png",
      href: "/solutions/ai-automation/chatbot",
    },
    {
      title: "AI Translation",
      desc: "Advanced machine translation enhanced by human expertise for accurate results.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3b59b25a2ba8b5ba31_Kalam_20Video_20Remote_20-2.png",
      href: "/solutions/ai-automation/ai-translation",
    },
    {
      title: "AI Voice Agents",
      desc: "Automated voice solutions for handling routine calls and inquiries.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a59b25a2ba8b5b816_Kalam_20Sign_20Language_2-3.png",
      href: "/solutions/ai-automation/ai-voice-agents",
    },
    {
      title: "Data for AI Training",
      desc: "High-quality multilingual datasets and annotations to train and improve your AI models.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c394ed8e88e1b37e721_Kalam_20Customer_20Servic-4.png",
      href: "/solutions/ai-automation/data-training",
    },
  ],
};

const SolutionsMegaMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("remote");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed left-0 right-0 mx-auto top-28.75 w-[calc(100%-2rem)] max-w-240 bg-white shadow-2xl rounded-3xl p-6 md:p-8 z-1001"
      style={{
        animation: "fadeSlideIn 0.25s ease-out forwards",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:w-60 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap text-left px-5 py-3.5 rounded-xl font-medium transition-all text-[14px] ${
                activeTab === tab.id
                  ? "bg-[#00003d] text-white shadow-lg"
                  : "bg-transparent text-[#1A1A1A] hover:bg-[#F0F0FF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(content[activeTab] || []).map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group p-5 rounded-2xl hover:bg-[#F0F0FF] border border-transparent hover:border-[#D1D1FF] transition-all"
            >
              <div className="w-11 h-11 mb-4 rounded-xl bg-[#F0F0FF] flex items-center justify-center overflow-hidden">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#4A4A4A] text-[13px] leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const CompanyMegaMenu = ({ onClose }: { onClose: () => void }) => {
  const companyItems = [
    {
      title: "About Defrilex",
      desc: "Learn more about Defrilex, our mission, values, and commitment to delivering exceptional multilingual solutions.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a825609087f8a9ad4_Kalam_20Over_20the_20Phon-1.png",
      href: "/company/about",
    },
    {
      title: "Why Defrilex",
      desc: "Discover what makes Defrilex different—proven results, flexible pricing, and a partner that actually delivers.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3b59b25a2ba8b5ba31_Kalam_20Video_20Remote_20-2.png",
      href: "/company/why-defrilex",
    },
    {
      title: "Our Team",
      desc: "Meet the leadership team that makes Defrilex a trusted partner for multilingual communication solutions.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c3a59b25a2ba8b5b816_Kalam_20Sign_20Language_2-3.png",
      href: "/company/our-team",
    },
    {
      title: "Contact Us",
      desc: "Get in touch with our team for multilingual BPO services, interpretation, translation, and 24/7 support.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/79d6b238-278f-4c8e-a7ff-62656440c3cd-kalam-cx/assets/icons/66e10c394ed8e88e1b37e721_Kalam_20Customer_20Servic-4.png",
      href: "/company/contact",
    },
  ];

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed left-0 right-0 mx-auto top-28.75 w-[calc(100%-2rem)] max-w-240 bg-white shadow-2xl rounded-3xl p-6 md:p-8 z-1001"
      style={{
        animation: "fadeSlideIn 0.25s ease-out forwards",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {companyItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href || "#"}
            className="group p-5 rounded-2xl hover:bg-[#F0F0FF] border border-transparent hover:border-[#D1D1FF] transition-all"
          >
            <div className="w-11 h-11 mb-4 rounded-xl bg-[#F0F0FF] flex items-center justify-center overflow-hidden">
              <img
                src={item.icon}
                alt={item.title}
                className="w-7 h-7 object-contain"
              />
            </div>
            <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2 leading-tight whitespace-pre-line!">
              {item.title}
            </h3>
            <p className="text-[#4A4A4A] text-[13px] leading-relaxed line-clamp-2">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) setActiveMenu(null);
    else setActiveMenu(menu);
  };

  const closeMenu = () => setActiveMenu(null);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-1000 px-4 pt-6 md:pt-10 pb-4">
        <div className="container mx-auto max-w-7xl flex justify-center">
          <div
            ref={navRef}
            className={`relative flex items-center justify-between w-full max-w-240 h-17.5 md:h-18.75 bg-[#00003d] rounded-[15px] pl-6 md:pl-10 pr-4 md:pr-5 transition-all duration-300 ${
              isScrolled ? "scale-[0.97] shadow-2xl" : "scale-100"
            }`}
          >
            <div className="shrink-0">
              <a
                href="/"
                className="inline-block relative w-25 md:w-32.5 h-9 md:h-10"
              >
                <img
                  src="/logo_dark.png"
                  alt="Defrilex Logo"
                  className="object-contain"
                />
              </a>
            </div>

            <nav className="hidden lg:flex grow items-center justify-center">
              <ul className="flex items-center space-x-1">
                <li>
                  <button
                    onClick={() => toggleMenu("solutions")}
                    className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white/90 hover:text-white transition-colors uppercase tracking-wider ${
                      activeMenu === "solutions" ? "text-white" : ""
                    }`}
                  >
                    Solutions
                    {activeMenu === "solutions" ? (
                      <X size={13} className="opacity-70" />
                    ) : (
                      <ChevronDown size={13} className="opacity-70" />
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => toggleMenu("company")}
                    className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white/90 hover:text-white transition-colors uppercase tracking-wider ${
                      activeMenu === "company" ? "text-white" : ""
                    }`}
                  >
                    Company
                    {activeMenu === "company" ? (
                      <X size={13} className="opacity-70" />
                    ) : (
                      <ChevronDown size={13} className="opacity-70" />
                    )}
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 text-[13px] font-semibold text-white/90 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 text-[13px] font-semibold text-white/90 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    Academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.defrilex.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-[13px] font-semibold text-white/90 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </nav>

            <div className="shrink-0 relative flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <button
                onClick={() =>
                  setActiveMenu(activeMenu === "signin" ? null : "signin")
                }
                className="relative group inline-flex items-center justify-center gap-2 px-5 md:px-8 h-10.5 md:h-11.25 bg-[#141414] rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 text-white text-[13px] md:text-[14px] font-semibold tracking-wide">
                  Sign In
                </span>
                <ChevronDown
                  className={`relative z-10 w-4 h-4 text-white transition-transform duration-300 ${activeMenu === "signin" ? "rotate-180" : ""}`}
                />
                <div className="absolute inset-0 bg-[#00003d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>

              {activeMenu === "signin" && (
                <div className="absolute top-full right-0 mt-2 w-55 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-1001">
                  <a
                    href="https://defrilex.interpretmanager.com/ng/#/app/account/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-[#F8FAFC] transition-colors border-b border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#3B82F6]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1A1A1A]">
                      Interpreter Portal
                    </span>
                  </a>
                  <a
                    href="https://defrilex.interpretmanager.com/ng/#/app/account/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-[#F8FAFC] transition-colors border-b border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#10B981]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1A1A1A]">
                      Client Portal
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-[#F8FAFC] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#ef9c31]/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-[#ef9c31]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1A1A1A]">
                      Defrilex Talent
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#00003d] z-998 lg:hidden pt-30 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => {
                setActiveMenu(activeMenu === "solutions" ? null : "solutions");
              }}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-white border-b border-white/10"
            >
              Solutions
              <ChevronDown
                size={18}
                className={`transition-transform ${activeMenu === "solutions" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMenu === "solutions" && (
              <div className="pb-4 space-y-2">
                <a
                  href="/solutions/remote-interpretation/opi"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Over the Phone Interpretation
                </a>
                <a
                  href="/solutions/remote-interpretation/vri"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Video Remote Interpretation
                </a>
                <a
                  href="/solutions/remote-interpretation/sign-language"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Sign Language Interpretation
                </a>
                <a
                  href="/solutions/customer-experience/customer-service"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Customer Service
                </a>
                <a
                  href="/solutions/customer-experience/sales-generation"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Sales Generation
                </a>
                <a
                  href="/solutions/customer-experience/technical-support"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Technical Support
                </a>
                <a
                  href="/solutions/ai-automation/chatbot"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Chatbot
                </a>
                <a
                  href="/solutions/ai-automation/ai-translation"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  AI Translation
                </a>
              </div>
            )}

            <button
              onClick={() => {
                setActiveMenu(activeMenu === "company" ? null : "company");
              }}
              className="flex items-center justify-between py-4 text-[16px] font-semibold text-white border-b border-white/10"
            >
              Company
              <ChevronDown
                size={18}
                className={`transition-transform ${activeMenu === "company" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMenu === "company" && (
              <div className="pb-4 space-y-2">
                <a
                  href="/company/about"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  About Defrilex
                </a>
                <a
                  href="/company/why-defrilex"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Why Defrilex
                </a>
                <a
                  href="/company/our-team"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Our Team
                </a>
                <a
                  href="/company/contact"
                  className="block py-2 px-4 text-[14px] text-white/80 hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            )}

            <a
              href="#"
              className="py-4 text-[16px] font-semibold text-white border-b border-white/10"
            >
              Careers
            </a>
            <a
              href="#"
              className="py-4 text-[16px] font-semibold text-white border-b border-white/10"
            >
              Academy
            </a>
            <a
              href="https://support.defrilex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 text-[16px] font-semibold text-white border-b border-white/10"
            >
              Help
            </a>

            <div className="mt-6 space-y-3">
              <a
                href="https://defrilex.interpretmanager.com/ng/#/app/account/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 bg-white/10 rounded-xl text-white"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#3B82F6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold">
                  Interpreter Portal
                </span>
              </a>
              <a
                href="https://defrilex.interpretmanager.com/ng/#/app/account/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 bg-white/10 rounded-xl text-white"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#10B981]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold">Client Portal</span>
              </a>
            </div>
          </nav>
        </div>
      )}

      {activeMenu === "solutions" && !mobileMenuOpen && (
        <SolutionsMegaMenu onClose={closeMenu} />
      )}
      {activeMenu === "company" && !mobileMenuOpen && (
        <CompanyMegaMenu onClose={closeMenu} />
      )}

      {activeMenu && !mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-999"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
