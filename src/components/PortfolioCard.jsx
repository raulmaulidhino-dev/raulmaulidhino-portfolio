export default function PortfolioCard({preview, preview_fallback, title, link}) {
    return (
        <section className="flex flex-col" data-aos="fade-down">
            <a href={ link } target="_blank">
                <picture>
                    <source srcSet={ preview } type="image/webp" />
                    <img src= { preview_fallback } alt={ title } className="w-full h-full rounded-t-lg object-cover" />
                </picture>
            </a>
            <section className="bg-opacity-50 bg-neon-magenta text-center text-md rounded-b-lg font-semibold py-2 px-4">
                { title }
            </section>
        </section>
    )
}