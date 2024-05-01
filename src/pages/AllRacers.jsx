import { useEffect, useState } from "react"
import ContainerAdmin from "../layout/ContainerAdmin"
import { axiosMidgets } from "../config/axios.config"
import RacersList from "../layout/RacersList"

const AllRacers = () => {
    const [racers, setRacers] = useState([])

    useEffect(() => {
        axiosMidgets.get('/api/v1/racer')
            .then(({ data }) => setRacers(data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <ContainerAdmin>
            <section className="min-h-screen flex justify-center mt-4">
                <RacersList racers={racers} />
            </section>
        </ContainerAdmin>
    )
}

export default AllRacers