import { axiosMidgets } from '../config/axios.config'

const PanelUser = () => {
    const [competitions, setCompetitions] = useState([])

    useEffect(() => {
        // axiosMidgets.get('api/v1/competitions')
        //     .then(({ data }) => setCompetitions(data))
        //     .catch((err) => console.log(err))
    }, [])


    return (
        <>

        </>
    )
}

export default PanelUser