export default function SimpleCard({icon, title, description }) {
    return(
        <section className="card flex flex-col items-center gap-4 basis-full lg:basis-[50%]">
            <img src={icon} alt={title} className="w-10 h-10" />
            <h3 className="text-lg font-bold">{ title }</h3>
            <p className="text-center w-[85%]">{ description }</p>
        </section>
    )
}