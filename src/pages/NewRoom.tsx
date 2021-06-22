import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';
import '../styles/button.scss';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

    const { user } = useAuth();

    return(
        <div  id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração simblizando perguntas e respostas" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={logoImg} alt="Letmeaks" />
                        <h1>{user?.name }</h1>
                       <h2>Criar uma nova sala</h2>
                        <form action="">
                            <input 
                            type="text" 
                            placeholder="Nome da sala"
                            />
                            <Button type="submit">
                                Criar sala
                                </Button>
                        </form>

                        <p>
                            Quer entrar em uma sala existente?<Link to="/"> clique aqui</Link>

                        </p>
                    </div>
                </main>
           
        </div>
    )
}