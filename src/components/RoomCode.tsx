import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'
import { useTheme } from "../hooks/useTheme";


type RoomCodeProps ={
    code: string;
}

export function RoomCode(props: RoomCodeProps){
    const {theme} = useTheme()
    function copyRoomRoClipBoard(){
        navigator.clipboard.writeText(props.code)
    }

    return(
        <button  className={`room-code ${theme}`} onClick={copyRoomRoClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span> Sala #{props.code}</span>
        </button>
    )
}