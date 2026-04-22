import ServiceCard from "./serviceCard";
import { useState,useEffect } from "react";
import Pagination from "../../share/pagination";
import { servicesArray } from "../../data/services";
import { useSearchParams } from "react-router-dom";

const ServicesComponent = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase().trim() || "";

  useEffect(() => {
    setPage(1);
  }, [search]);

  const filteredServices = servicesArray.filter((service) =>
    service.title.toLowerCase().includes(search)
  );

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;

  const selectedServices = filteredServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-20">

        {selectedServices.length > 0 ? (
          selectedServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              max_price={service.max_price}
              min_price={service.min_price}
              shipping={service.shipping}
              description={service.description}
            />
          ))
        ) : (
          <p className="text-center col-span-2">No services found</p>
        )}

      </div>

      {filteredServices.length > 0 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default ServicesComponent