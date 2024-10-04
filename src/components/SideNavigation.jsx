import pfp1 from '../assets/cyberpunk-1.jpg'

export default function SideNavigation() {
    return (
        <section className="side-nav hidden lg:block lg:bottom-auto lg:relative lg:top-0 lg:right-0 lg:left-0 lg:rounded-[0px] lg:h-full lg:self-stretch bg-dark-blue">
            <section className="lg:sticky lg:h-screen overflow-auto lg:overflow-hidden bg-dark-blue border-t-2 border-t-neon-magenta lg:border-t-none border-r-2 border-neon-magenta border-l-2 border-l-neon-cyan lg:border-l-none border-b-2 border-b-neon-cyan lg:border-b-none lg:top-0">
                <img src={ pfp1 } alt="Picture of mine" className="hidden lg:block lg:w-full lg:h-[35vh] lg:object-cover bg-dark-blue" />
                <nav className="lg:h-[70vh]">
                    <ul className="lg:h-full bg-dark-blue lg:font-extrabold text-md lg:text-xl flex lg:flex-col justify-around lg:justify-center items-center gap-8 p-4 lg:p-auto">
                        <li><a href="#overview" title="Overview"><span className="hidden lg:block">OVERVIEW</span></a></li>
                        <li><a href="#about_me" title="About Me"><span className="hidden lg:block">ABOUT ME</span></a></li>
                        <li><a href="#resume" title="Resume"><span className="hidden lg:block">RESUME</span></a></li>
                        <li><a href="#portfolio" title="Portfolio"><span className="hidden lg:block">PORTFOLIO</span></a></li>
                        <li><a href="#contact_me" title="Contact Me"><span className="hidden lg:block">CONTACT ME</span></a></li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}