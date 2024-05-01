import { useEffect, useState } from "react"
import ContainerAdmin from "../layout/ContainerAdmin"
import { useParams } from "react-router-dom"
import { axiosMidgets } from "../config/axios.config"
import { useUserInfo } from "../store/userInfo"
import Swal from "sweetalert2"

const EditRacer = () => {
    const [racerWhitId, setRacerWhitId] = useState([])
    const { token } = useUserInfo(state => state.user)

    const { id } = useParams()

    useEffect(() => {
        axiosMidgets.get(`/api/v1/racer/${id}`)
            .then(({ data }) => setRacerWhitId(data))
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))

        axiosMidgets.patch(`/api/v1/racer/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Corredor actualizado con éxito",
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
                    className="w-[350px] grid gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="grid gap-2">
                        <label htmlFor="name">Nombre del corredor</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={racerWhitId.name} />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="carNumber">Número de auto</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="number"
                            id="number"
                            defaultValue={racerWhitId.number} />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="position">Posición</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="position"
                            id="position"
                            defaultValue={racerWhitId.position} />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="category">Categoría</label>
                        <input
                            className="bg-transparent outline-none border border-gray-700 p-2 rounded-md"
                            type="text"
                            name="category"
                            id="category"
                            defaultValue={racerWhitId.category} />
                    </div>

                    <button className="bg-[#3D2E95] transition-all font-semibold max-w-max mx-auto px-6 py-2 mb-4 rounded-md">Actualizar Corredor</button>
                </form>
            </section>
        </ContainerAdmin>
    )
}

export default EditRacer