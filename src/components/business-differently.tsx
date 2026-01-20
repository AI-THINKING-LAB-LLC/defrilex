import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const accordionItems = [
{
  title: "Built on Real Experience",
  content: "Since 2015, we've been solving multilingual communication challenges for healthcare, legal, and government clients. Every solution we bring you comes from actually running a successful BPO—not theoretical frameworks or consultant decks. We know what works because we've tested it in our own operations serving demanding, regulated industries."
},
{
  title: "The Right Size to Actually Care",
  content: "We're big enough to handle complex, multi-language projects across dozens of countries. But we're focused enough that your business gets treated like it matters—because it does. You won't get lost in a bureaucracy or assigned to junior account managers. When you work with Defrilex, you work with people who have skin in the game."
},
{
  title: "Humans + Technology, Not One or the Other",
  content: "We're building AI systems through AI Thinking Lab while running a traditional BPO through Defrilex. That gives us a unique perspective: AI should amplify human expertise, not replace it. Our approach combines smart automation with trained professionals who bring judgment, cultural understanding, and real communication skills. The future isn't choosing between people and technology—it's using both intelligently."
},
{
  title: "Values That Actually Drive Results",
  content: "Our founder is a faith leader and entrepreneur who built this company on principles that matter: integrity, excellence, and genuine service. We don't have corporate giving programs to advertise—but we do have team members who take pride in their work and clients who stick with us because we deliver. Purpose isn't a marketing campaign for us; it's how we operate every day."
},
{
  title: "Results, Not Recommendations",
  content: "We don't hand you a strategy presentation and disappear. We build it, run it, and make it work. You need interpreters vetted and certified? We do it. You need 24/7 coverage across multiple languages? We staff it. You need compliance with GDPR, HIPAA, and PCI-DSS? We've already done the work. We're in the business of delivering outcomes, not PowerPoints."
}];


const badges = [
{ text: "HIPAA Compliant", icon: "🏥" },
{ text: "GDPR Certified", icon: "🔒" },
{ text: "PCI-DSS", icon: "💳" },
{ text: "ISO 27001", icon: "✓" },
{ text: "Since 2015", icon: "📅" },
{ text: "300+ LANGUAGES", icon: "🌐" }];


export default function BusinessDifferently() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  return (
    <section className="relative w-full overflow-hidden py-[80px] md:py-[100px] lg:py-[140px] px-4 md:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E0F2F1]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-[#C8E6C9]/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-[#B2DFDB]/30 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          <div className="w-full lg:w-[55%]">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[60px] font-light text-[#1A1A1A] leading-[1.1] mb-8 md:mb-12 lg:mb-16">
              We Do Business{' '}
              <span className="font-bold">differently</span>
            </h2>

            <div className="space-y-0">
              {accordionItems.map((item, index) =>
              <div
                key={index}
                className="border-b border-[#1A1A1A]/10">

                  <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full py-4 md:py-5 flex items-center justify-between text-left transition-all duration-300 group ${
                  openIndex === index ?
                  'border-l-4 border-[#8B5CF6] pl-3 md:pl-4 -ml-3 md:-ml-4' :
                  ''}`
                  }>

                    <span className={`text-[15px] md:text-[18px] lg:text-[20px] font-medium transition-colors duration-300 pr-4 ${
                  openIndex === index ? 'text-[#8B5CF6]' : 'text-[#1A1A1A] group-hover:text-[#4A4A4A]'}`
                  }>
                      {item.title}
                    </span>
                    <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 text-[#6A6A6A] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''}`
                    } />

                  </button>
                  
                  <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`
                  }>

                    <p className="pb-4 md:pb-6 text-[13px] md:text-[15px] lg:text-[16px] leading-[1.7] text-[#4A4A4A] pr-4 md:pr-8">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 w-full">
              {badges.map((badge, index) =>
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[100px] md:min-h-[120px]">

                  <span className="text-[24px] md:text-[28px] lg:text-[32px] mb-1 md:mb-2">{badge.icon}</span>
                  <span className="text-[11px] md:text-[13px] lg:text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide">
                    {badge.text}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}