import { React, useState, useEffect } from 'react'
import background from '../Images/Background.png'
import towerOne from '../Images/Tower-One.png'
import towerTwo from '../Images/Tower-Two.png'
import towerThree from '../Images/Tower-Three.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import blacksmith from '../Images/Blacksmith.png'
import warrior from '../Images/Warrior-Idle.png'
import warriorDead from '../Images/Warrior-Dead.png'
import Modal from './Modal'

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
    position: 'absolute'
}

function Home({ char }) {
    const [questing, setQuesting] = useState(false)
    const [warriorImage, setWarriorImage] = useState(warrior)
    const history = useHistory()

    useEffect(() => {
        console.log(char)
        if (char.health === 0) {
            setWarriorImage(warriorDead)
        }
    }, [])

    function handleClick() {
        setQuesting(!questing)
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={talkButtonDivStyle}>
                    <div style={modalButtonDivStyle}>
                        {questing ?
                            <Modal char={char} />
                            :
                            <button onClick={handleClick} className='massive ui orange button' style={buttonStyle}>TALK TO THE BLACKSMITH</button>
                        }
                    </div>
                </div>
                <div style={towersDivStyle}>
                    <img src={towerTwo} style={towerStyle} />
                    <img src={towerOne} style={imageStyle} />
                    <img src={towerThree} style={imageStyle} />
                </div>

                <div style={charactersDivStyle}>
                    <img src={blacksmith} style={blacksmithStyle} onClick={handleClick} />
                    <img src={warriorImage} style={warriorStyle} />
                </div>
            </div>
        </div>
    )
}

export default Home