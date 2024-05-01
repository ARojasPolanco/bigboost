import { Link } from "react-router-dom"
import { PincelIcon, TrashIcon } from "../shared/Icons"
import { axiosMidgets } from "../config/axios.config"
import { useUserInfo } from "../store/userInfo"

const RacersCard = ({ racer }) => {
    const { token } = useUserInfo(state => state.user)

    const handleDeleteRacer = () => {
        axiosMidgets.delete(`/api/v1/racer/${racer.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.reload())
            .catch((err) => console.log(err))
    }

    return (
        <article className="flex py-6 px-4 border-2 border-gray-400 rounded-md bg-gray-400/10">
            <section className="flex-1 flex flex-col gap-[22px]">
                <h3>Nombre del corredor: <span>{racer.name}</span></h3>
                <h3>Número de auto: <span>{racer.number}</span></h3>
                <h3>Posición en campeonato: <span>{racer.position}</span></h3>
                <h3>Categoría: <span>{racer.category}</span></h3>
            </section>
            <section className="flex flex-col items-start justify-between">
                <section className="flex items-center gap-4">
                    <Link to={`/panel/admin/racers/${racer.id}`}>
                        <PincelIcon />
                    </Link>
                    <button onClick={handleDeleteRacer}>
                        <TrashIcon />
                    </button>
                </section>
                <p>Nº ID: {racer.id}</p>
            </section>
        </article>
    )
}

export default RacersCard