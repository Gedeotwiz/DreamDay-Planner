import { useParams } from "react-router-dom";
import ServiceCard from "./serviceCard";
import { servicesArray } from "../../data/services";

const SingleService = () => {
  const { id } = useParams();

  const service = servicesArray.find(
    (item) => item.id === Number(id)
  );

  if (!service) return <p>Service not found</p>;

  return (
    <div className="px-10 py-20 md:px-20">
      <ServiceCard
        id={service.id}
        title={service.title}
        max_price={service.max_price}
        min_price={service.min_price}
        shipping={service.shipping}
        description={service.description}
      />
    </div>
  );
};

export default SingleService;