import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

export const UserContext = createContext({})

function UserProvider({ children }) {

    const [user, setUser] = useState()
    const history = useHistory()

    const onSubmit = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/sessions", data)
            .then(response => {
                setUser(response.data.user)
                window.localStorage.setItem("@username", response.data.user.name)
                window.localStorage.setItem("@usermodule", response.data.user.course_module)
                window.localStorage.setItem("@userId", response.data.user.id)
                window.localStorage.setItem("@token", response.data.token)
                toast.success("Login realizado com sucesso!", {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                history.push(`/dashboard`)
            })
            .catch(error => {
                console.log(error)
                toast.error("Email ou senha incorretos", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    const createLog = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/users", data)
            .then(response => {
                console.log(response)
                toast.success("Conta criada com sucesso!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                history.push(`/`)
            })
            .catch(error => {
                console.log(error)
                toast.error("Ops! Algo deu errado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    return (
        <UserContext.Provider value={{ user, setUser, onSubmit, createLog }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider