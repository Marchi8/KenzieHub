import { Link } from "react-router-dom"
import { Main } from "./styles"

function Dashboard({ user, setUser }) {
    const storage = JSON.stringify(window.localStorage)

    return (
        <>
            <Main>
                <header>
                    <h1>Kenzie Hub</h1>
                    <Link to="/">
                        <button onClick={() => window.localStorage.clear()}>
                            Sair
                        </button>
                    </Link>
                </header>
                <div>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                </div>
                <section>
                    <h3>Que pena! Estamos em desenvolvimento :(</h3>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </Main>
        </>
    )
}

export default Dashboard