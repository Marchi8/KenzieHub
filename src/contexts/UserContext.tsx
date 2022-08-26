import axios from "axios";
import { ReactNode, useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IuseAuth>({} as IuseAuth)


export interface IUserData {
    email: string;
    password: string;
}

export interface IUserProps {
    children: ReactNode;
}

export interface IuseAuth {
    user: IResponseUserData;
    onSubmit: (data: IUserData) => void;
    createLog: (data: ICadastro) => void;
}

export interface ICadastro {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    bio: string;
    contact: string;
    course_module: string;
}

interface IResponseUser {
    token: string;
    user: IResponseUserData;
    setUser: (any: any) => void;
}

export interface IResponseUserData {
    id: string;
    avatar_url: string | null;
    bio: string | undefined;
    contact: string | undefined;
    course_module: string;
    created_at: string;
    email: string;
    name: string;
    techs: ITechs[];
    updated_at: string;
    works: IWorks[];
}

interface ITechs {
    created_at: string;
    id: string;
    status: string;
    title: string;
    updated_at: string;
}

interface IWorks {
    title: string;
    description: string;
    deploy_url: string;
}

interface IResponseUser {
    token: string;
    user: IResponseUserData;
}

function UserProvider({ children }: IUserProps) {

    const navigate = useNavigate()

    const [user, setUser] = useState<IResponseUserData>({} as IResponseUserData)



    const onSubmit = (data: IUserData) => {
        axios
            .post<IResponseUser>("https://kenziehub.herokuapp.com/sessions", data)
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
                navigate(`/dashboard`, { replace: true })
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

    const createLog = (data: ICadastro) => {
        axios
            .post<IResponseUser>("https://kenziehub.herokuapp.com/users", data)
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
                navigate(`/`, { replace: true })
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
        <UserContext.Provider value={{ user, onSubmit, createLog }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider