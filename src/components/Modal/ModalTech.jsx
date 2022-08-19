import { ModalAdd, ModalBackground } from "./Modal.js"
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

function ModalTech(props) {

    const token = window.localStorage.getItem("@token")

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome necessário"),
        status: yup.string().required("Status necessário")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    function reload() {
        window.location.reload()
    }

    const refresh = () => {
        setTimeout(reload, 1500)
    }

    const postTech = (data) => {
        console.log(data)
        axios
            .post("https://kenziehub.herokuapp.com/users/techs", {
                title: data.name,
                status: data.status
            },
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            .then((res) => {
                console.log(res)
                toast.success("Tecnologia cadastrada!", {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                refresh()
            })
            .catch(() => toast.error("Tecnologia já cadastrada!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }))
    }

    if (!props.show) {
        return null
    }

    return (
        <>
            <ModalBackground />
            <ModalAdd>
                <header>
                    <h4>Cadastrar Tecnologia</h4>
                    <button onClick={props.onClose}>X</button>
                </header>
                <form onSubmit={handleSubmit(postTech)}>
                    <div>
                        <label>Nome </label>
                        <input type="text" {...register("name")} />
                        <span>{errors.name?.message}</span>
                    </div>
                    <div>
                        <label>Selecionar status</label>
                        <select {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediario">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <span>{errors.status?.message}</span>
                    </div>
                    <button type="submit">Cadastrar tecnologia</button>
                </form>
            </ModalAdd>
        </>
    )
}

export default ModalTech