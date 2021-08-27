import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import believe from '../Images/Believe.jpeg'

const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

function ThanksModal({ char }) {
    const [playerTalking, setPlayerTalking] = useState(false)
    const [speechCount, setSpeechCount] = useState(0)
    const [speechEnd, setSpeechEnd] = useState(false)
    const [name, setName] = useState(char.name)
    const [motivation, setMotivation] = useState(false)
    const history = useHistory()

    useEffect(() => {

    }, [])

    const speech = {
        1: [
            "Congratulations, very nice work. Your reward is...",
            "I'll be with you through Phase 5!",
            "Good luck Guardians!!"
        ]
    }

    const buttonTitle = {
        1: 'baNaNa Gang!'
    }

    const modalDivStyle = {
        width: '750px',
        height: '300px',
        backgroundColor: 'rgba(55, 55, 55, 0.8)',
        zIndex: '100',
        color: 'white',
        display: 'flex',
        justifyContent: `${'left'}`,
        alignItems: 'center',
        borderRadius: '10px',
    }

    const textDivStyle = {
        padding: '10px',
        textAlign: `left`,
    }

    const handleClick = () => {
        if ((speechCount + 1) === speech[1].length) {
            setSpeechEnd(true)
        } else {
            setSpeechCount(speechCount => speechCount += 1)
            setPlayerTalking(!playerTalking)
        }
    }

    const handleQuestClick = () => {
        
    }

    return (
        <>
            <div style={modalDivStyle}>
                {motivation ?
                    <div>
                        <img src={believe} />
                    </div>
                    :
                    <div style={textDivStyle}>
                        <h1>{`"${speech[1][speechCount]}"`}</h1>
                        <h2>Lantz</h2>
                    </div>
                }
            </div>
            <div style={buttonDivStyle}>
                {speechEnd ?
                    <button onClick={handleQuestClick} className='massive ui red button' style={buttonStyle}>{buttonTitle[1]}</button>
                    :
                    <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>CONTINUE</button>
                }
            </div>
        </>
    )
}

export default ThanksModal