import { useState, useEffect } from 'react'
import shop from '../Images/Shop.png'
import warrior from '../Images/Warrior-Idle.png'
import knight from '../Images/Knight-Idle.png'
import Modal from './Modal'
import { useHistory } from 'react-router-dom'

const divStyle = {
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: 'black'
}

const contentDiv = {
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
    zIndex: '100',
    backgroundColor: 'black'
}

const towersDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}

const charactersDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    left: '10%',
    bottom: '10%'
}

const shopStyle = {
    width: '1500px'
}

const warriorStyle = {
    width: '850px',
    transform: 'scaleX(-1)',
}

const warriorDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '45%',
    top: '30%'
}

const modalButtonDivStyle = {
    position: 'absolute',
    top: -75,
    left: -50
}

function Shop({ char, currentQuest, setCurrentQuest, setChar, armor, setArmor }) {
    const history = useHistory()

    useEffect(() => {
        if (armor) {
            let defense = 75
            async function armorUpgrade() {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/character/${char.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        defense
                    })
                });

                const parsedBody = await res.json();
                setChar(parsedBody)
                setTimeout(() => {
                    history.push('/home')
                }, 5000);
            }
            armorUpgrade()
        }
    }, [armor])

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={charactersDivStyle}>
                    {armor ?
                        <img src={knight} style={shopStyle} />
                        :
                        <>
                            <div style={modalButtonDivStyle}>
                                <Modal armor={armor} setArmor={setArmor} setChar={setChar} char={char} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} />
                            </div>
                            <img src={shop} style={shopStyle} />
                            <div style={warriorDivStyle}>
                                <img src={warrior} style={warriorStyle} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop