import pfp1 from '../assets/cyberpunk-1.jpg'
import Button from './button.jsx';

export default function IntroductionSection({ name, roles }) {
    return (
        <section id="overview" className="flex flex-col-reverse lg:flex-row text-special-white bg-dark-blue">
            <section className="flex flex-col justify-center gap-5 lg:px-[5rem] px-8 py-12">
                <h2 className="text-2xl md:text-4xl">AHOY THERE!</h2>
                <h1 className="text-6xl md:text-7xl">I'M <span className="my__name font-special font-extrabold">{ name }</span></h1>
                <section className="flex flex-wrap gap-3">
                    { roles.map((role, index) => (
                        <div className="even:text-black bg-neon-blue odd:bg-neon-magenta text-special-white text-sm font-bold uppercase px-3 py-2 rounded-md" key={"role " + index}>{ role }</div> 
                    ))}
                </section>
                <p className="text-justify my-4">A final-year of senior high school student who has a keen interest in <span>Web Development</span>, <span>Robotic</span>, <span>AI</span>, and <span>Languages</span>.  A novice <span>coder</span> who always eager to learn new technologies to enhance his skills. A learner whose goal is to deliver innovative solutions that can make a positive impact on society.</p>
                <Button text="MORE ABOUT ME" destination="#about_me" />
            </section>
            <section className="lg:h-screen lg:min-w-[50%] border-b-4 border-neon-magenta lg:border-l-4 lg:border-neon-cyan">
                <img src={ pfp1 } alt="Picture of mine in Cyberpunk style" className="h-full object-cover" />
            </section>
        </section>
    );
}