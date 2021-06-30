import { useHistory } from 'react-router-dom';

import IllustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import { ThemeSwitcher } from '../components/ThemeSwitcher'


import '../styles/auth.scss';
import '../styles/button.scss';

import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useTheme } from '../hooks/useTheme'

export function Home() {

    const history = useHistory();
    const { user, signInWithGoogle} = useAuth();    
    const [roomCode , setRoomCode] = useState('');
    const { theme } = useTheme()


    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }
        
        history.push('/rooms/new');
    }

        async function handleJoinRoom(event : FormEvent){
            event.preventDefault();

            if (roomCode.trim() === '') {
                return;
            }
            
            const roomRef = await database.ref(`rooms/${roomCode}`).get();

            if(!roomRef.exists()){
                alert('Room does not exists.');
                return;
            }

            if(roomRef.val().endedAt){
                alert('Sala já foi fechada')
                return;
            }

            history.push(`/rooms/${roomCode}`);  
        }

    return(
        <div  id="page-auth" className={theme}>
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
                        <form onSubmit={handleJoinRoom} action="">
                            <input 
                            type="text" 
                            placeholder="Digite o codigo da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                            />
                            <Button type="submit">
                                Entrar na sala
                                </Button>
                        </form>
                    </div>
                </main>
                <ThemeSwitcher />
        </div>
    )
}