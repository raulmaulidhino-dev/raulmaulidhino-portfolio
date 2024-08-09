export default function PortfolioCard({preview, title, link}) {
    return (
        <section className="flex flex-col">
            <a href={ link } target="_blank">
                <img src={ preview } alt={ title } className="w-full h-full rounded-t-lg object-cover" />
            </a>
            <section className="bg-opacity-50 bg-neon-violet text-center text-md rounded-b-lg font-semibold py-2 px-4">
                { title }
            </section>
        </section>
    )
}