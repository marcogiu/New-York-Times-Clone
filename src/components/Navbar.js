import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from "react-icons/hi";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      setSearch("search");
      navigate(`/search/${search}`);
    }
  };

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
      <div className="flex flex-col">
        <div className=" h-10 md:h-16 lg:h-24 flex flex-row justify-start items-center mt-1">
          <div>
            <div className="flex">
              <HiOutlineMenu
                size={20}
                className={nav ? "hidden" : "ml-3 cursor-pointer"}
                onClick={() => setNav(!nav)}
              />
              <HiOutlineSearch
                size={20}
                className={nav ? "hidden" : "ml-1 cursor-pointer"}
              />
            </div>
            <p
              className={
                nav ? "hidden" : "hidden font-bold text-[4xl] ml-2 lg:block "
              }>
              {todayDate}
            </p>
          </div>
          <h1 className=" absolute left-[25%] right-[25%] text-center font-ancient text-2xl md:text-4xl ">
            <Link to={"/"}>The New York Times</Link>
          </h1>
          <HiOutlineX
            size={24}
            className={nav ? "cursor-pointer absolute right-0 mr-2" : "hidden"}
            onClick={() => setNav(!nav)}
          />
        </div>
        <div className="h-[35px] bg-[#f7f7f7] border-y-2 border-[#e2e2e2] flex items-center lg:h-[60px] lg:bg-white">
          <p className="font-bold text-[0.7rem] ml-2 lg:hidden">{todayDate}</p>
          <ul className="hidden lg:flex flex-row mx-auto place-content-center justify-center  ">
            {sections.map((section, index) => {
              return (
                <li
                  key={index}
                  className="capitalize rounded-md px-2 py-1 text-md text-center hover:bg-slate-100 active:bg-slate-200">
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

            <li className=" rounded-xl px-2 py-1 font-bold hover:bg-black hover:text-white">
              <Link to={"/feed"}>Feed</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*  menu */}
      <div
        className={
          !nav ? "hidden" : "absolute w-full h-full top-12 bg-white z-10"
        }>
        <form
          className="w-full flex justify-center mt-6"
          onSubmit={handleSearch}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}>
          <input
            type="text"
            name=""
            id=""
            placeholder="  SEARCH"
            className="border-2 w-64 rounded"
          />
          <button
            type="submit"
            className="ml-2 bg-slate-300 text-xs p-2 rounded text-white font-bold">
            GO
          </button>
        </form>
        <div className="mt-4">
          <h4 className="font-bold font-franklin ml-[20%] mb-4">News</h4>
          <ul className="grid grid-cols-2 place-content-center mx-[20%] gap-4 mb-4">
            {sections.map((section, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setNav(!nav)}
                  className="capitalize text-md text-center">
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
          <Link to={"/feed"}>
            <h4 className="font-bold font-franklin ml-[20%] mb-4">Feed</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
