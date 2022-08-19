import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { Main } from "./styles"
import axios from "axios";
import Technology from "../Techs";
import ModalTech from "../Modal/ModalTech";

function Dashboard() {

    const [tech, setTech] = useState()
    const [show, setShow] = useState(false)

    const history = useHistory()

    const username = window.localStorage.getItem("@username")
    const usermodule = window.localStorage.getItem("@usermodule")
    const token = window.localStorage.getItem("@token")
    const userId = window.localStorage.getItem("@userId")

    useEffect(() => {
        axios
            .get(`https://kenziehub.herokuapp.com/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                setTech(res.data.techs)
            })
            .catch(() => console.log("Faça Login!!!"))
    }, [])

    if (token) {
        return (
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
                    <h2>Olá, {username}</h2>
                    <p>{usermodule}</p>
                </div>
                <section>
                    <div>
                        <h3>Tecnologias</h3>
                        <button onClick={() => setShow(true)}>+</button>
                    </div>
                    <ModalTech onClose={() => setShow(false)} show={show} />
                    <ul>
                        <Technology tech={tech} setTech={setTech} />
                    </ul>
                </section>
            </Main>
        )
    }
    else {
        history.push(`/`)
    }
}

export default Dashboard