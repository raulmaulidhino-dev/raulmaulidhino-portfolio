export default function EducationCard({schoolName, startYear, endYear, description, }) {
    return(
        <section className="card flex flex-col items-start">
            <div className="bg-neon-blue even:bg-neon-violet text-dark-blue text-sm font-semibold px-2 py-1 my-4 rounded-md inline-block">{ startYear } - { endYear }</div>
            <h3 className="text-lg font-bold">{ schoolName }</h3>
            <p>{ description }</p>
        </section>
    )
}