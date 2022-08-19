import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import Section from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Login() {

    const { onSubmit } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Email necessário"),
        password: yup.string().required("Senha necessária")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

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
                        <span>{errors.email?.message}</span>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                        <span>{errors.password?.message}</span>
                    </div>
                        <button type="submit">Entrar</button>
                    <p>Ainda não possui uma conta?</p>
                    <Link to="/register"><button>Cadastre-se</button></Link>
                </form>
            </Section>
        </>
    )
}

export default Login