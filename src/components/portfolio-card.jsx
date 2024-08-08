export default function PortfolioCard({preview, title, link}) {
    return (
        <section className="relative w-[50%] overflow-hidden border-2 border-neon-cyan rounded-lg">
            <a href={ link } target="_blank">
                <img src={ preview } alt={ title } className="w-full h-full object-cover" />
            </a>
            <section className="absolute bottom-0 left-0 bg-opacity-50 bg-neon-violet text-center text-md font-semibold py-2 px-4 rounded-tr-lg">
                { title }
            </section>
        </section>
    )
}