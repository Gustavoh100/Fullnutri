
//Import das Rotas 
import { Link } from "react-router-dom";
//Import do use state 
import { useState } from "react";
//Import do css para mexer so no Header 
import "./style.css"

function Header() {
    return (
        <header className="cabecalho">

            <div className="logo">
                <h1>FullNutri</h1>
            </div>
            <nav className="navegacao">
                <Link to="/" ><button>Home</button></Link>
                <Link to="/cadastro" ><button>Cadastro</button></Link>
                <Link to="/cardapio" ><button>Marmitas</button></Link>
                <Link to="/monteprato" ><button>Monte Seu Prato</button></Link>
                <Link to="/planoassinatura" ><button>Assinatura</button></Link>
                <a href="https://wa.me/5511999999999?text=Olá%20FullNutri,%20quero%20saber%20mais" target="_blank" rel="noreferrer"><button>Contatos</button></a>
            </nav>

        </header>
    )
}

export default Header
