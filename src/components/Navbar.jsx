import React from "react";
import Logo from "../images/image-removebg-preview.png"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav>
            <a href="
            " className="logo"><img src={Logo} alt="logo" /></a>
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