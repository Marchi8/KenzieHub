import { Li } from "./styles"
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';

interface Itech {
    id: string;
    status: string;
    title: string;
}

function Technology({ tech, setTech }: any) {
    const token = window.localStorage.getItem("@token")

    const remove = (techId: Itech) => {
        axios
            .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                console.log(res)
                const filter = tech.filter((techs: { id: Itech; }) => techId !== techs.id)
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
            {tech?.map((tech: Itech) => (
                <Li key={tech.id}>
                    <h1>{tech.title}</h1>
                    <p>{tech.status}</p>
                    <button onClick={() => remove(tech.id as unknown as Itech)}><FaTrashAlt /></button>
                </Li>
            ))}
        </>
    )
}

export default Technology