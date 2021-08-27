import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

function Modal({ char, setChar, currentQuest, setCurrentQuest, setQuesting, questing, setArmor, armor, setHeroHP }) {
    const [playerTalking, setPlayerTalking] = useState(false)
    const [speechCount, setSpeechCount] = useState(0)
    const [speechEnd, setSpeechEnd] = useState(false)
    const [name, setName] = useState(char.name)
    const [currentSpeech, setCurrentSpeech] = useState(currentQuest)
    const history = useHistory()

    useEffect(() => {
        async function hpCheck() {
            let health = 100
             const res = await fetch(`${process.env.REACT_APP_API_URL}/character/${char.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    health
                })
            });

            const parsedBody = await res.json();
            setChar(parsedBody)
        }
        hpCheck()
    }, [])

    const speech = {
        1: [
            `Hey fam, my name is Lantz. Are you here to defeat the dragon?`,
            'I am! Where can I find that fire-breathing S-O-B??',
            "It's up in the mountains, but your gear won't hold up against it's fire. If you take care of our Orc and Troll problem first, I'll build you new armor.",
            "Ha! That dragon doesn't stand a chance against me! Leeeroy Jenkins!!",
            "....."
        ],
        2: [
            `AH HA HA but anywho, if you take care of our Orc and Troll problem, I'll build you new armor. Come see me at my shop when you're done.`
        ],
        3: [
            'The Troll is usually around the western part. The Orc around the eastern part.'
        ],
        4: [
            'EZ! The Orc is around the eastern part.'
        ],
        5: [
            "Very nice, come follow me to my shop."
        ],
        6: [
            "Nice eh, the armor is in the back. I'll step out so you can change."
        ],
        7: [
            "Lookin good, lookin good! Now go kick that dragon's ***!"
        ],
        8: [
            "You lied to me Lantz! I still lost...wait was that thing I saw a while back..."
        ]
    }

    const buttonTitle = {
        1: 'FIGHT THE DRAGON!',
        2: 'FIGHT THE TROLL!',
        3: 'FIGHT THE ORC!',
        4: 'FIGHT THE ORC!',
        5: 'FOLLOW TO THE SHOP',
        6: 'CHANGE ARMOR',
        7: 'THE FINAL BATTLE!!!',
        8: 'USE MOTIVATION!'
    }

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
        if ((speechCount + 1) === speech[currentSpeech].length) {
            setSpeechEnd(true)
        } else {
            setSpeechCount(speechCount => speechCount += 1)
            setPlayerTalking(!playerTalking)
        }
    }

    const handleQuestClick = () => {
        if (currentQuest === 1) {
            history.push('/battle')
        } else if (currentQuest === 2) {
            setCurrentQuest(currentQuest => currentQuest + 1)
            history.push('/battle')
        } else if (currentQuest === 3) {
            setQuesting(!questing)
        } else if (currentQuest === 4) {
            history.push('/battle')
        } else if (currentQuest === 5) {
            setCurrentQuest(currentQuest => currentQuest + 1)
            history.push('/shop')
        } else if (currentQuest === 6) {
            setCurrentQuest(currentQuest => currentQuest + 1)
            setArmor(!armor)
            setTimeout(() => {
                history.push('/shop')
              }, 2000);
        } else if (currentQuest === 7) {
            history.push('/battle')
        } else if (currentQuest === 8) {
            setHeroHP(100)
        }
    }

    return (
        <>
            <div style={modalDivStyle}>
                <div style={textDivStyle}>
                    <h1>{`"${currentSpeech ? speech[currentSpeech][speechCount] : ''}"`}</h1>
                    <h2>{playerTalking ? name : "Lantz"}</h2>
                </div>
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

export default Modal