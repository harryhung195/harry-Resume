"use client";


import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

//about data

const about = {
  title: "About me",
  description:
  "I  am  a  mature,  positive  and  hardworking  individual,  who  always  strives  to achieve the highest standard possible, at any given task. In  my  previous  role  as  a  Sales  Representative  and  Web  Developer,  I demonstrated the ability to work under intense pressure, sell products and services to customers from all backgrounds, handle customer complaints and solve problematic situations as and when they arose. I was promoted twice for exceeding  my  sales  targets.  I  am  a  committed,  friendly  and  hardworking Customer  Service  Advisor  with  a  passion  for  providing  excellent  customer service  at  all  times,  always  having  the  needs  of  the  customers  and  the reputation of the organization at heart. I have dealt with customers enquiries and complaints face-to-face. My excellent customer service and communication skills, combined with my relevant work experience, make me a real asset to any organization that I work. I have excellent communication skills, enabling me to effectively communicate with a wide range of people. "
,
  info:[
  {
    fieldName: "Name:",
    fieldValue: "Harry"
  },
  {
    fieldName: "Phone:",
    fieldValue: "(+61) 415 539 727"
  },
  {
    fieldName: "Experience:",
    fieldValue: "2+ Years"
  },
  {
    fieldName: "Nationality:",
    fieldValue: "Vietnam"
  },
  {
    fieldName: "Email:",
    fieldValue: "harryhung195@gmail.com"
  },
  {
    fieldName: "live:",
    fieldValue: "Melbourne, Vic 3020"
  },
  {
    fieldName: "Freelance:",
    fieldValue: "Available"
  },
  {
    fieldName: "Language:",
    fieldValue: "English and Vietnamese"
  },

]

};
//experience
const experience = {
  icon: "/assets/assets/resume/badge.svg",
  title: "My experience",
  description: "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer",
      duration: "2022",
    },
    {
      company: "Freelance",
      position: "Freelance Web Developer",
      duration: "2021-2022",
    },
    {
      company: "Freelance",
      position: "UI/UX Designer",
      duration: "2021-2022",
    },
    {
      company: "Aqs Tannery Group",
      position: "Sell product",
      duration: "2022-present",
    },
  ]
};
//education data

const education = {
  icon: "/assets/assets/resume/cap.svg",
  title: "My education",
  description: "Education can be thought of as the transmission of the values and accumulated knowledge of a society. In this sense, it is equivalent to what social scientists term socialization or enculturation.",
  items: [
    {
     institution: "Online Course Platform",
      degree: "Full Stack Web Development FreeCodeCamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
       degree: "Front-end",
       duration: "2022",
     },
     {
      institution: "Online Course",
       degree: "Programming Course",
       duration: "2021-2022",
     },
     {
      institution: "University in WA",
       degree: "Bachelor degree in Information Technology",
       duration: "2017-2020",
     },
     {
      institution: "Tafe in WA",
       degree: "Study course leadership and management",
       duration: "2015-2017",
     },
    
  ]
};
//skills data
const skills = {
  title: "My skills",
  description: "achievements such as accurate, willing to learn, organised, hardworking, dependable, motivated or creative.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5",


    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
  ]
}
 import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
 import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
 import { ScrollArea } from '@/components/ui/scroll-area';
 import { motion } from 'framer-motion';


const Resume = () => {
  return (
  <motion.div initial={{opacity: 0}}
  animate={{
    opacity: 1,
    transition: {
      delay: 2.4, duration: 0.4, ease: "easeIn"
    },
  }}
  className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
  >
     <div className="container mx-auto">
      <Tabs defaultValue='experience'
      className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
        gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        {/*content */}
        <div className='min-h-[70vh] w-full'>
          {/*experience */}
          <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index)=> {
                    return ( 
                    
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        {/*dot */}
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>
                    
                  );
                  })}
                </ul>

              </ScrollArea>
              </div>
              </TabsContent>
           {/*education */}
           <TabsContent value="education" className="w-full h">
           <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=> {
                    return ( 
                    
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[100px] text-center lg:text-left'>{item.degree}</h3>
                      <div className='flex items-center gap-3'>
                        {/*dot */}
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>
                    
                  );
                  })}
                </ul>

              </ScrollArea>
              </div>
            </TabsContent>
           {/*skills */}
           <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillList.map((skill, index)=> {
                  return (
                  
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                          <div className='text-6xl group-hover:text-accent
                          transition-all duration-300'>{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='capitalize'>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  );
                })}
              </ul>
            </div>
           </TabsContent>
           {/*about */}
           <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-yellow-200 mx-auto xl:mx-0'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px]
              mx-auto xl:mx-0'>
                {about.info.map((item, index) => {
                  return(
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>
          </div>
      </Tabs>

     </div>
    </motion.div>
  )
}

export default Resume
