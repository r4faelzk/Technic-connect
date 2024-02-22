import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"

export const Login = () => {
    return (
        <div className="container">
            <div className="login-form">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Usuário" required />
                        <FaUser className="icon" />

                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember">
                        <label><input type="checkbox" />Lembrar senha</label>
                        <a href="#">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Ainda não possui uma conta? <a href="">Cadastrar</a></p>
                    </div>
                </form>
            </div>
        </div>

    )
}