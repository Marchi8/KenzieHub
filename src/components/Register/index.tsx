import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { Header, Section } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export interface Ierrors {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    bio: string;
    contact: string;
    course_module: string;
}

function Register() {

    const { createLog } = useContext(UserContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome necessário!"),
        email: yup.string().required("Email necessário!").email("E-mail inválido!"),
        password: yup.string().required("Senha necessária!")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
                "A senha deve ter 8 letras, uma maiúscula, uma minúscula,um número e um caractere especial!"),
        passwordConfirm: yup.string()
            .oneOf([yup.ref("password")], "A senha deve ser igual!")
            .required("Confirmação da senha obrigatória!"),
        bio: yup.string().required("Bio necessária!"),
        contact: yup.string().required("Contato obrigatório!"),
        course_module: yup.string().required("Módulo necessário!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<Ierrors>({
        resolver: yupResolver(formSchema)
    })

    return (
        <>
            <Header>
                <h1>Kenzie Hub</h1>
                <Link to="/"><button>Voltar</button></Link>
            </Header>
            <Section>
                <form onSubmit={handleSubmit(createLog as any)}>
                    <div>
                        <h1>Crie sua conta</h1>
                        <p>Rápido e grátis, vamos nessa</p>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                        <label>Email</label>
                        <input type="text" placeholder="Digite aqui seu email" {...register("email")} />
                        <label>Senha</label>
                        <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                        <label>Confirmar Senha</label>
                        <input type="password" placeholder="Digite novamente sua senha" {...register("passwordConfirm")} />
                        <label>Bio</label>
                        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
                        <label>Contato</label>
                        <input type="text" placeholder="Opção de contato" {...register("contact")} />
                        <label>Selecionar Módulo</label>
                        <select {...register("course_module")}>
                            <option value="primeiro módulo">Primeiro Módulo</option>
                            <option value="segundo módulo">Segundo Módulo</option>
                            <option value="terceiro módulo">Terceiro Módulo</option>
                            <option value="quarto módulo">Quarto Módulo</option>
                            <option value="quinto módulo">Quinto Módulo</option>
                            <option value="sexto módulo">Sexto Módulo</option>
                        </select>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
                <section>
                    <ul>
                        <li><span>{errors.name?.message}</span></li>
                        <li><span>{errors.email?.message}</span></li>
                        <li><span>{errors.password?.message}</span></li>
                        <li><span>{errors.passwordConfirm?.message}</span></li>
                        <li><span>{errors.bio?.message}</span></li>
                        <li><span>{errors.contact?.message}</span></li>
                        <li><span>{errors.course_module?.message}</span></li>
                    </ul>
                </section>
            </Section>
        </>
    )
}

export default Register