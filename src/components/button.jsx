export default function Button({ text, destination }) {
    return (
        <section>
            <a href={ destination } className="button-link text-black text-lg bg-neon-cyan font-extrabold py-4 px-5 rounded-full">{ text }</a>
        </section>
    )
}