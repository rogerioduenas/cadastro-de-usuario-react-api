import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import HeaderMain from "../../components/HeaderMain/HeaderMain"
import "./feed.css"

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://upload-my-api.herokuapp.com/post")
            .then((response) => {
                console.log("deu certo")
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(() => {
                console.log("deu errado")
            })
    }, [])

    function deletePost(id){
        axios.delete(`https://upload-my-api.herokuapp.com/post/delete/${id}`)

        setPosts(posts.filter(post => post._id !== id))
    }

    return (
        <div>
            <HeaderMain />
            <main>
                <div className="cards">
                    {posts.map((post, key) => {
                        return (
                            <div className="card" key={key}>
                                <header>
                                    <h2>Nome: {post.title}</h2>
                                </header>
                                <div className="line"></div>
                                <p>Email: {post.description}</p>
                                <div className="btns">
                                    <div className="btn-edit">
                                        <Link to={{pathname: `/edit/${post._id}`}}>
                                            <button>Editar</button>
                                        </Link>
                                    </div>
                                    <div className="btn-readmore">
                                        <Link to={{pathname: `/lermais/${post._id}` }}>
                                            <button>Detalhes</button>
                                        </Link>
                                    </div>
                                    <div className="btn-delete">
                                        <button onClick={() => deletePost(post._id)}>Apagar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Feed;