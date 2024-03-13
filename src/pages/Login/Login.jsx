import React from "react";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Login.css"

export const Login = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="login-register">
                    <form action="" className="login-form">
                        <h2 className="title">Login</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Usuário" />
                        </div>

                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Senha" />
                        </div>

                        <input type="submit" value={"Login"} className="btn-login" />

                    </form>

                    <form action="" className="login-form">
                        <h2 className="title">Cadastro</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Usuário" />
                        </div>

                        <div className="input-field">
                            <MdEmail className="icon" />
                            <input type="text" placeholder="E-mail" />
                        </div>

                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Senha" />
                        </div>

                        <input type="submit" value={"Cadastrar"} className="btn-login" />

                    </form>
                </div>
                <div className="panels-container"></div>
            </div>

        </div>

    )
}