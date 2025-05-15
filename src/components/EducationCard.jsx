export default function EducationCard({schoolName, startYear, endYear, description, schoolLogo, schoolLogo_fallback}) {
    return(
        <section className="card text-white bg-dark-blue border-neon-blue even:border-neon-magenta hover:drop-shadow-neon-cyan even:hover:drop-shadow-neon-magenta border-2 p-6 rounded-lg flex flex-col items-start" data-aos="fade-down">
            <picture className="w-3/4 mx-auto">
                <source srcSet={ schoolLogo } type="image/webp" />
                <img src= { schoolLogo_fallback } alt={ schoolName } className="w-full h-full p-4 md:p-10 object-cover transition-all duration-700 ease-in-out hover:scale-[1.15] hover:drop-shadow-[inherit]" />
            </picture>
            <div className="bg-neon-blue text-dark-blue text-sm font-semibold px-2 py-1 my-4 rounded-md inline-block">{ startYear } - { endYear }</div>
            <h3 className="text-lg font-extrabold mb-[1em]">{ schoolName }</h3>
            <p>{ description }</p>
        </section>
    )
}