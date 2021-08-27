import { React, useState, useEffect } from 'react'
import background from '../Images/Background.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import blacksmith from '../Images/Blacksmith.png'
import warrior from '../Images/Warrior-Idle.png'
import ThanksModal from './ThanksModal'
import knight from '../Images/Knight-Idle.png'

const divStyle = {
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: '100%',
    maxHeight: '100%',
}

const contentDiv = {
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'auto',
    zIndex: '100'
}

const fontStyle = {
    textShadow: '2px 2px lightgrey',
    textAlign: 'center',
    fontSize: '125px',
    color: 'black',
}

const imageStyle = {
    width: '275px'
}

const towerStyle = {
    width: '275px',
    transform: 'scaleX(-1)'
}

const blacksmithStyle = {
    width: '250px',
    filter: 'drop-shadow(0px 0px 30px #fff)'
}

const warriorStyle = {
    width: '650px',
    transform: 'scaleX(-1)',
}

const knightStyle = {
    width: '1100px',
    transform: 'scaleX(-1)',
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

const towersDivStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    top: '12%',
    zIndex: '1'
}

const charactersDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: '2',
    left: '27%',
    bottom: '10%'
}

const talkButtonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '25%',
    position: 'relative',
    zIndex: '100'
}

const modalButtonDivStyle = {
    position: 'absolute',
}

function Thanks({ char }) {
    const [questing, setQuesting] = useState(false)
    const history = useHistory()

    useEffect(() => {

    }, [])

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={talkButtonDivStyle}>
                    <div style={modalButtonDivStyle}>


                        <ThanksModal char={char} />

                    </div>
                </div>

                <div style={charactersDivStyle}>
                    <img src={blacksmith} style={blacksmithStyle} />
                    <img src={knight} style={knightStyle} />
                </div>
            </div>
        </div>
    )
}

export default Thanks