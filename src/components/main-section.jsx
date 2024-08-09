import Section from './section.jsx'
import SideNavigation from './side-navigation.jsx'

export default function MainSection() {
    return(
        <main className="lg:grid lg:grid-cols-[minmax(12.5rem,_1fr)_4fr]">
            <SideNavigation />
            <section>
                <hr className="border-none w-auto bg-neon-cyan h-1" />
                <Section id="about_me" title="ABOUT ME" />
                <hr className="border-none w-auto bg-neon-violet h-1" />
                <Section id="resume"  title="RESUME" />
                <hr className="border-none w-auto bg-neon-cyan h-1" />
                <Section id="portfolio" title="PORTFOLIO" />
                <hr className="border-none w-auto bg-neon-violet h-1" />
                <Section id="contact_me" title="CONTACT" />
            </section>
        </main>
    )
}