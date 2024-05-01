import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../layout/ContainerAuth"
import { axiosMidgets } from "../config/axios.config"
import { useUserInfo } from "../store/userInfo"
import useSound from 'use-sound'
import mp3 from '../../public/sound/preloader_audio.mp3'
import logo from '../../public/images/bb_logo.png'

const Login = () => {
    const [playSound] = useSound(mp3)

    const navigate = useNavigate()

    const login = useUserInfo(state => state.login)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target));
        axiosMidgets.post("api/v1/users/login", data)
            .then(({ data }) => {
                login(data),
                    navigate('/panel/admin/racers/all')
            })
            .catch((err) => console.log(err))
    }

    return (
        <ContainerAuth>
            <header onClick={playSound} className="h-[250px] aspect-square">
                <img src={logo} alt="" />
            </header>
            <section className="flex items-center gap-12 max-[750px]:flex-col text-white overflow-hidden">
                <form onSubmit={handleSubmit} className="grid gap-6 w-[min(100%,_350px)]">
                    <h2 className="uppercase text-4xl font-semibold">Iniciar Sesión</h2>
                    <div className="grid gap-4">
                        <label className="text-white" htmlFor="email">Correo</label>
                        <input className="bg-transparent outline-none border-b border-gray-700 p-1" autoComplete="off"
                            id="email"
                            type="email"
                            name="email"
                            defaultValue={'tester@testing1.com'} />
                    </div>
                    <div className="grid gap-4">
                        <label className="text-white" htmlFor="password">Constraseña</label>
                        <input className="bg-transparent outline-none border-b border-gray-700 p-1" autoComplete="off"
                            id="password"
                            type="password"
                            name="password"
                            defaultValue={'123456789ar'} />
                    </div>

                    <button className="bg-purple-light transition-all uppercase font-semibold max-w-max mx-auto px-8 py-1 rounded-xl">Entrar</button>

                    <Link className="text-center underline yellow-border" to={"/auth/register"}>Crear una cuenta nueva</Link>
                </form>
            </section>
        </ContainerAuth>
    )
}

export default Login