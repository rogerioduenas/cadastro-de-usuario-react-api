import React from "react";
import { Link } from "react-router-dom";
import "./headerMain.css"
import Cmsw from "../../images/cmsw.png"

function HeaderMain(){
    return(
        <header>
            <div className="container">
                <div className="logo">
                <img src={Cmsw} style={{width: "100px"}}/>
                </div>
                <div className="btn-newPost">
                    <Link to="/post">
                        <button>Adicionar usuário</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;