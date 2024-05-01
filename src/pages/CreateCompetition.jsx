import Swal from "sweetalert2"
import { axiosMidgets } from "../config/axios.config"
import ContainerAdmin from "../layout/ContainerAdmin"
import { useUserInfo } from "../store/userInfo"

const CreateCompetition = () => {
    const { token } = useUserInfo(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const racerIdsInput = formData.get("racerIds");

        // Convertir la cadena de corredores separados por comas a un array de números
        const racerIds = racerIdsInput.split(",").map(id => parseInt(id.trim(), 10));

        const data = {
            name: name,
            racerIds: racerIds
        };

        axiosMidgets.post('/api/v1/competitions', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(({ data }) => {
                e.target.reset(),
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Competencia añadida con éxito",
                        showConfirmButton: false,
                        timer: 1500
                    });
                console.log(data)
            })
            .catch((err) => console.log(err));
    }

    return (
        <ContainerAdmin>
            <section className="min-h-screen flex flex-col justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-[300px] grid gap-6"
                >
                    <div className="grid gap-2">
                        <label htmlFor="name">Nombre de la competencia</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            autoComplete='off' />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="racersIds">Número de los corredores</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="racerIds"
                            id="racerIds"
                            autoComplete='off'
                            placeholder="Nº ID: 1, 2, 3, 4" />
                    </div>
                    <button className="bg-[#3D2E95] transition-all font-semibold max-w-max mx-auto px-6 py-2 mb-4 rounded-md">Añadir Comptencia</button>
                </form>
            </section>
        </ContainerAdmin>
    )
}

export default CreateCompetition