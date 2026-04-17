
import ClientSingleTestimony from "./singleTestemoniol";


import img1 from "/flower.png";
import img2 from "/dress.png";
import img3 from "/cake.jpg";

const ClientSingleTestimonies = () => {
  const testimonies = [
    {
      description:
        "I now have school materials and a new school uniform after a total stranger bought me one.",
      src: img1,
    },
    {
      description:
        "As a school in a remote area, we are deeply thankful for the books you've provided.",
      src: img2,
    },
    {
      description:
        "I am a student who struggled to pay school fees. Now I can focus on studies.",
      src: img3,
    },
  ];

  return (
    <div className="flex items-center gap-6 flex-shrink-0 z-40">
      {testimonies.map((item, index) => (
        <ClientSingleTestimony key={index} item={item} />
      ))}
    </div>
  );
};

export default ClientSingleTestimonies;