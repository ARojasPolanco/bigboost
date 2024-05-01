import { Link } from "react-router-dom";
import { axiosMidgets } from "../config/axios.config";
import { useUserInfo } from "../store/userInfo";

const CompetitionCard = ({ competition }) => {
    const { token } = useUserInfo(state => state.user);

    const handleDeleteCompetition = () => {
        axiosMidgets.delete(`/api/v1/competitions/${competition.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.reload())
            .catch((err) => console.log(err));
    };

    return (
        <article className="border-2 border-gray-400 rounded-md bg-gray-400/10 p-4">
            <h2>{competition.name}</h2>
            <ul>
                {competition.racers.map(racer => (
                    <li key={racer.id}>
                        <p><strong>Nombre:</strong> {racer.name}</p>
                        <p><strong>Número de auto:</strong> {racer.number}</p>
                    </li>
                ))}
            </ul>
            <section className="flex justify-end">
                <Link to={`/panel/admin/competitions/${competition.id}`}>
                    Ver detalles
                </Link>
                <button>
                    Eliminar
                </button>
            </section>
        </article>
    );
};

export default CompetitionCard