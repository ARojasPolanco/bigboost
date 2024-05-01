import { useEffect } from "react"
import { axiosMidgets } from "../config/axios.config"

const IndividualCompetition = () => {

    useEffect(() => {
        axiosMidgets.get(`api/v1/competitions/${competitionId}`)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>IndividualCompetition</div>
    )
}

export default IndividualCompetition