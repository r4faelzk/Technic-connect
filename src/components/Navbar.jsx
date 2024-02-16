import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/servico">Serviços</NavLink>
                </li>

                <li>
                    <NavLink to="/orcamento">Orçamento</NavLink>
                </li>

                <li>
                    <NavLink to="/contato">Contato</NavLink>
                </li>

            </ul>
        </nav>
    )
}