
import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { image, skillName, rating, price, description,skillId } = skill;
  return (
    <div className="card shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl">
      <figure className="px-10 pt-5">
        <img src={image} alt="skill" className="rounded-xl" />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title justify-center">{skillName}</h2>

        <p>{description}</p>

        {/* Flex row */}
        <div className="flex justify-between items-center mt-3">
          <p className="font-semibold text-gray-500 text-lg">
            Price: $ {price}
          </p>
          <p className="font-semibold flex justify-center items-center text-gray-500 text-lg">
            Rating: <MdOutlineStarBorderPurple500 /> {rating}
          </p>
        </div>

        <div className="card-actions justify-center mt-4">
          <Link to={`/skill-details/${skillId}`}><button className="btn bg-orange-400">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
