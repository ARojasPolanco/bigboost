import CompetitionCard from "./CompetitionCard";

const CompetitionsList = ({ competitions }) => {
    return (
        <section className="grid grid-cols-1 gap-6">
            {competitions.map(competition => (
                <CompetitionCard key={competition.id} competition={competition} />
            ))}
        </section>
    );
};

export default CompetitionsList