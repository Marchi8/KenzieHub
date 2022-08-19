import { Li } from "./styles"
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';

function Technology({ tech, setTech }) {

    const token = window.localStorage.getItem("@token")

    const remove = (techId) => {
        axios
            .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                console.log(res)
                const filter = tech.filter((techs) => techId !== techs.id)
                setTech(filter)
                toast.success("Tecnologia removida!", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
            .catch((err) => {
                console.log(err)
                toast.error("Algo deu errado", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
    }

    return (
        <>
            {tech?.map((tech) => (
                <Li key={tech.id}>
                    <h1>{tech.title}</h1>
                    <p>{tech.status}</p>
                    <button onClick={() => remove(tech.id)}><FaTrashAlt /></button>
                </Li>
            ))}
        </>
    )
}

export default Technology