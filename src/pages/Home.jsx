import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-center font-bold text-xl">Bienvenido reclutador, gracias por visitar este sitio</h1>
                <p>A continuación te dejo un resumen de como esta construido este sitio y que falta por agregarle</p>
                <div className="flex justify-center gap-20">
                    <ul>
                        <p><strong>Backend:</strong></p>
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Sequelize
                        </li>
                        <li>
                            Zod
                        </li>
                        <li>
                            fly.io(alojamiento)
                        </li>
                    </ul>
                    <ul>
                        <p><strong>FrontEnd:</strong></p>
                        <li>
                            React.js
                        </li>
                        <li>
                            Tailwind css
                        </li>
                        <li>
                            Zustand
                        </li>
                        <li>
                            React-router-dom
                        </li>
                        <li>
                            Axios
                        </li>
                        <a href="https://www.figma.com/file/K7qeIf7KTiaRbbxgoIri19/BB?type=design&node-id=0%3A1&mode=dev&t=IS0rWoVyPEGYgzXG-1" target="_blank">
                            Figma (Click aquí para ver el diseño)
                        </a>
                    </ul>
                </div>
                <p>Falta por estilar algunas secciones, como la de las competencias y algunas funcionalidades de manejo de los estados de las competencias.</p>

                <Link to={'/auth/login'} className="bg-slate-900 p-2 w-[255px] text-white text-center">Continuar</Link>
                <a href="https://github.com/ARojasPolanco/midgets-db" target="_blank">Repositorio Backend</a>
                <a href="https://github.com/ARojasPolanco/bigboost" target="_blank">Repositorio Frontend</a>
            </div>
        </section>
    )
}

export default Home