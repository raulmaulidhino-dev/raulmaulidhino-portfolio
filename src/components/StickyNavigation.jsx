import { 
    TbRocket as Overview, 
    TbUser as AboutMe, 
    TbBriefcase as Resume, 
    TbLibrary as Portfolio, 
    TbSend as ContactMe 
} from 'react-icons/tb';

export default function StickyNavigation() {
    return (
        <section className="sticky-nav sticky top-4 mx-4 mb-10 rounded-[17px] bg-dark-blue border-t-2 border-t-neon-magenta border-r-2 border-neon-magenta border-l-2 border-l-neon-cyan border-b-2 border-b-neon-cyan lg:hidden
            before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-bl before:from-neon-magenta before:to-neon-cyan before:blur-lg before:rounded-[17px] before:z-[-99]
        ">
                <nav class="rounded-[17px]">
                    <ul className="bg-dark-blue text-md rounded-[17px] p-4 flex justify-around items-center gap-8">
                        <li><a href="#overview" title="Overview"><Overview size="24" /></a></li>
                        <li><a href="#about_me" title="About Me"><AboutMe size="24" /></a></li>
                        <li><a href="#resume" title="Resume"><Resume size="24" /></a></li>
                        <li><a href="#portfolio" title="Portfolio"><Portfolio size="24" /></a></li>
                        <li><a href="#contact_me" title="Contact Me"><ContactMe size="24" /></a></li>
                    </ul>
                </nav>
        </section>
    )
}