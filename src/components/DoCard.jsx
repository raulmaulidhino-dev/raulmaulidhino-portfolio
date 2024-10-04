export default function DoCard({Icon, title, description }) {
    return(
        <section className="card flex flex-col items-center gap-4 basis-full lg:basis-[50%]">
            <div>{ Icon }</div>
            <h3 className="text-lg font-bold">{ title }</h3>
            <p className="text-center max-w-[30ch]">{ description }</p>
        </section>
    )
}