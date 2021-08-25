import { React, useState } from 'react'
import background from '../Images/Background.png'
import towerOne from '../Images/Tower-One.png'
import towerTwo from '../Images/Tower-Two.png'
import towerThree from '../Images/Tower-Three.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import blacksmith from '../Images/Blacksmith.png'
import warrior from '../Images/Warrior-Idle.png'
import Modal from './Modal'

const name = 'Xena'

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
    overflow: 'auto'
}

const fontStyle = {
    textShadow: '2px 2px lightgrey',
    textAlign: 'center',
    fontSize: '125px',
    color: 'black',
}

const imageStyle = {
    width: '200px'
}

const towerStyle = {
    width: '200px',
    transform: 'scaleX(-1)'
}

const blacksmithStyle = {
    width: '150px'
}

const warriorStyle = {
    width: '400px',
    transform: 'scaleX(-1)'
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
    top: '24%'
}

const charactersDivStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    top: '23%'
}

const talkButtonDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '30%',
    position: 'relative',
    zIndex: '100'
}

const modalButtonDivStyle = {
    position: 'absolute'
}

const questOneSpeech = [
    `Welcome ${name}`
]

function Home() {
    const [questing, setQuesting] = useState(false)

    const history = useHistory()

    function handleClick() {
        setQuesting(!questing)
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={talkButtonDivStyle}>
                    <div style={modalButtonDivStyle}>
                        {questing ? 
                            <Modal />
                            :
                            <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>CLICK TO TALK TO THE BLACKSMITH</button>
                        }
                    </div>
                </div>
                <div style={towersDivStyle}>
                    <img src={towerTwo} style={towerStyle} />
                    <img src={towerOne} style={imageStyle} />
                    <img src={towerThree} style={imageStyle} />
                </div>

                <div style={charactersDivStyle}>
                    <img src={blacksmith} style={blacksmithStyle} />
                    <img src={warrior} style={warriorStyle} />
                </div>
            </div>
        </div>
    )
}

export default Home