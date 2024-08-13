import Content from './content.jsx';

export default function Section({ id, title }) {
    return(
        <section id={ id } className="h-fit bg-dark-blue">
            <section className="p-16 text-inherit">
                <h1 className="text-center text-4xl md:text-5xl font-special font-bold p-4 mb-[1em]">{ title }</h1>
                <Content id={ id } />
            </section>
        </section>
    )
}