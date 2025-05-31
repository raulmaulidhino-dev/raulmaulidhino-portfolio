import DoCard from './DoCard.jsx';

import DeveloperPicture from '../assets/developer-picture.webp';
import DeveloperPicture_fallback from '../assets/developer-picture.jpg';

import { GrDocumentText as CV_Icon } from 'react-icons/gr';


import { TbDragDrop as Design, TbCode as Code, TbTerminal2 as Prompt} from 'react-icons/tb';

export default function AboutMe() {

    const DOB = import.meta.env.VITE_DOB ?? "2007-01-01";

    const myDo = [
        {icon: <Design size="72" className="text-neon-magenta" />, title: "DESIGN", description: "I design clean and user-friendly web layouts that are easy to navigate"},
        {icon: <Code size="72" className="text-neon-cyan" />, title: "CODE", description: "I code responsive and interactives website!"},
        {icon: <Prompt size="72" className="text-neon-magenta" />, title: "PROMPT", description: "I write prompts that help AI tools generate great and relevant ideas"},
    ];

    return (
        <section id="about_me" className="px-10 py-[6rem]">
            <h2 className="text-neon-magenta font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">ABOUT ME</h2>
            <section className="flex flex-col gap-8">
                <section className="flex flex-wrap justify-center gap-6">
                    <picture className="max-w-[300px] w-full inline-block" data-aos="fade-right">
                        <source srcSet={ DeveloperPicture } type="image/webp" />
                        <img src= { DeveloperPicture_fallback } alt="Picture of the Developer" className="w-full h-full rounded-t-lg object-cover" />
                    </picture>
                    <div className="max-w-[500px]">
                        <h2 className="text-xl md:text-3xl font-semibold mb-[1em]"  data-aos="fade-right">I&apos;m <span className="font-extrabold">Raul Ahmad Maulidhino</span>, Junior Full-Stack Developer / Robotic Enthusiast</h2>
                        <p data-aos="fade-down">
                            I&apos;m a <span>{ new Date(new Date() - new Date(DOB)).getUTCFullYear() - 1970 }</span>-year old student passionate about <strong className="text-neon-cyan">Coding, AI, Robotics, and Web Development</strong>.
                            I&apos;m always exploring new technologies, dedicating my time to learn and experiment with <strong className="text-neon-magenta">Machine Learning, Automation, and Web Technologies</strong>.
                            Continuously, updating my skills, I stay on top of industry trends through self-study and hands-on projects.
                            I&apos;m excited to apply my knowledge in real-world scenarios and keep growing within these fields.
                        </p>
                        <a title="Download My CV" href='/assets/documents/CV/RaulAhmadMaulidhino_Full-StackDev_CV.pdf' download={true} className="text-lg text-neon-magenta font-bold bg-dark-blue w-fit py-3 px-5 rounded-md border-2 border-neon-cyan mt-4 flex gap-2 items-center hover:shadow-md hover:shadow-neon-cyan">
                            <CV_Icon size="18" />
                            <span>DOWNLOAD CV</span>
                        </a>
                    </div>
                </section>
                <hr data-aos="zoom-in" />
                <section>
                    <h3 className="text-3xl text-center mb-[2em] font-semibold" data-aos="zoom-in">What I Do?</h3>
                    <section className="flex flex-row flex-wrap gap-y-[7rem] lg:gap-y-6 justify-center items-center">
                    {myDo.map((doItem, index) => (
                        <DoCard key={ index } Icon={ doItem.icon } title={ doItem.title } description={ doItem.description } />
                    ))}
                    </section>
                </section>
            </section>
        </section>
    )
}