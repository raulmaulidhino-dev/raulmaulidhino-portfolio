import EducationCard from './EducationCard.jsx';

import BobotsariSHS1Logo from '../assets/logo/education/sman1bobotsari-logo.webp';
import BobotsariSHS1Logo_fallback from '../assets/logo/education/sman1bobotsari-logo.png';

import PENS_EEPISLogo from '../assets/logo/education/PENS-EEPIS-logo.webp';
import PENS_EEPISLogo_fallback from '../assets/logo/education/PENS-EEPIS-logo.png';

export default function Resume() {
    let educations = [
        {
            schoolLogo: PENS_EEPISLogo,
            schoolLogo_fallback: PENS_EEPISLogo_fallback,
            schoolName: "The Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
            startYear: "2025",
            endYear: "Present",
            description: "I am a new student majoring in Mechatronic Engineering at this polytechnic. I\'m excited to explore anything about Mechatronics, Software Engineering and Robotics. I plan to join the Robotics Club and take part in competitions. I also hope to improve my communication and teamwork skills. I\'m looking forward to graining both technical knowledge and practical experience during my studies."
        },
        {
            schoolLogo: BobotsariSHS1Logo,
            schoolLogo_fallback: BobotsariSHS1Logo_fallback,
            schoolName: "Bobotsari Senior High School 1 (SMANSABOZZ)",
            startYear: "2022",
            endYear: "2025",
            description: "I\'ve developed strong analytical and communication skills through course in math, science and English. Active participation in group projects and extracurricular activities has enhanced my teamwork abilities."
        }
    ];

    return(
        <section id="resume" className="flex flex-col gap-8 px-10 py-[6rem]">
            <h2 className="text-neon-cyan font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">RESUME</h2>
            <section className="education">
                <h3 className="text-xl md:text-3xl font-bold mb-[1em]" data-aos="zoom-in">EDUCATION</h3>
                <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] [grid-gap:1.25rem;]">
                    { educations.map((education, index) => (
                            <EducationCard key={ index } schoolName={ education.schoolName } startYear={ education.startYear } endYear={ education.endYear } description={ education.description } schoolLogo={ education.schoolLogo } schoolLogo_fallback={ education.schoolLogo_fallback } />
                    ))}
                </section>
            </section>
        </section>
    )
}