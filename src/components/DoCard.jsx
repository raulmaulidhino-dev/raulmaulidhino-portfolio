export default function DoCard({Icon, title, description }) {
    return(
        <section className="card flex flex-col items-center gap-4 basis-full lg:basis-[50%]">
            <div data-aos="zoom-out">{ Icon }</div>
            <h3 className="text-lg font-bold" data-aos="fade-down">{ title }</h3>
            <p className="text-center max-w-[30ch]" data-aos="fade-down">{ description }</p>
        </section>
    )
}