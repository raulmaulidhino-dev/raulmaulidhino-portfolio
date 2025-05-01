import { TbMail as Mail } from "react-icons/tb"
import { TbBrandLinkedin as LinkedIn } from "react-icons/tb"
import { TbBrandInstagram as Instagram } from "react-icons/tb"
import { TbBrandGithub as Github } from "react-icons/tb"
import { TbBrandWhatsapp as WhatsApp } from "react-icons/tb"

export default function ContactMe() {
    return (
        <footer id="contact_me" className="px-10 py-[6rem]">
            <h2 className="text-neon-magenta font-extrabold text-center text-5xl font-special md:text-6xl mb-10" data-aos="zoom-in">CATCH ME!</h2>
            <h3 className="text-xl md:text-3xl text-center font-semibold mb-[1em]" data-aos="fade-down"><span className="font-extrabold"><strong>Feel Free</strong></span> to reach me out!</h3>
            <section className="flex gap-4 justify-center items-center">
                <a href="mailto:raulmaulidhino.dev@gmail.com" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out-sine"><Mail size="42" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-neon-magenta" /></a>
                <a href="https://linkedin.com/in/raulahmadm" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out-sine" data-aos-delay="500"><LinkedIn size="42" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-neon-cyan" /></a>
                <a href="https://instagram.com/raul.maulidhino" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out-sine" data-aos-delay="1000"><Instagram size="42" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-neon-magenta" /></a>
                <a href="https://wa.me/6282328382750" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out-sine" data-aos-delay="1500"><WhatsApp size="42" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-neon-cyan" /></a>
                <a href="https://github.com/raulmaulidhino-dev" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out-sine" data-aos-delay="1500"><Github size="42" className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-neon-magenta" /></a>
            </section>
        </footer>
    )
}