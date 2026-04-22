import { Mic } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

 const isFirstRender = useRef(true);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return; 
  }

  const timer = setTimeout(() => {
    if (search.trim()) {
      navigate(`/services?search=${encodeURIComponent(search.trim())}`);
    } 
  }, 800);

  return () => clearTimeout(timer);
}, [search, navigate]);

  return (
    <div className="w-full md:w-1/2 px-10 flex pt-5 flex-col gap-6 justify-center items-center">
      <div className="relative w-full">

        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <FaSearch size={18} />
        </div>

        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#eeee] pl-14 pr-3 py-4 rounded-3xl outline-none"
        />

        <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
          <Mic size={18} />
        </div>

      </div>
    </div>
  );
};

export default SearchBar;