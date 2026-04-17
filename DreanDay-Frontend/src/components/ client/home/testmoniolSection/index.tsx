
import ClientTestimonialCTASection from "./cta";
import ClientSingleTestimonies from "./testmonies";

const ClientTestimonialSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-10">
      <div className="relative overflow-hidden max-w-7xl mx-auto px-6">

        
        <div className="hidden md:block absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-4 z-50">
          <button className="w-[50px] h-[50px] rounded-full bg-[#a6c1ee] text-white flex items-center justify-center">
            →
          </button>
          <button className="w-[50px] h-[50px] rounded-full bg-[#a6c1ee] text-white flex items-center justify-center">
            ←
          </button>
        </div>

        <div className="flex items-center gap-16 overflow-x-auto scroll-smooth no-scrollbar">
          <ClientTestimonialCTASection />
          <ClientSingleTestimonies />
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialSection;