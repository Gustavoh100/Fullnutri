
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
                <Link to="/singup" ><button>Login</button></Link>
                <Link to="/cadastro" ><button>Cadastrar</button></Link>
                <Link to="/cardapio" ><button>Cardápio</button></Link>
                <Link to="/monteprato" ><button>Monte Seu Prato</button></Link>
                <Link to="/planoassinatura" ><button>Assinatura</button></Link>
                <Link to="/contatos" ><button>Contatos</button></Link>
            </nav>

        </header>
    )
}

export default Header
