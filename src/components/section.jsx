import Content from './content.jsx';

export default function Section({ id, title }) {
    return(
        <section id={ id } className="h-fit bg-dark-blue">
            <section className="p-16">
                <h1 className="text-center text-5xl p-4 mb-[1em]">{ title }</h1>
                <Content id={ id } />
            </section>
        </section>
    )
}