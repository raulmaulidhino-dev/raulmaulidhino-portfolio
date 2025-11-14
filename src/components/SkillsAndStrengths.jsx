const techSkills = [
  { title: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg", href: "https://www.w3.org/Style/CSS" },
  { title: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", href: "https://www.typescriptlang.org" },
  { title: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", href: "https://react.dev" },
  { title: "Svelte", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg", href: "https://svelte.dev" },
  { title: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", href: "https://tailwindcss.com" },
  { title: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", href: "https://nodejs.org" },
  { title: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", href: "https://wordpress.org" },
  { title: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", href: "https://vitejs.dev" },
  { title: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", href: "https://www.mysql.com" },
  { title: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", href: "https://cplusplus.com" },
  { title: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", href: "https://www.python.org" },
  { title: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", href: "https://git-scm.com" },
  { title: "Arduino", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg", href: "https://www.arduino.cc" },
  { title: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", href: "https://www.linux.org" },
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
          className="text-2xl md:text-3xl text-center font-bold mb-[1em]"
          data-aos="zoom-in"
        >
          Technical Proficiency
        </h3>

        <section className="w-full p-2 flex flex-wrap justify-center items-center gap-8">
          {techSkills.map((skill) => (
            <section data-aos="zoom-in" key={skill.title} className="max-w-40 bg-dark-blue border-b-2 border-b-neon-magenta border-l-2 border-l-neon-magenta border-r-2 border-r-neon-cyan border-t-2 border-t-neon-cyan p-6 rounded-[17px] space-y-6 hover:shadow-lg hover:shadow-neon-magenta">
              <a href={skill.href} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full"
                  title={skill.title}
                  aria-label={skill.title}
                  src={skill.src}
                />
              </a>
              <div className="text-center w-full">{skill.title}</div>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}
