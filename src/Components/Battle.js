import { React, useState, useEffect } from 'react'
import background from '../Images/Battle-Dragon.png'
import { useHistory } from 'react-router-dom'
import warrior from '../Images/Warrior-Idle.png'
import warriorAttack from '../Images/Warrior-Attack.png'
import dragon from '../Images/Dragon-Idle.png'
import dragonAttack from '../Images/Dragon-Attack.png'
import ProgressBar from './ProgressBar'
import attackIcon from '../Images/Attack.png'
import warriorDead from '../Images/Warrior-Dead.png'

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
}

const fontStyle = {
    textShadow: '2px 2px lightgrey',
    textAlign: 'center',
    fontSize: '125px',
    color: 'red',
}

const dragonStyle = {
    width: '100%',
    transform: 'scaleX(-1)'
}

const warriorStyle = {
    width: '500px',
}

const buttonStyle = {
    boxShadow: '5px 10px grey'
}

const towersDivStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    overflow: 'hidden',
    left: 225
}

const monsterDivStyle = {
    // position: 'absolute',
    zIndex: '5'
}

const warriorDivStyle = {
    // position: 'absolute',
    zIndex: '10'
}

const charactersDivStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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

const healthDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    bottom: 250,
    right: 0,
    left: 0,
    padding: '50px',
}

const attackStyle = {
    width: '200px',
    transform: 'scaleX(-1)',
    transform: 'scaleY(-1)',
    filter: 'drop-shadow(0px 0px 30px #000)'
}

const attackDivStyle = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    top: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100'
}

function Battle({ char, setChar }) {
    const history = useHistory()
    const [heroHP, setHeroHP] = useState(100)
    const [monsterHP, setMonsterHP] = useState(100)
    const [heroAttack, setHeroAttack] = useState(25)
    const [monsterAttack, setMonsterAttack] = useState(100)
    const [turn, setTurn] = useState(true)
    const [fighting, setFighting] = useState(false)
    const [won, setWon] = useState()
    const [attack, setAttack] = useState(false)
    const [monsterAttacking, setMonsterAttacking] = useState(false)
    const [warriorImage, setWarriorImage] = useState(warrior)

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        console.log('HP')

        if (heroHP === 0) {
            async function hpCheck() {
                let health = heroHP
                setWarriorImage(warriorDead)
    
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
                
                await delay(2500)
                history.push('/home')
            }
            hpCheck()
        }
    }, [heroHP, monsterHP])

    const heroTurn = () => {
        setMonsterHP(monsterHP - heroAttack)
    }

    const monsterTurn = () => {
        setHeroHP(heroHP - monsterAttack)
    }
    

    const handleClick = async () => {
        if (attack) {
            setWarriorImage(warrior)
            setAttack(!attack)
        } else {
            setWarriorImage(warriorAttack)
            setAttack(!attack)
        }
        await delay(1000);
        heroTurn()
        
        await delay(2000)
        setMonsterAttacking(!monsterAttacking)
        await delay(1000);
        monsterTurn()
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={towersDivStyle}>
                    <div style={warriorDivStyle}>
                        <img src={warriorImage} style={warriorStyle} />
                    </div>
                    <div style={monsterDivStyle}>
                        <img src={monsterAttacking ? dragonAttack : dragon} style={dragonStyle} />
                    </div>
                </div>
                <div style={healthDivStyle}>
                    <ProgressBar percentage={heroHP} />
                    <ProgressBar percentage={monsterHP} />
                </div>
                <div style={attackDivStyle}>
                    <img src={attackIcon} style={attackStyle} onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default Battle