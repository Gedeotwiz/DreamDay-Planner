import { Mic } from "lucide-react";
import { FaSearch, } from "react-icons/fa";

const SearchBar = () =>{
   return (
    
   <div className=" w-full md:w-1/2 px-10 flex pt-5 flex-col gap-6 justify-center items-center">
    
      <div className="relative w-full">

      <div className="absolute left-6 top-1/2 -translate-y-1/2">
         <FaSearch size={18} /> 
      </div>

        <input
          type="text"
          placeholder="Search services..."
           className="w-full bg-[#eeee] pl-14 pr-3 py-4 border-0 rounded-3xl outline-none"
        />
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer" 
        >
          <Mic size={18} />
        </div>
        </div>
   </div>
   )
}
export default SearchBar