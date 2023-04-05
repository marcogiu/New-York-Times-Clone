import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from "react-icons/hi";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Get today date and format it
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const todayDate = new Date().toLocaleDateString("en-En", options);

  const { sections, formatSection } = useGlobalContext();

  return (
    <>
      <div className="h-[85px] flex flex-col">
        <div className=" h-10 md:h-16 lg:h-24 flex flex-row justify-start items-center mt-1">
          <HiOutlineMenu
            size={20}
            className={nav ? "hidden" : "ml-3 cursor-pointer"}
            onClick={() => setNav(!nav)}
          />
          <HiOutlineSearch
            size={20}
            className={nav ? "hidden" : "ml-1 cursor-pointer"}
          />
          <h1 className=" absolute left-[25%] right-[25%] text-center font-ancient text-2xl md:text-4xl ">
            <Link to={"/"}>The New York Times</Link>
          </h1>
          <HiOutlineX
            size={24}
            className={nav ? "cursor-pointer absolute right-0 mr-2" : "hidden"}
            onClick={() => setNav(!nav)}
          />
        </div>
        <div className="h-[35px] bg-[#f7f7f7] border-y-2 border-[#e2e2e2] flex items-center">
          <p className="font-bold text-[0.7rem] ml-2">{todayDate}</p>
        </div>
      </div>

      {/*  menu */}
      <div
        className={
          !nav ? "hidden" : "absolute w-full h-full top-12 bg-white z-10"
        }>
        <div className="w-full flex justify-center  mt-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="  SEARCH"
            className="border-2 w-64 rounded"
          />
          <button className="ml-2 bg-slate-300 text-xs p-2 rounded text-white font-bold">
            GO
          </button>
        </div>
        <div className="mt-4">
          <h4 className="font-bold font-franklin ml-[20%] mb-4">News</h4>
          <ul className="grid grid-cols-2 place-content-center mx-[20%] gap-4 mb-4">
            {sections.map((section, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setNav(!nav)}
                  className="capitalize text-md">
                  {section === "home" ? (
                    <Link to={"/"}>{formatSection(section)}</Link>
                  ) : (
                    <Link to={`section/${section}`}>
                      {formatSection(section)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
