import EducationCard from './education-card'
import SimpleCard from './simple-card'
import PortfolioCard from './portfolio-card'

import HatPhoto from '../assets/hat-photo-of-mine.jpg'

import TumbasYukPreview from '../assets/previews/tumbas-yuk-landing-page-preview.png'
import TravelAgentkuPreview from '../assets/previews/TravelAgentku-preview.png'
import KBCPreview from '../assets/previews/kbc-quizzes-game-preview.png'

import CodeIcon from '../assets/icons/code-solid.svg'
import PromptIcon from '../assets/icons/file-code-solid.svg'
import DesignIcon from '../assets/icons/object-group-solid.svg'

import EmailIcon from '../assets/icons/envelope-solid.svg'
import LinkedinIcon from '../assets/icons/linkedin-brands-solid.svg'
import InstagramIcon from '../assets/icons/instagram-brands-solid.svg'
import GithubIcon from '../assets/icons/github-brands-solid.svg'

export default function Content({ id }) {

    let educations = [
        {
            schoolName: "Bobotsari Senior High School 1",
            startYear: "2022",
            endYear: "Present",
            description: "Currently attending Bobotsari Senior High School 1, I've developed strong analytical and communication skills through course in math, science and English. Active participation in group projects and extracurricular activities has enchanced my teamwork abilities"
        }
    ];

    if (id === "about_me") {
        return (
            <section>
                <section className="flex flex-col lg:flex-row gap-8">
                    <section className="flex flex-col gap-6">
                        <h2 className="text-3xl font-semibold">I&apos;m <span className="font-extrabold">Raul Ahmad Maulidhino</span>, Junior FE Developer / AI Enthusiast</h2>
                        <p>
                            I&apos;m a <span>17</span>-year old student who likes to code and learn new technologies, mainly AI and Robotic technologies.
                            I&apos;ve always been fascinated by the world of technology and always looking forward to explore new opportunities!
                        </p>
                        <hr />
                        <section>
                            <h3 className="text-3xl text-center mb-[1em] font-semibold">What I Do?</h3>
                            <section className="flex gap-6 justify-center items-center">
                                <SimpleCard icon={ DesignIcon } title="DESIGN" description="Design an incredible website" />
                                <SimpleCard icon={ CodeIcon } title="CODE" description="Code an incredible website" />
                                <SimpleCard icon={ PromptIcon } title="PROMPT" description="Prompt an incredible website design" />
                            </section>
                        </section>
                    </section>
                    <img src= { HatPhoto } alt="Hat Photo of mine" className="w-[20rem] border-4 border-neon-cyan rounded-lg object-cover hidden lg:block"/>
                </section>
            </section>
        )
    } else if (id == "resume") {
        return(
            <section className="flex flex-col gap-8">
                <section className="education">
                    <h3 className="text-3xl font-bold">EDUCATION</h3>
                    <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] [grid-gap:1rem;]">
                        { educations.length > 0 ?
                            educations.map((education) => (
                                <EducationCard schoolName={ education.schoolName } startYear={ education.startYear } endYear={ education.endYear } description={ education.description } />
                            ))
                        : (<div className="mx-auto">I don&apos;t have any educations yet!</div>) }
                        
                    </section>
                </section>
                <section className="experience">
                    <h3 className="text-3xl font-bold">EXPERIENCE</h3>
                    <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-gap:1rem;]">
                    <div className="grid place-items-center min-h-[10rem]">I don&apos;t have any experiences yet!</div>
                    </section>
                </section>
            </section>
        )
    } else if (id === "portfolio") {
        return (
            <section className="flex flex-col gap-4">
                <nav>
                    <ul className="font-extrabold flex justify-center items-center gap-8">
                        <li>ALL</li>
                        <li>FRONT-END DEVELOPMENT</li>
                    </ul>
                </nav>
                <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
                    <PortfolioCard preview={ TumbasYukPreview } title="TumbasYuk! Landing Page" link="https://tumbas-yuk-landing-page.vercel.app"/>
                    <PortfolioCard preview={ TravelAgentkuPreview } title="TravelAgentku" link="https://travelagentku-landing-page.vercel.app"/>
                    <PortfolioCard preview={ KBCPreview } title="KBC Quizzes Mini Game" link="https://kbc-quizzes-game.vercel.app"/>
                </section>
            </section>
        )
    } else if (id === "contact_me") {
        return (
            <footer>
                <h2 className="text-3xl text-center font-semibold mb-[1em]">Feel <span className="font-extrabold">Free</span> to contact me!</h2>
                <section className="flex gap-4 justify-center items-center">
                    <a href="mailto:raulahmadm314@gmail.com"><img src={ EmailIcon } alt="Email Icon" className="h-8"/></a>
                    <a href="https://linkedin.com/in/raulahmadm"><img src={ LinkedinIcon } alt="Linkedin Icon" className="h-8" /></a>
                    <a href="https://instagram.com/raul.maulidhino"><img src={ InstagramIcon } alt="Instagram Icon" className="h-8" /></a>
                    <a href="https://github.com/raulmaulidhino-dev"><img src={ GithubIcon } alt="Github Icon" className="h-8" /></a>
                </section>
            </footer>
        )
    }
}