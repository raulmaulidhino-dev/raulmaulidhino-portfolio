import PortfolioCard from './PortfolioCard.jsx';

import Projek1Preview_webp from '../assets/previews/tumbas-yuk-landing-page-preview.webp';
import Projek1Preview_png from '../assets/previews/tumbas-yuk-landing-page-preview.png';
import Projek2Preview_webp from '../assets/previews/TravelAgentku-preview.webp';
import Projek2Preview_png from '../assets/previews/TravelAgentku-preview.png';
import Projek3Preview_webp from '../assets/previews/kbc-quizzes-game-preview.webp';
import Projek3Preview_png from '../assets/previews/kbc-quizzes-game-preview.png';

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-[6rem] px-4 md:px-[6rem] flex flex-col gap-4">
            <h2 className="text-neon-magenta font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">PORTFOLIO</h2>
            <nav>
                <ul className="font-extrabold flex justify-center items-center gap-8">
                    <li data-aos="zoom-in">ALL</li>
                    <li data-aos="zoom-in">FRONT-END DEVELOPMENT</li>
                </ul>
            </nav>
            <section className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
                <PortfolioCard preview={ Projek1Preview_webp } fallback_preview={ Projek1Preview_png } title="TumbasYuk! Landing Page" link="https://tumbas-yuk-landing-page.vercel.app" />
                <PortfolioCard preview={ Projek2Preview_webp } fallback_preview={ Projek2Preview_png } title="TravelAgentku" link="https://travelagentku-landing-page.vercel.app" />
                <PortfolioCard preview={ Projek3Preview_webp } fallback_preview={ Projek3Preview_png } title="KBC Quizzes Mini Game" link="https://kbc-quizzes-game.vercel.app" />
            </section>
        </section>
    )   
}