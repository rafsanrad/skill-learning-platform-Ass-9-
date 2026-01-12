import React from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { Link } from "react-router";
import logo from "../assets/skill-logo.png"

const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-13.75" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink  to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink  to={"/profile"}>My Profile</MyLink>
          </li>
        </ul>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
