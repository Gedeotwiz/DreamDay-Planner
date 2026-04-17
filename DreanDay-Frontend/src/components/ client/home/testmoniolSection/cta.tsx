

const ClientTestimonialCTASection = () => {
  return (
    <div className="w-[460px] flex flex-col gap-4 items-start flex-shrink-0 sticky left-0">
      <h2 className="text-3xl font-bold">
        Beautiful <span className="text-[#a6c1ee]">Stories</span>
      </h2>

      <p className="text-gray-600">
        Read what people are saying about the support they received.
      </p>

      <button className="mt-2 px-6 py-2 bg-[#a6c1ee] text-white rounded-lg hidden">
        More Stories
      </button>
    </div>
  );
};

export default ClientTestimonialCTASection;