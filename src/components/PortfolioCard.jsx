import { TbWorld as WebsiteIcon } from "react-icons/tb";
import { FaCode as SourceCodeIcon } from "react-icons/fa";

export default function PortfolioCard({preview, preview_fallback, title, link, description, labels = [], sourceLink }) {
    return (
        <article className="flex flex-col rounded-[10px] hover:shadow-lg hover:shadow-neon-magenta" data-aos="fade-down">
            <a href={ link } target="_blank">
                <picture>
                    <source srcSet={ preview } type="image/webp" />
                    <img src= { preview_fallback } alt={ title } className="w-full h-full rounded-t-lg object-cover" />
                </picture>
            </a>
            <section className="h-full flex flex-col items-start rounded-b-lg font-semibold py-6 px-4 border-2 border-neon-magenta">
                <h3 className="text-xl font-bold mb-[1em]">{ title }</h3>
                <p className="text-sm  mb-[1em]">{ description }</p>
                <div className="flex flex-wrap gap-1 mb-6">
                    {labels.map((label) => (
                        <div className="text-xs font-bold text-neon-cyan even:text-neon-magenta bg-dark-blue py-1 px-2 border-2 border-neon-cyan even:border-neon-magenta rounded-md">{ label }</div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                    <a href={ link } className="text-xs text-black font-bold bg-white py-1 px-3 rounded-md border-2 border-white flex gap-1 items-center">
                        <WebsiteIcon size="15" />
                        <span>Website</span>
                    </a>
                    <a href={ sourceLink } className="text-xs text-white font-bold bg-black py-1 px-3 rounded-md border-2 border-white  flex gap-1 items-center">
                        <SourceCodeIcon size="15" />
                        <span>Source Code</span>
                    </a>
                </div>
            </section>
        </article>
    )
}