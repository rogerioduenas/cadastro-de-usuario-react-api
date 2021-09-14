import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./post.css"

const validationPost = yup.object().shape({
    title: yup.string().required("O nome é obrigatorio").max(30, "O nome pode ter até 30 caracteres"),
    description: yup.string().required("O email é obrigatorio")
})

function Post(){

    let history = useHistory();

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationPost)
    })
        const addPost = data => axios.post("https://upload-my-api.herokuapp.com/post/create", data)
        .then(() => {
        console.log("deu certo")
        history.push("/")
    })
    .catch(() => {
        console.log("erro")
    })
    return(
        <div>
            <Header />
            <main>
                <div className="card-post">
                    <h1>Cadastrar usuário</h1>
                    <div className="line-post"></div>

                    <div className="body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Nome</label>
                                <input type="text" name="title" {...register("title")}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Email</label>
                                <input type="email" name="description" {...register("description")}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Gênero</label>
                                <select {...register("content")}>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Post;