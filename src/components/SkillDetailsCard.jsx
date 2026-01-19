import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const SkillDetailsCard = ({skill}) => {
  console.log(skill);
  return (
    <div className="space-y-5">
      <img className="w-full h-full object-cover" src={skill.image} alt="" />
      <h2 className="text-2xl">Skill Name : {skill.skillName}</h2>
      <p>Description : {skill.description}</p>
      <p>Provider Name : {skill.providerName}</p>
      <p>Provider Email : {skill.providerEmail}</p>
      <p>Cateory : {skill.category}</p>
      <p>Price : $ {skill.price}</p>
      <p>Rating : {skill.rating}</p>
      <Link to={"/"}><button className="bg-yellow-300 p-2 rounded-2xl">Go to home page</button></Link>
    </div>
  );
};

export default SkillDetailsCard;