import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onShow }) => {
  //Todo
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <main className="w-full bg-topBarBg text-topBarText sticky top-0 z-10">
      <section className="container mx-auto py-1  flex items-center justify-between">
        <article className="flex items-center">
          <h1 className="font-bold text-2xl cursor-pointer">Tech Kilimo</h1>
        </article>
        <article className="hidden md:block">
          <ul className="flex items-center md:gap-4 gap-10 cursor-pointer">
            <NavLink to="/">
              <li className="text-base">Home</li>
            </NavLink>
            <NavLink to="/posts">
              <li className="text-base hover:text-textHeavy">About</li>
            </NavLink>
            <NavLink to="/about">
              <li className="text-base">Farmers-data</li>
            </NavLink>
            <NavLink to="/about">
              <li className="text-base">Off-takers</li>
            </NavLink>
          </ul>
        </article>
        <article className="hidden md:flex">
          <NavLink to="/about">
            <li className="text-base">Sign-in</li>
          </NavLink>
        </article>
        <article className="md:hidden">
          <div className="space-y-1 p-1.5 bg-white md:hidden cursor-pointer z-50">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
          {isExpanded && (
            <div>
              <ul className=" absolute top-0 left-0 bg-button text-white text-center rounded-b-1xl w-full space-y-10 p-10 z-20">
                <div className="flex justify-start" onClick={expand}>
                  {" "}
                  <i className="bx bx-x bx-md text-white"></i>
                </div>
                <li
                  className="cursor-pointer hover:text-textLight"
                  onClick={expand}
                >
                  <a href={`#home`}>Home</a>
                </li>
                <li
                  className="cursor-pointer hover:text-textLight"
                  onClick={expand}
                >
                  <a href={`#about`}>Reports</a>
                </li>
                <li
                  className="cursor-pointer hover:text-textLight"
                  onClick={expand}
                >
                  <a href={`#skills`}>About</a>
                </li>
              </ul>
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default Navbar;
