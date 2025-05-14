export default function Hero({ name, roles }) {
    return (
        <section id="overview" className="flex flex-col-reverse lg:flex-row text-special-white bg-dark-blue">
            <section className="flex flex-col justify-center gap-5 lg:px-[5rem] px-8 py-12">
                <h2 className="text-2xl md:text-4xl" data-aos="fade-right">AHOY THERE!</h2>
                <h1 className="text-6xl md:text-7xl" data-aos="fade-right">I'M <span className="my__name font-special font-extrabold">{ name }</span></h1>
                <section className="flex flex-wrap gap-3">
                    { roles.map((role, index) => (
                        <div className="even:text-black bg-neon-blue odd:bg-neon-magenta text-special-white text-sm font-bold uppercase px-3 py-2 rounded-md" key={"role " + index} data-aos="zoom-in">{ role }</div> 
                    ))}
                </section>
                <p className="text-justify my-4" data-aos="fade-down">A recent high school graduate who has a keen interest in <span>Web Development</span>, <span>Robotic</span>, <span>AI</span>, and <span>Languages</span>.  A novice <span>coder</span> who always eager to learn new technologies to enhance his skills. A learner whose goal is to deliver innovative solutions that can make a positive impact on society.</p>
                <section data-aos="zoom-in-down">
                    <a href="#about_me" className="button-link text-black text-sm md:text-lg bg-neon-cyan font-extrabold py-4 px-5 rounded-full">MORE ABOUT ME</a>
                </section>
            </section>
            <section className="lg:h-screen lg:min-w-[50%] border-b-4 border-neon-magenta lg:border-l-4 lg:border-neon-cyan">
                <picture data-aos="zoom-in">
                    <source srcSet="/assets/images/developer-hero.webp" type="image/webp" />
                    <img src="/assets/images/developer-hero.jpg" alt="Picture of mine" className="h-full object-cover" />
                </picture>
            </section>
        </section>
    );
}