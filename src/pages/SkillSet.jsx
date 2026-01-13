import React from 'react';
import { useLoaderData } from 'react-router';

const SkillSet = () => {
    const skill=useLoaderData();
    console.log(skill)
    return (
        <div>
            
        </div>
    );
};

export default SkillSet;