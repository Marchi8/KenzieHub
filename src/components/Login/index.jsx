import { useForm } from "react-hook-form"
import * as yup from "yup"
import axios from "axios"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useHistory } from "react-router-dom";
import Section from "./styles";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Login({ user, setUser }) {

    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().required("Email necessário"),
        password: yup.string().required("Senha necessária")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {
        axios
            .post("https://kenziehub.herokuapp.com/sessions", data)
            .then(response => {
                console.log(response)
                window.localStorage.clear();
                window.localStorage.setItem("@user", JSON.stringify(response.data.user))
                window.localStorage.setItem("@userId", response.data.user.id)
                window.localStorage.setItem("@token", response.data.token)
                toast.success("Login realizado com sucesso!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                history.push(`/dashboard`)
                setUser(response.data.user)
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

    return (
        <>
            <Section>
                <header>
                    <h1>Kenzie Hub</h1>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Digite aqui seu email" {...register("email")} />
                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                        <button type="submit">Entrar</button>
                    </div>
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register"><button>Cadastre-se</button></Link>
                </form>
                <span>{errors.password?.message}</span>
                <span>{errors.email?.message}</span>
            </Section>
        </>
    )
}

export default Login