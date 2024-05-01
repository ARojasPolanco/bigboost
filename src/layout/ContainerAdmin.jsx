import { Link } from "react-router-dom"
import { LogoutIcon } from "../shared/Icons"
import { useUserInfo } from "../store/userInfo"
import logo from '../../public/images/bb_logo.png'
import { useState } from "react"

const ContainerAdmin = ({ children }) => {
    const [isShowOptions, setIsShowOptions] = useState(false)

    const logout = useUserInfo(state => state.logout)
    return (
        <section className="min-h-screen bg-purple-bg text-white overflow-hidden">
            <header className="flex p-2 items-center justify-between bg-purple-dark relative font-montserrat">
                <img className="h-14 aspect-square" src={logo} alt="Logo big boost" />
                <section className="flex items-center gap-3 [&>button]:border [&>button]:border-gray-400 [&>button]:rounded-lg [&>button]:p-1">
                    <button
                        onClick={() => setIsShowOptions(!isShowOptions)}
                        className="hover:bg-purple-light">
                        Menú
                    </button>
                    <button
                        className="flex items-center gap-2 hover:bg-purple-light"
                        onClick={logout}>
                        <LogoutIcon />
                        <span className="hidden sm:inline-block">Cerrar Sesión</span>
                    </button>
                </section>

                <article className={`absolute -bottom-4 translate-y-full grid gap-6 bg-purple-light p-4 rounded-lg transition-[right] duration-300 ${isShowOptions ? "right-4" : "-right-full"}`}>
                    <Link to={'/panel/admin/racers/all'}>Ver corredores</Link>
                    <Link to={'/panel/admin/racers'}>Añadir corredores</Link>
                    <Link to={'/panel/admin/competitions/all'}>Ver competencias</Link>
                    <Link to={'/panel/admin/competitions'}>Añadir competencias</Link>
                </article>

            </header>
            <section className="flex justify-center items-center">
                {children}
            </section>
        </section >
    )
}

export default ContainerAdmin