import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SkillDetails = () => {
  const data = useLoaderData();
  const { skillId } = useParams();
  const [skill, setSkill] = useState({});
  console.log(data, skillId);
  useEffect(() => {
    const skillDetails = data.find(
      (singleSkill) => singleSkill.skillId == skillId,
    );
    setSkill(skillDetails);
  }, [data, skillId]);

  return (
    <div>
      <Navbar></Navbar>
      <main className="mx-auto w-11/12 grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold text-3xl mb-5">Skill Details</h2>
          <SkillDetailsCard skill={skill}></SkillDetailsCard>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SkillDetails;
