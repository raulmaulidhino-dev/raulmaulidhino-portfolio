import PortfolioCard from './PortfolioCard.jsx';

import HomifyPreview from '../assets/previews/Homify-preview.webp'
import HomifyPreview_fallback from '../assets/previews/Homify-preview.png'
import TravelAgentkuPreview from '../assets/previews/TravelAgentku-preview.webp';
import TravelAgentkuPreview_fallback from '../assets/previews/TravelAgentku-preview.png';
import KBCQuizzesGamePreview from '../assets/previews/KBC-Quizzes-Game-preview.webp';
import KBCQuizzesGamePreview_fallback from '../assets/previews/KBC-Quizzes-Game-preview.png';
import ESBozzPreview from '../assets/previews/ESBozz-preview.webp';
import ESBozzPreview_fallback from '../assets/previews/ESBozz-preview.png';


export default function Portfolio() {

    let projects = [
        {preview: ESBozzPreview, preview_fallback: ESBozzPreview_fallback, title: 'English Society-Bozz', link: 'https://english-society-bozz.vercel.app'},
        {preview: HomifyPreview, preview_fallback: HomifyPreview_fallback, title: 'Homify', link: 'https://homify-web.vercel.app'},
        {preview: TravelAgentkuPreview, preview_fallback: TravelAgentkuPreview_fallback, title: 'TravelAgentku', link: 'https://travelagentku-landing-page.vercel.app'},
        {preview: KBCQuizzesGamePreview, preview_fallback: KBCQuizzesGamePreview_fallback, title: 'KBC GAME!!', link: 'https://kbc-quizzes-game.vercel.app'},
    ];

    return (
        <section id="portfolio" className="py-[6rem] px-4 md:px-[6rem] flex flex-col gap-4">
            <h2 className="text-neon-cyan font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">PORTFOLIO</h2>
            <nav>
                <ul className="font-extrabold flex justify-center items-center gap-8">
                    <li data-aos="zoom-in">WEB DEVELOPMENT</li>
                </ul>
            </nav>
            <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
                {projects.map((project, index) => (
                    <PortfolioCard key={index} preview={project.preview} preview_fallback={project.preview_fallback} title={project.title} link={project.link} />
                ))}
            </section>
        </section>
    )   
}