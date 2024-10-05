import EducationCard from './EducationCard.jsx';

export default function Resume() {
    let educations = [
        {
            schoolName: "Bobotsari Senior High School 1",
            startYear: "2022",
            endYear: "Present",
            description: "Currently attending Bobotsari Senior High School 1, I\'ve developed strong analytical and communication skills through course in math, science and English. Active participation in group projects and extracurricular activities has enchanced my teamwork abilities."
        }
    ];

    return(
        <section id="resume" className="flex flex-col gap-8 px-10 py-[6rem]">
            <h2 className="text-neon-cyan font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">RESUME</h2>
            <section className="education">
                <h3 className="text-xl md:text-3xl font-bold" data-aos="zoom-in">EDUCATION</h3>
                <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] [grid-gap:1rem;]">
                    { educations.map((education, index) => (
                            <EducationCard key={ index } schoolName={ education.schoolName } startYear={ education.startYear } endYear={ education.endYear } description={ education.description } />
                    ))}
                </section>
            </section>
        </section>
    )
}