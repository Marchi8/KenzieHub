import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Main } from "./styles"
import axios from "axios";
import Technology from "../Techs";
import ModalTech from "../Modal/ModalTech";
import Login from "../Login";

export interface Iresponse {
    created_at: string;
    id: string;
    status: string;
    title: string;
    updated_at: string;
}

function Dashboard() {

    const [tech, setTech] = useState<Iresponse[]>([])
    const [show, setShow] = useState<boolean>(false)

    const navigate = useNavigate()

    const username = window.localStorage.getItem("@username")
    const usermodule = window.localStorage.getItem("@usermodule")
    const token = window.localStorage.getItem("@token")
    const userId = window.localStorage.getItem("@userId")

    useEffect(() => {
        if (!token) {
            navigate(`/`, { replace: true })
        } else {
            axios
                .get(`https://kenziehub.herokuapp.com/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then(res => {
                    setTech(res.data.techs)
                })
                .catch(() => console.log("Faça Login!!!"))
        }
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
        // navigate(`/`, { replace: true })
        return (<Login />)
    }
}

export default Dashboard