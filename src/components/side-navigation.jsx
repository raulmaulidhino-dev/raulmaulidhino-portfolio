import pfp1 from '../assets/cyberpunk-1.jpg'
import pfp2 from '../assets/cyberpunk-2.png'

export default function SideNavigation() {
    return (
        <section className="side-nav h-full self-stretch hidden lg:block">
            <section className="sticky h-screen bg-dark-blue border-r-2 border-neon-violet top-0">
                <img src={ pfp2 } alt="Picture of mine" className="w-full h-[35vh] object-cover" />
                <nav className="h-[70vh]">
                    <ul className="h-full bg-dark-blue font-extrabold text-xl flex flex-col justify-center items-center gap-4">
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