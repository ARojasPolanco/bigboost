import { CarIcon, PilotIcon } from "../shared/Icons";

const CompetitionCard = ({ competition }) => {

    return (
        <article className="border-2 border-gray-400 rounded-md bg-gray-400/10 p-4 font-montserrat">
            <h2 className="text-center font-medium mb-4">{competition.name}</h2>
            <section className="w-[300px] sm:w-[700px]">
                <ul className="grid gap-4">
                    {competition.racers.map(racer => (
                        <li
                            className="flex items-center justify-between"
                            key={racer.id}>
                            <h3 className="flex items-center gap-2"><PilotIcon /> {racer.name}</h3>
                            <h3 className="flex items-center gap-2"><CarIcon /> {racer.number}</h3>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default CompetitionCard