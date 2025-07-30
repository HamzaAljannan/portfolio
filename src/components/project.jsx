
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import pro5 from "../assets/pro5.png"
import pro6 from "../assets/pro6.png"
import pro7 from "../assets/pro7.png"
import pro8 from "../assets/pro8.png"
import pro9 from "../assets/pro9.png"
import pro10 from "../assets/pro10.png"
import pro11 from "../assets/pro11.png"

import {  AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: pro1,
      title: "1. Real-estate-website",     
      description: "React ",
      links: {
        site: "https://real-estate-website-gamma-nine.vercel.app",
        github: "https://github.com/HamzaAljannan/Real-estate-website",
      },
    },
    {
      img: pro2,
      title: "2. Scaling Success",
      description: "React",
      links: {
        site: "https://scaling-success.vercel.app",
        github: "https://github.com/HamzaAljannan/Scaling-Success",
      },
    },
    {
      img: pro3,
      title: "3. cozweb",
      description: "React + Tailwind",
      links: {
        site: "https://cozweb-ten.vercel.app",
        github: "https://github.com/HamzaAljannan/cozweb",
      },
    },
    {
      img: pro4,
      title: "4. Template_Four",
      description: "HTML + CSS",
      links: {
        site: "https://hamzaaljannan.github.io/Template_Four/",
        github: "https://github.com/HamzaAljannan/Template_Four",
      },
    },
    {
      img: pro5,
      title: "5. My Life, My Stories",
      description: "HTML + CSS + JS",
      links: {
        site: "https://hamzaaljannan.github.io/My-Life-My-Stories/",
        github: "https://github.com/HamzaAljannan/My-Life-My-Stories",
      },
    },
    {
      img: pro6,
      title: "6. we are kasper",
      description: "HTNL + CSS",
      links: {
        site: "https://hamzaaljannan.github.io/we-are-kasper/",
        github: "https://github.com/HamzaAljannan/we-are-kasper",
      },
    },
    {
      img: pro7,
      title: "7. Photo gallery",
      description: "HTML + CSS + JS ",
      links: {
        site: "https://hamzaaljannan.github.io/Photo-gallery/",
        github: "https://github.com/HamzaAljannan/Photo-gallery",
      },
    },
    {
      img: pro8,
      title: "8. Your Creative Web Template",
      description: "HTML + CSS",
      links: {
        site: "https://hamzaaljannan.github.io/Your-Creative-Web-Template/",
        github: "https://github.com/HamzaAljannan/Your-Creative-Web-Template",
      },
    },
    {
      img: pro9,
      title: "9. Become a Developer",
      description: "Bootstrap",
      links: {
        site: "https://hamzaaljannan.github.io/Become-a-Developer/",
        github: "https://github.com/HamzaAljannan/Become-a-Developer",
      },
    },
    {
      img: pro10,
      title: "10. product management system",
      description: "HTML + CSS + JS",
      links: {
        site: "https://hamzaaljannan.github.io/product-management-system/",
        github: "https://github.com/HamzaAljannan/product-management-system",
      },
    },
    {
      img: pro11,
      title: "11. weather",
      description: "HTML + CSS + JS",
      links: {
        site: "https://hamzaaljannan.github.io/weather/",
        github: "https://github.com/HamzaAljannan/weather",
      },
    },
  ]

const project = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="project">
        <h2 className='text-3xl font-bold text-gray-200 mb-8 text-center'>project</h2>
        {projects.map((project, index) => (
            <Reveal key={index}>
            <div 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default project