import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface IndustryCard {
  title: string;
  image: string;
  label: string;
}

const industries: IndustryCard[] = [
  {
    title: "Healthcare",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=90",
    label: "Healthcare",
  },
  {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90",
    label: "Real Estate",
  },
  {
    title: "Hospitality",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=90",
    label: "Hospitality",
  },
  {
    title: "Technology",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=90",
    label: "Technology",
  },
  {
    title: "Retail",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=95",
    label: "Retail",
  },
  {
    title: "Finance",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=90",
    label: "Finance",
  },
  {
    title: "Customer Service",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1600&q=95",
    label: "Customer Service",
  },
  {
    title: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=95",
    label: "Education",
  },
  {
    title: "Communications & Media",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=95",
    label: "Communications & Media",
  },
];

const IndustriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === "left" 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white py-20 md:py-30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-full md:max-w-160">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-[1.2]">
              Industries we work with
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#4A4A4A] leading-[1.6] max-w-150">
              Our business solutions were founded by the strong believe in the need of the business and the customer to establish a strong relationship to facilitate the ongoing relationship between both of them
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#00003d] text-white hover:bg-[#ef9c31] transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#00003d] text-white hover:bg-[#ef9c31] transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
{industries.map((item, index) => (
              <div 
                key={index} 
                className="shrink-0 w-60 sm:w-65 md:w-70 h-80 sm:h-87.5 md:h-95 rounded-[20px] md:rounded-3xl overflow-hidden relative group snap-start cursor-pointer bg-[#00003d]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#00003d]/90 via-[#00003d]/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                  <span className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-[11px] font-semibold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full mb-2 md:mb-3 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <h3 className="text-white text-[18px] md:text-[22px] font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>

    </section>
  );
};

export default IndustriesSection;