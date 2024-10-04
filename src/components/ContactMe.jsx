import { TbMail as Mail } from "react-icons/tb"
import { TbBrandLinkedin as LinkedIn } from "react-icons/tb"
import { TbBrandInstagram as Instagram } from "react-icons/tb"
import { TbBrandGithub as Github } from "react-icons/tb"

export default function ContactMe() {
    return (
        <footer id="contact_me" className="px-10 py-[6rem]">
            <h2 className="text-xl md:text-3xl text-center font-semibold mb-[1em]"><span className="font-extrabold"><strong>Feel Free</strong></span> to reach me out!</h2>
            <section className="flex gap-4 justify-center items-center">
                <a href="mailto:raulahmadm314@gmail.com" target="_blank"><Mail size="42" /></a>
                <a href="https://linkedin.com/in/raulahmadm" target="_blank"><LinkedIn size="42" /></a>
                <a href="https://instagram.com/raul.maulidhino" target="_blank"><Instagram size="42" /></a>
                <a href="https://github.com/raulmaulidhino-dev" target="_blank"><Github size="42" /></a>
            </section>
        </footer>
    )
}