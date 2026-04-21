/** @format */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import SearchBar from "../../share/search";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [absolute,setAbsolut]= useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const linksArray = [
    {
      name: "OUR SERVICES",
      path: "services",
    },
    {
      name: "WORK",
      path: "work",
    },
    {
      name: (
        <span className="flex items-center gap-1">
          ABOUT <ChevronDown size={16} />
        </span>
      ),
      children: [
        { name: "COMPANY", path: "company" },
        { name: "OUR STORY", path: "our-story" },
      ],
    },
  ];

  
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    if (location.pathname === "/services") {
      setShowSearch(true);
      setAbsolut(false)
    } else {
      setShowSearch(false);
      setAbsolut(true)
    }
  }, [location.pathname]);

  return (
    <div className="bg-white relative pb-5 z-40">
      <div className="flex flex-col md:flex-row items-center justify-between pr-10">
        
        
        <div className="flex items-center">
          <Link to="/">
            <img src="/WeedingLogo-.png" className="w-[250px]" alt="Logo" />
          </Link>

         
          <button
            className="block lg:hidden px-4 py-2 text-[#010c1f]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

       
        <nav className={`lg:flex ${isOpen ? "block" : "hidden"} items-center`}>
          <div className="flex w-[250px] md:w-full flex-col gap-5 pb-5 lg:flex-row lg:gap-10 items-center justify-around">
            {linksArray.map((router, index) => (
              <div key={index} className="relative" ref={dropdownRef}>
                
               
                {router.children ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === index ? null : index
                      )
                    }
                    className={`text-[#87acec] text-lg flex items-center gap-1 pb-1 ${
                      router.children.some(
                        (child) =>
                          location.pathname === `/${child.path}`
                      )
                        ? "border-b-2 border-[#87acec]"
                        : ""
                    }`}
                  >
                    {router.name}
                  </button>
                ) : (
                  <Link
                    to={`/${router.path}`}
                    className={`text-[#87acec] text-lg pb-1 ${
                      location.pathname === `/${router.path}`
                        ? "border-b-2 border-[#87acec]"
                        : ""
                    }`}
                  >
                    {router.name}
                  </Link>
                )}

                
                {router.children && openDropdown === index && (
                  <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                    {router.children.map((item, i) => (
                      <Link
                        key={i}
                        to={`/${item.path}`}
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-4 py-2 text-sm ${
                          location.pathname === `/${item.path}`
                            ? "bg-[#fbc2eb] text-white"
                            : "text-gray-700 hover:bg-[#fbc2eb] hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex items-center gap-5 mt-4 lg:mt-0`}
        >
          <div
            className="text-[#a6c1ee] hidden md:block bg-gray-100 p-3 rounded-full cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <FaSearch />
          </div>

          <Link
            to="/login"
            className="text-[#87acec] px-5 py-2 rounded-md border-2 border-[#87acec] hover:bg-[#87acec] hover:text-white transition"
          >
            SIGN IN
          </Link>
        </div>
      </div>

      <div
        className={`w-full bg-white flex pb-10 flex-col justify-center items-center transition-all duration-300 ${absolute ? "absolute":""}  ${
          showSearch ? "block" : "hidden"
        }`}
      >
      <SearchBar/>
      </div>
    </div>
  );
}

export default Navbar;