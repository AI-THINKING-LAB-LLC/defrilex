import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Country {
  name: string;
  imageUrl: string;
  alt: string;
}

const countries: Country[] = [
  {
    name: "Argentina",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/76r0uGB2bnEes7PuYXUIVV/98135693a345bd551b4950cf2a3f7c3b/argentina_2.jpg",
    alt: "Argentina",
  },
  {
    name: "Australia & New Zealand",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/BsHwd8zLuiIhf675eQbcD/a8867a564c8b9bf041802f62654d36c3/Sydney-harbor.jpg",
    alt: "Sydney-harbor",
  },
  {
    name: "Austria",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/63iDUR8kvRJ5y7bJE5IVKh/a1184c9ce335bd15f45a419eda98c70f/Austria.jpeg",
    alt: "Austria locations image",
  },
  {
    name: "Bosnia & Herzegovina",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/jU9xkwl9lN960bDc1a6UP/0e0650e5cec6d0785ee4adef1619699a/Bosnia-Locations.jpeg",
    alt: "Bosnia & Herzegovina",
  },
  {
    name: "Brazil",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/14CDgMGKMShN9G6mFoZZfr/f990597758da64d8706430914e6ad422/brazil__4_.jpg",
    alt: "locations - Brazil",
  },
  {
    name: "Bulgaria",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6EZRBizBiZgLLrfFOSAdWZ/b5021b8edd5651b8500a69599a7acc3c/country_bulgaria.jpg",
    alt: "country bulgaria (1) - Locations landing",
  },
  {
    name: "Canada",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/69wFwuHU2XsxMMK7iVGFBL/d5076a70bdf2b5ccedbdfa2b337b2498/image__32___1_.png",
    alt: "locations - Canada",
  },
  {
    name: "China",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/5om38A5ZLjzQQEWH5aaEaY/3d338ffdc05e8a5bb11236bd7e96068d/country_china.jpeg",
    alt: "country china - Locations landing",
  },
  {
    name: "Costa Rica",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/3PQ0XVCPkco5iEFlessh5i/7225b39f9588a573b2061dc93334117d/careers_costarica.jpeg",
    alt: "locations - Costa Rica",
  },
  {
    name: "Czechia",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/2BTt7kmX68vm22NgqLd8nv/e0f4a7dbfad8cd46636be352b718b05a/czech__2_.jpg",
    alt: "Locations Country Czech",
  },
  {
    name: "Denmark",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/2j4UJXYwZseXqltF8bba7Q/225c39ed27407f9f075614943115fe7d/careers_denmark.jpeg",
    alt: "careers denmark",
  },
  {
    name: "El Salvador",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/1KzGh08C00tUwjy8WHtfNp/e9e6db5a9629ae84ff48d87aa990413e/country_el_salvador.jpeg",
    alt: "El Salvador country - Locations landing",
  },
  {
    name: "Finland",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/1Ib8LXnEDpkS0UJXFcsBP5/0a51bf6017e66663ddb687506e1cd6da/careers_finland.jpeg",
    alt: "careers finland",
  },
  {
    name: "France",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/3JzvcWL3Jm7KqMVVIIOPSd/7f6283c5f7f65a323ae9714da435f524/France-Locations.jpg",
    alt: "France-Locations",
  },
  {
    name: "Germany",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/71kKsauqLGzlPaqdSf4isX/fc8b1bb29478afc25df8182e51095474/Germany-Preview.jpg",
    alt: "Germany-Preview",
  },
  {
    name: "Guatemala",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6elVLcymDJbkoq32G4g4em/9a6678ef7f9d5af61e4f39a6aba73323/country_guatemala.jpg",
    alt: "Guatemala country - locations landing",
  },
  {
    name: "India",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/2EoMGpcVFxDy43pEbCrWd6/fadc9078f99fb7c627c0be667a3aff5b/country_india.jpg",
    alt: "country india (1) - Locations landing",
  },
  {
    name: "Indonesia",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6HdvWyQo66Z4GSwMVhCy8u/cef4a8dc4479a5abfdb50ebeaf4273ba/Indonesia.jpg",
    alt: "Indonesia",
  },
  {
    name: "Ireland",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/1OYNCBQYrsam8TcmJCYCW2/1800299c3aace047898914f3e9cf43c2/country_ireland.jpg",
    alt: "country ireland (1) - Locations landing",
  },
  {
    name: "Japan",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/4eqmkRcOhZMCWRbxAamic9/dc3274d8de6c186b29e7473bc75a4a4c/country_japan.jpeg",
    alt: "Locations - Japan",
  },
  {
    name: "Latvia",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/7j3g0dVGDulFDqReprJ9IS/594a709da1f4c8b327af3c7fece9dd4a/Riga---Locations.jpg",
    alt: "Riga---Locations",
  },
  {
    name: "Morocco",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/3tvxSBObrfdBiSqklDGhhJ/d8623118d0841126478396354ef21f9e/morocco-533x300.jpg",
    alt: "Country Morocco - Locations Landing",
  },
  {
    name: "Philippines",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/5mcwkke4oCCVcigseuBoGx/4f6102b773a2a286f23e2656c2e9965c/country_philippines.jpg",
    alt: "country philippines (1) - Locations landing",
  },
  {
    name: "Poland",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/7spa7dziwBOT2HBQj5Q7c4/65ba4bfd7b382ec6f86a88a5dfa5e6b3/Poland-Locations-min.jpeg",
    alt: "Poland locations image",
  },
  {
    name: "Portugal",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/4PBA6nH2FLzEnqjtYeNTzF/51247395f7f1c29db9599ae1b51eaaf1/portugal__3_.jpg",
    alt: "Locations Country Portugal",
  },
  {
    name: "Romania",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/7FzbEG82B8FWQkExDJkTbd/7ff470f3cd3a32d461b6ad900f0b83a4/country_romania.jpg",
    alt: "country romania (1) - Locations landing",
  },
  {
    name: "Singapore",
    imageUrl:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Singapore skyline",
  },
  {
    name: "Slovakia",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/5BmVuj2OsyAxMwZktPXryl/ba7203e7909107f956771525b52880cb/Slovakia-Locations-min.jpeg",
    alt: "Slovakia location image",
  },
  {
    name: "South Africa",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/Aro2UTqe0S8uJNVRULmye/9e06492f542945213208766e0317e9b3/south-africa-533x300.jpg",
    alt: "Country South Africa - Locations Landing",
  },
  {
    name: "South Korea",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6awdfmbiAGq8Y4QlrC6UO7/12594a4a517578c464f7e86798ec5d1d/careers_southkorea.jpeg",
    alt: "locations - South Korea",
  },
  {
    name: "Spain",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/BMSuyeK0XdV6jLm1JcoTF/3d0b8f951de902cf05138b862ee2dc7d/barcelonapreview.png",
    alt: "barcelonapreview",
  },
  {
    name: "Thailand",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6TIvwhKQL8jCRDfmGR14Gp/34d5c27626de18c4d384f47f043bcf6e/Thailand.jpg",
    alt: "Thailand",
  },
  {
    name: "Turkey",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/ilmxy3Bl3D2idy1xiRjmi/1d5083a331e9ab92e14549247c795f09/turkey-fooseball.jpg",
    alt: "country Türkiye (1) - Locations landing",
  },
  {
    name: "United Arab Emirates",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/4lNHSh1cYA8KIXuvr5c0T6/4d26fb23f3be1e8a5403aa0f44e4891c/dubai_title.jpg",
    alt: "Dubai title",
  },
  {
    name: "United Kingdom",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/6OLUO4fKpxsygNvbBplqoG/95a9553e1acc52959739d6d1059628cf/Careers_UK.jpg",
    alt: "banner UK location 01",
  },
  {
    name: "United States",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/4WR5GTuWt0zotB9oMdDOCW/057b2c3b428fb96bb6ab64c2a84d649c/country_us.jpg",
    alt: "US & Canada country - locations",
  },
  {
    name: "Vietnam",
    imageUrl:
      "https://images.ctfassets.net/3viuren4us1n/Zpl51t5ORM8vFz68JAyJv/80403d5a5cf043a31274a29955bc2b39/Vietnam.jpg",
    alt: "Vietnam",
  },
];

