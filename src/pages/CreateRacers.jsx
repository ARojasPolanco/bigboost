import Swal from "sweetalert2"
import { axiosMidgets } from "../config/axios.config"
import ContainerAdmin from "../layout/ContainerAdmin"
import { useUserInfo } from "../store/userInfo"

const CreateRacers = () => {
    const { token } = useUserInfo(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))

        axiosMidgets.post('/api/v1/racer', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Corredor añadido con éxito",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((err) => console.log(err))
    }

    return (
        <ContainerAdmin>
            <section className="min-h-screen flex flex-col justify-center items-center">
                <form
                    className="w-[300px] grid gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="grid gap-2">
                        <label htmlFor="name">Nombre del corredor</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            autoComplete='off' />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="carNumber">Número de auto</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="number"
                            id="number"
                            autoComplete='off' />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="position">Posición</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="position"
                            id="position"
                            autoComplete='off' />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="category">Categoría</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="category"
                            id="category"
                            autoComplete='off' />
                    </div>

                    <button className="bg-[#3D2E95] transition-all font-semibold max-w-max mx-auto px-6 py-2 mb-4 rounded-md">Añadir Corredor</button>
                </form>
            </section>
        </ContainerAdmin >
    )
}

export default CreateRacers