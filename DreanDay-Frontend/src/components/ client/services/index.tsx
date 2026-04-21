import ServiceCard from "./serviceCard";
import { useState } from "react";
import Pagination from "../../share/pagination";
import { servicesArray } from "../../data/services";

const ServicesComponent = () => {
   const [page, setPage] = useState(1);
  const itemsPerPage = 3;
 

  const totalPages = Math.ceil(servicesArray.length / itemsPerPage);


  const startIndex = (page - 1) * itemsPerPage;
  const selectedServices = servicesArray.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20">
        {selectedServices.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            max_price={service.max_price}
            min_price={service.min_price}
            shipping={service.shipping}
            description={service.description}
          />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ServicesComponent;