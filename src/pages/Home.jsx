import React from "react";
import HeroSlider from "../components/HeroSlider";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import MyContainer from "../components/MyContainer";
import Testimonials from "../components/Testimonials";
import TopRatedProviders from "../components/TopRatedProviders";
import BookSession from "../components/BookSession";

const Home = () => {
  const skills = useLoaderData();
  //   console.log(skills);
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div>
        <div className="flex justify-center items-center mt-5 mb-5">
          <h2 className="text-3xl font-bold">Popular Skills</h2>
          <h2 className="font-bold ml-2">
            (Total <span className="text-orange-500">{skills.length}</span>{" "}
            skill here.)
          </h2>
        </div>
        <MyContainer>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill}></SkillCard>
            ))}
          </div>
          <TopRatedProviders></TopRatedProviders>
          <Testimonials></Testimonials>
          <BookSession></BookSession>
        </MyContainer>
      </div>
    </div>
  );
};

export default Home;
