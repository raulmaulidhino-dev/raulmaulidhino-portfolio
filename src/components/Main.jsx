import SideNavigation from './SideNavigation.jsx';
import StickyNavigation from './StickyNavigation.jsx';
import AboutMe from './AboutMe.jsx';
import Resume from './Resume.jsx';
import SkillsAndStrengths from './SkillsAndStrengths.jsx';  
import Portfolio from './Portfolio.jsx';
import ContactMe from './ContactMe.jsx';

export default function Main() {
    return(
        <main className="lg:grid lg:grid-cols-[minmax(12.5rem,_1fr)_4fr] h-full bg-dark-blue">
            <SideNavigation />
            <StickyNavigation />
            <section>
                <hr className="border-none w-auto bg-neon-cyan h-1" />
                <AboutMe />
                <hr className="border-none w-auto bg-neon-magenta h-1 my-8" />
                <Resume />
                <hr className="border-none w-auto bg-neon-cyan h-1 my-8" />
                <SkillsAndStrengths />
                <hr className="border-none w-auto bg-neon-magenta h-1 my-8" />
                <Portfolio />
                <hr className="border-none w-auto bg-neon-cyan h-1 my-8" />
                <ContactMe />
            </section>
        </main>
    )
}