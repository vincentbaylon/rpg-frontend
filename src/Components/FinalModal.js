import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import believe from '../Images/Believe.jpeg'
import ReactPlayer from 'react-player'

const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

function FinalModal({ char, setChar, currentQuest, setCurrentQuest, setQuesting, questing, setArmor, armor, setHeroHP, setFinalScene, setTurn, setWarriorImage, knightImage }) {
    const [playerTalking, setPlayerTalking] = useState(false)
    const [speechCount, setSpeechCount] = useState(0)
    const [speechEnd, setSpeechEnd] = useState(false)
    const [name, setName] = useState(char.name)
    const [currentSpeech, setCurrentSpeech] = useState(currentQuest)
    const [motivation, setMotivation] = useState(false)
    const history = useHistory()

    useEffect(() => {

    }, [])

    const speech = {
        7: [
            "What the F?! I still lost...wait was that thing I saw a while back..."
        ],
        8: [
            "I need more motivation..."
        ]
    }

    const buttonTitle = {
        7: 'USE MOTIVATION!',
        8: 'MORE MOTIVATION!'
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
        if ((speechCount + 1) === speech[8].length) {
            setSpeechEnd(true)
        } else {
            setSpeechCount(speechCount => speechCount += 1)
            setPlayerTalking(!playerTalking)
        }
    }

    const handleQuestClick = () => {
        if (currentQuest === 7) {
            setMotivation(true)
            setTimeout(() => {
                setFinalScene(false)
                setTurn(false)
                setHeroHP(100)
                setWarriorImage(knightImage)
                setCurrentQuest(currentQuest => currentQuest + 1)
            }, 3000);
        } else if (currentQuest === 8) {
            setMotivation(true)
            setTimeout(() => {
                setFinalScene(false)
                setTurn(false)
                setHeroHP(100)
                setWarriorImage(knightImage)
            }, 25000);
        }
    }

    return (
        <>
            <div style={modalDivStyle}>
                {motivation ?
                    ((currentQuest === 7) ?
                        <div>
                            <img src={believe} />
                        </div>
                        :
                        <ReactPlayer
                            url='https://youtu.be/dQw4w9WgXcQ'
                            playing={true}
                        />)
                    :
                    <div style={textDivStyle}>
                        <h1>{`"${speech[currentSpeech][speechCount]}"`}</h1>
                        <h2>{name}</h2>
                    </div>
                }
            </div>
            <div style={buttonDivStyle}>
                {speechEnd ?
                    <button onClick={handleQuestClick} className='massive ui red button' style={buttonStyle}>{buttonTitle[currentQuest]}</button>
                    :
                    <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>CONTINUE</button>
                }
            </div>
        </>
    )
}

export default FinalModal