import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from "react-icons/hi";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
  const [searchBar, setSearchBar] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    e.target.reset();
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

  if (nav === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <div className={nav === true ? "" : "top-0 max-w-[1200px] mx-auto"}>
      <div className="flex flex-col">
        <div className=" h-10 md:h-16 lg:h-24 flex flex-row justify-start items-center mt-1">
          <div>
            <div className="flex">
              <HiOutlineMenu
                className={
                  nav
                    ? "hidden"
                    : " text-2xl ml-3 cursor-pointer md:text-3xl lg:text-4xl lg:hidden"
                }
                onClick={() => setNav(true)}
              />
              <HiOutlineSearch
                className={
                  nav
                    ? "hidden"
                    : "text-2xl ml-1 cursor-pointer md:text-3xl lg:hidden"
                }
                onClick={() => {
                  setNav(!nav);
                }}
              />
              <form
                className={
                  nav || searchBar === true
                    ? "hidden"
                    : "ml-2 hidden lg:flex justify-center"
                }
                onSubmit={handleSearch}
                autoFocus
                onChange={(e) => setSearch(e.target.value)}>
                <input
                  type="text"
                  name=""
                  id=""
                  autoFocus
                  placeholder="SEARCH"
                  className="border-2 w-64 py-1 px-2 rounded"
                />
                <button
                  type="submit"
                  onClick={() => setSearchBar(!searchBar)}
                  className="ml-2 bg-slate-300 text-xs p-2 rounded text-white font-bold">
                  GO
                </button>
              </form>
            </div>
            <p
              className={
                nav
                  ? "hidden"
                  : "hidden font-bold text-[4xl] ml-2 lg:block lg:mt-2 "
              }>
              {todayDate}
            </p>
          </div>
          <h1 className=" absolute left-[25%] right-[25%] text-center font-ancient text-2xl md:text-4xl lg:text-6xl ">
            <Link to={"/"}>The New York Times</Link>
          </h1>
          <HiOutlineX
            className={
              nav
                ? "text-2xl md:text-3xl lg:text-4xl cursor-pointer absolute right-0 mr-2"
                : "hidden"
            }
            onClick={() => setNav(false)}
          />
        </div>
        <div className="h-[35px] bg-[#f7f7f7] border-y-2 border-[#e2e2e2] flex items-center lg:h-[60px] lg:bg-white">
          <p className="font-bold text-[0.7rem] ml-2 lg:hidden">{todayDate}</p>
          <ul className="hidden lg:flex flex-row mx-auto place-content-center justify-center  ">
            {sections.map((section, index) => {
              return (
                <li
                  key={index}
                  className="capitalize rounded-md px-2 py-1 text-sm text-center hover:bg-slate-100 active:bg-slate-200">
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

            <li className=" rounded-md px-2 py-1 text-sm font-bold hover:bg-black hover:text-white active:bg-gray-700">
              <Link to={"/feed"}>Feed</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*  menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed w-full overflow-y-auto overscroll-y-none h-full top-12 lg:top-28 bg-white z-10"
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
            onClick={() => setNav(!nav)}
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
    </div>
  );
};

export default Navbar;
