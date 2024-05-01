import { useEffect, useState } from "react"
import ContainerAdmin from "../layout/ContainerAdmin"
import { axiosMidgets } from "../config/axios.config"
import CompetitionsList from "../layout/CompetitionsList";

const AllCompetitions = () => {
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        axiosMidgets.get('/api/v1/competitions')
            .then(({ data }) => setCompetitions(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <ContainerAdmin>
            <section className="min-h-screen flex justify-center mt-4">
                <CompetitionsList competitions={competitions} />
            </section>
        </ContainerAdmin>
    );
};

export default AllCompetitions