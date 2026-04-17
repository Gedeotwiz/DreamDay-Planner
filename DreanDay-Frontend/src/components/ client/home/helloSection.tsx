/** @format */

const HelloSections=()=> {
  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="relative z-10  h-full px-10">
        <div className="font-[poppins] text-white absolute top-1/4 left-20">
          <h2 className="text-[4vh] md:text-[8vh] font-bold neon-text-head">
            Prepare Your
          </h2>

          <p className="text-[2.5vh] md:text-[5vh] mt-4 neon-text-head">
            Ceremony
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelloSections;