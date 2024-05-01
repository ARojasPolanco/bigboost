import RacersCard from "./RacersCard"

const RacersList = ({ racers }) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {
                racers.map((racer) => <RacersCard key={racer.id} racer={racer} />)
            }
        </section>
    )
}

export default RacersList