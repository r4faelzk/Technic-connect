import React from "react";

export const Cadastro = () => {
    return (
        <div className="container">
            <div className="imagem">

            </div>

            <div className="form-box">
                <form action="#">
                    <div className="form-header">
                        <div className="titulo">
                            <h1>Cadastro</h1>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" placeholder="Digite o seu nome" />
                        </div>


                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Digite o seu e-mail" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" placeholder="Digite o seu telefone" />
                        </div>

                        <div className="input-box">
                            <label htmlFor=""></label>
                        </div>

                        <div className="input-box">

                        </div>

                        <div className="input-box">

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}