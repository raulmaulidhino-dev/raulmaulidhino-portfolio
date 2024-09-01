export default function PortfolioCard({preview, fallback_preview, title, link}) {
    return (
        <section className="flex flex-col">
            <a href={ link } target="_blank">
                <picture>
                    <source srcset={ preview } type="image/webp" />
                    <img src= { fallback_preview } alt={ title } className="w-full h-full rounded-t-lg object-cover" />
                </picture>
            </a>
            <section className="bg-opacity-50 bg-neon-magenta text-center text-md rounded-b-lg font-semibold py-2 px-4">
                { title }
            </section>
        </section>
    )
}