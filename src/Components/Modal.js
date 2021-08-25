import { React, useState } from 'react'



const buttonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

function Modal() {
    const [playerTalking, setPlayerTalking] = useState(false)

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

    const handleClick = () => { setPlayerTalking(!playerTalking) }

    return (
        <>
            <div style={modalDivStyle}>
                <div style={textDivStyle}>
                    <h1>"Welcome Xena Warrior Princess"</h1>
                    <h2>Blacksmith</h2>
                </div>
            </div>
            <div style={buttonDivStyle}>
                <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>CONTINUE</button>
            </div>
        </>
    )
}

export default Modal