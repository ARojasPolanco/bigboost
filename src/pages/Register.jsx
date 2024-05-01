import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../layout/ContainerAuth"
import { axiosMidgets } from "../config/axios.config"
import Swal from 'sweetalert2'
import useSound from 'use-sound'
import mp3 from '../../public/sound/preloader_audio.mp3'
import logo from '../../public/images/bb_logo.png'

const Register = () => {
    const [playSound] = useSound(mp3)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target));

        axiosMidgets
            .post('api/v1/users/register', data)
            .then(() => {
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Cuenta creada con éxito",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/auth/login')
            })
            .catch((err) => console.log(err))
    }

    return (
        <ContainerAuth>
            <header onClick={playSound} className="h-[200px] aspect-square">
                <img src={logo} alt="" />
            </header>
            <section className="flex items-center gap-4 max-[750px]:flex-col">
                <form onSubmit={handleSubmit} className="grid gap-6 w-[min(100%,_350px)] sm:w-[300px]">
                    <h2 className="uppercase text-4xl font-semibold">Cuenta nueva</h2>
                    <div className="grid gap-4">
                        <label className="text-white" htmlFor="email">Correo</label>
                        <input className="bg-transparent outline-none border-b border-gray-700 p-1"
                            autoComplete="off"
                            id="email"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="grid gap-4">
                        <label className="text-white" htmlFor="name">Nombre de usuario</label>
                        <input className="bg-transparent outline-none border-b border-gray-700 p-1"
                            autoComplete="off"
                            id="name"
                            type="text"
                            name="name" />
                    </div>
                    <div className="grid gap-4">
                        <label className="text-white" htmlFor="password">Constraseña</label>
                        <input className="bg-transparent outline-none border-b border-gray-700 p-1"
                            autoComplete="off"
                            id="password"
                            type="password"
                            name="password" />
                    </div>

                    <button className="bg-purple-light shadow-md uppercase font-semibold max-w-max mx-auto px-8 py-1 rounded-xl">Crear</button>

                    <Link className="text-center underline text-white" to={"/auth/login"}>iniciar sesión</Link>
                </form>
            </section>
        </ContainerAuth>
    )
}

export default Register;