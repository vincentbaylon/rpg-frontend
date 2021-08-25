import React from 'react'
import background from '../Images/Background.png'
import dragon from '../Images/Dragon-Fireball.png'
import tower from '../Images/Right-Tower.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

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

const dragonStyle = {
    width: '750px'
}

const towerStyle = {
    width: '250px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

const vertDivStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight
}

const paddingMargin = {
    padding: '10px',
    margin: '10px'
}

function Start() {
    const history = useHistory()

    function handleClick() {
        history.push('/create')
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div className='ui  column centered grid' style={vertDivStyle}>
                    <div className='row' style={paddingMargin}>
                        <div className='font-face-fenwick' style={fontStyle}>
                            <br></br>
                            How To Train Your Dragon
                        </div>
                    </div>
                    <div className='row' style={paddingMargin}>
                        <div>
                            <img src={dragon} style={dragonStyle}/>
                        </div>
                        <div>
                            <img src={tower} style={towerStyle}/>
                        </div>
                    </div>
                    <div className='row' style={paddingMargin}>
                        <button onClick={handleClick} className='massive ui red button' style={buttonStyle}>CREATE A CHARACTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start