const ContactLocation: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative w-full py-8 md:py-12">
        <div className="flex items-center gap-7 overflow-x-auto">
          {countries.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="relative shrink-0 w-[270px] h-[194px] overflow-hidden rounded-lg"
            >
              <img
                alt={country.alt}
                fetchPriority="low"
                loading="lazy"
                width={270}
                height={134}
                decoding="async"
                src={country.imageUrl}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-[#00003d] text-white backdrop-blur-sm text-sm py-[10px] px-[18px] ml-4 rounded-tl-lg">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full py-8 md:py-12">
      <Marquee
        speed={70}
        gradient={true}
        gradientColor="white"
        gradientWidth={80}
        pauseOnHover={true}
        autoFill={true}
        direction="left"
      >
        {countries.map((country, index) => (
          <div
            key={`${country.name}-${index}`}
            className="relative shrink-0 mr-7 w-[270px] h-[194px] overflow-hidden rounded-lg"
          >
            <img
              alt={country.alt}
              fetchPriority="low"
              loading="lazy"
              width={270}
              height={134}
              decoding="async"
              src={country.imageUrl}
              className="w-full h-full object-cover"
            />
            <span className="motion-reduce:hidden absolute bottom-0 left-0 bg-[#00003d] text-white backdrop-blur-sm text-sm  py-[10px] px-[18px] ml-4 rounded-tl-lg">
              {country.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ContactLocation;
