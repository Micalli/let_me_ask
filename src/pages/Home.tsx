import { useHistory } from 'react-router-dom';

import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';


import '../styles/auth.scss';
import '../styles/button.scss';

import { useAuth } from '../hooks/useAuth';

export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle} = useAuth();


    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        
        history.push('/rooms/new');

       
    }

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
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleIconImg} alt="Logo do Google" />
                            Crie sua sala com google
                            </button>

                        <div  className="separator">Ou entre em uma sala</div>
                        <form action="">
                            <input 
                            type="text" 
                            placeholder="Digite o codigo da sala"
                            />
                            <Button type="submit">
                                Entrar na sala
                                </Button>
                        </form>
                    </div>
                </main>
           
        </div>
    )
}