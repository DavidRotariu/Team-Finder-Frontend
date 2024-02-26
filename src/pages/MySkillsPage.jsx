import GenericHeader from './components/header';
import LevelCircles from './components/skillLevel';
import { ScrollArea } from '@mantine/core';
import { Box, Portal, rem, Button } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import skillsData from './components/skillsData'
import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import { Context } from '../App';
import ExperienceCircles from './components/skillExperience';


export default function MySkillsPage() {

    const [darkMode, setDarkMode] = useContext(Context);


    const pinned = useHeadroom({ fixedAt: 20 });
    const initialLevels = skillsData.map(skill => skill.level);
    const [skillLevels, setSkillLevels] = useState(initialLevels);
    const initialExperience = skillsData.map(skill => skill.experience);
    const [skillExperience, setSkillExperience] = useState(initialExperience);
    const [changed, setChange] = useState(false)

    useEffect(() => {
        if (JSON.stringify(skillLevels) !== JSON.stringify(initialLevels) || JSON.stringify(skillExperience) !== JSON.stringify(initialExperience)) {
            setChange(true);
        }
    }, [skillLevels, skillExperience]);

    useEffect(() => {

    }, [darkMode]);

    function handleSave() {
        setChange(false);
    }

    return (
            <ScrollArea h={rem(140)}>
                <Portal>
                    <Box
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: rem(60),
                            zIndex: 1000000,
                            transform: `translate3d(0, ${pinned ? 0 : rem(-80)}, 0)`,
                            transition: 'transform 400ms ease',
                        }}
                    >
                        <GenericHeader />
                    </Box>
                    <div className={`${darkMode && 'dark'}`}>
                        <div className='dark:bg-darkcanvas bg-canvas h-screen p-[20px]'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="dark:text-darktext text-text text-xl p-5 mr-20">Skill</th>
                                        <th className="dark:text-darktext text-text text-xl p-5 mr-20">Level</th>
                                        <th className="dark:text-darktext text-text text-xl p-5 mr-20">Experience</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {skillsData.map((skill, index) => (
                                        <tr key={index}>
                                            <td className="dark:text-darktext text-text text-lg px-[60px] py-[7px]">{skill.skill}</td>
                                            <td className="px-[60px]"><LevelCircles id={index} circles={skillLevels[index]}
                                                skillLevels={skillLevels} setSkillLevels={setSkillLevels} /></td>
                                            <td className="px-[60px]"><ExperienceCircles id={index} circles={skillExperience[index]}
                                                skillExperience={skillExperience} setSkillExperience={setSkillExperience} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="3" className="py-2 px-4">
                                            {changed && <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                </Portal>
            </ScrollArea>
    )
}