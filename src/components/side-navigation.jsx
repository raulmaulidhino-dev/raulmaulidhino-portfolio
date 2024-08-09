import pfp1 from '../assets/cyberpunk-1.jpg'

export default function SideNavigation() {
    return (
        <section className="side-nav fixed right-0 bottom-0 left-0 lg:bottom-auto lg:relative lg:h-full lg:self-stretch bg-dark-blue">
            <section className="lg:sticky lg:h-screen overflow-auto lg:overflow-hidden bg-dark-blue border-r-2 border-neon-violet lg:top-0">
                <img src={ pfp1 } alt="Picture of mine" className="hidden lg:block lg:w-full lg:h-[35vh] lg:object-cover bg-dark-blue" />
                <nav className="lg:h-[70vh]">
                    <ul className="lg:h-full bg-dark-blue lg:font-extrabold text-md lg:text-xl flex lg:flex-col justify-center items-center gap-4">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about_me">ABOUT ME</a></li>
                        <li><a href="#resume">RESUME</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#contact_me">CONTACT</a></li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}