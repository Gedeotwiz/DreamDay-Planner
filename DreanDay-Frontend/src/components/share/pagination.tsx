import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IProps{
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>;
    totalPages:number

}

const Pagination = ({ page, setPage, totalPages }:IProps) => {

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex justify-end pr-1 md:pr-6">
      <div className="flex items-center gap-4 bg-transparent p-4 rounded-2xl">
        
        <button
          onClick={handlePrev}
          className={`p-3 rounded-xl ${
            page > 1
              ? "bg-secondary text-white"
              : "bg-gray-200"
          }`}
        >
          <FaChevronLeft />
        </button>

        <div className="px-6 py-2 rounded-xl text-lg font-semibold border">
          {page.toString().padStart(2, "0")}
        </div>

        <button
          onClick={handleNext}
          className={`p-3 rounded-xl ${
            page < totalPages
              ? "bg-secondary text-white"
              : "bg-gray-200"
          }`}
        >
          <FaChevronRight />
        </button>

      </div>
    </div>
  );
};

export default Pagination;