import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'

const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

function Modal({ char }) {
    const [playerTalking, setPlayerTalking] = useState(false)
    const [speechCount, setSpeechCount] = useState(0)
    const [speechEnd, setSpeechEnd] = useState(false)
    const history = useHistory()
    const name = char.name

    const questOneSpeech = [
        `Welcome ${name}, are you here to defeat the dragon?`,
        'I am! Where can I find the fire-breathing S-O-B??',
        "It's up in the mountains, but your gear won't hold up against it's fire. If you take care of our Orc and Troll problem first, I'll build you new armor.",
        "Ha! That dragon doesn't stand a chance against me! Leeeroy Jenkins!!"
    ]

    const modalDivStyle = {
        width: '750px',
        height: '300px',
        backgroundColor: 'rgba(55, 55, 55, 0.8)',
        zIndex: '100',
        color: 'white',
        display: 'flex',
        justifyContent: `${playerTalking ? 'flex-end' : 'left'}`,
        alignItems: 'center',
        borderRadius: '10px',
    }

    const textDivStyle = {
        padding: '10px',
        textAlign: `${playerTalking ? 'right' : 'left'}`,
    }

    const handleClick = () => {
        if ((speechCount + 1) === questOneSpeech.length) {
            setSpeechEnd(true)
        } else {
            setSpeechCount(speechCount => speechCount += 1)
            setPlayerTalking(!playerTalking)
        }
    }

    const handleQuestClick = () => {
        history.push('/battle')
    }

    return (
        <>
            <div style={modalDivStyle}>
                <div style={textDivStyle}>
                    <h1>{`"${questOneSpeech[speechCount]}"`}</h1>
                    <h2>{playerTalking ? name : "Blacksmith"}</h2>
                </div>
            </div>
            <div style={buttonDivStyle}>
                {speechEnd ? 
                    <button onClick={handleQuestClick} className='massive ui red button' style={buttonStyle}>FIGHT THE DRAGON!</button>
                    :
                    <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>CONTINUE</button>
                }
            </div>
        </>
    )
}

export default Modal