const techSkills = [
  { title: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { title: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { title: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { title: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { title: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { title: "Svelte", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" },
  { title: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { title: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { title: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { title: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
  { title: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { title: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { title: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { title: "Arduino", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { title: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

export default function SkillsAndStrengths() {
  return (
    <section id="skills_and_strengths" className="flex flex-col gap-8 px-10 py-[6rem]">
      <h2
        className="text-neon-magenta font-extrabold text-center text-5xl font-special md:text-6xl mb-10"
        data-aos="zoom-in"
      >
        SKILLS &amp; STRENGTHS
      </h2>

      <section>
        <h3
          className="text-2xl md:text-3xl font-bold mb-[1em]"
          data-aos="zoom-in"
        >
          Technical Proficiency :
        </h3>

        <section className="w-fit mx-auto p-6 flex flex-wrap gap-8">
          {techSkills.map((skill, index) => (
            <section data-aos="zoom-in" data-aos-delay={100 * (index + 1)} key={skill.title} className="max-w-40 border-b-2 border-b-neon-magenta border-l-2 border-l-neon-magenta border-r-2 border-r-neon-cyan border-t-2 border-t-neon-cyan p-6 rounded-[17px] space-y-6 hover:shadow-lg hover:shadow-neon-magenta">
                <img
                    className="w-full"
                    title={skill.title}
                    aria-label={skill.title}
                    src={skill.src}
                />
                <div class="text-center w-full">{skill.title}</div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}
