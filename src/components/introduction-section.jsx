import pfp1 from '../assets/cyberpunk-1.jpg'
import pfp2 from '../assets/cyberpunk-2.png'
import Button from './button.jsx';

export default function IntroductionSection({ name, roles }) {
    return (
        <section id="home" className="grid grid-cols-2 text-special-white bg-dark-blue">
            <section className="flex flex-col justify-center gap-5 px-[5rem]">
                <h2 className="text-4xl">AHOY THERE!</h2>
                <h1 className="text-7xl">I'M <span className="my__name font-special font-extrabold">{ name }</span></h1>
                <section className="flex gap-3">
                    { roles.map((role, index) => (
                        <div className="even:text-black bg-neon-blue odd:bg-neon-violet text-special-white text-sm font-bold uppercase px-3 py-2 rounded-md">{ role }</div>
                    ))}
                </section>
                <p className="text-justify my-4">A final-year of senior high school student who has a keen interest in <span>Web Development</span>, <span>Robotic</span>, <span>AI</span>, and <span>Languages</span>.  A novice <span>coder</span> who always eager to learn new technologies to enhance his skills. A learner whose goal is to deliver innovative solutions that can make a positive impact on society.</p>
                <Button text="MORE ABOUT ME" destination="#about_me" />
            </section>
            <section>
                <img src={ pfp1 } alt="Picture of mine in Cyberpunk style" className="h-screen object-cover" />
            </section>
        </section>
    );
}