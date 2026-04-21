
import ClientSingleTestimony from "./singleTestemoniol";


import img1 from "/flower.png";
import img2 from "/dress.png";
import img3 from "/cake.jpg";

const ClientSingleTestimonies = () => {
  const testimonies = [
    {
      description:
        "The flowers are beautifully arranged and perfect for weddings. Honestly, this website made my wedding look amazing.",
      src: img1,
    },
    {
      description:
        "The services offered here are affordable and of high quality—they dress you in a way that suits you perfectly",
      src: img2,
    },
    {
      description:
        "This website provides excellent and fast services. I recently requested them to deliver a cake to me, and it arrived quickly and at a low price.",
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