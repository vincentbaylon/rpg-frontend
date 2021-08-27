import { React, useState, useEffect } from 'react'
import dragonBackground from '../Images/Battle-Dragon.png'
import trollBackground from '../Images/Battle-Troll.png'
import orcBackground from '../Images/Battle-Orc.png'
import { useHistory } from 'react-router-dom'
import warrior from '../Images/Warrior-Idle.png'
import warriorAttack from '../Images/Warrior-Attack.png'
import dragon from '../Images/Dragon-Idle.png'
import dragonAttack from '../Images/Dragon-Attack.png'
import dragonDead from '../Images/Dragon-Dead.png'
import ProgressBar from './ProgressBar'
import attackIcon from '../Images/Attack.png'
import warriorDead from '../Images/Warrior-Dead.png'
import troll from '../Images/Troll-Idle.png'
import trollAttack from '../Images/Troll-Attack.png'
import trollDead from '../Images/Troll-Dead.png'
import orc from '../Images/Orc-Idle.png'
import orcAttack from '../Images/Orc-Attack.png'
import orcDead from '../Images/Orc-Dead.png'
import knight from '../Images/Knight-Idle.png'
import knightAttack from '../Images/Knight-Attack.png'
import knightDead from '../Images/Knight-Dead.png'
import FinalModal from './FinalModal'

const divStyle = {
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: '100%',
    maxHeight: '100%',
}

const fontStyle = {
    textShadow: '2px 2px lightgrey',
    textAlign: 'center',
    fontSize: '125px',
    color: 'red',
}

const warriorStyle = {
    width: '500px',
}

const knightStyle = {
    width: '500px'
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
    // zIndex: '5'
}

const warriorDivStyle = {
    // position: 'absolute',
    // zIndex: '10'
}

const charactersDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
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
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '100%'
}

const healthDivStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    bottom: 220,
    right: 0,
    left: 0,
    padding: '50px',
}

const attackStyle = {
    width: '200px',
    transform: 'scaleX(-1)',
    transform: 'scaleY(-1)',
    filter: 'drop-shadow(0px 0px 30px #fff)'
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

function Battle({ char, setChar, currentQuest, setCurrentQuest, armor, setArmor }) {
    const history = useHistory()
    const [heroHP, setHeroHP] = useState(char.health)
    const [monsterHP, setMonsterHP] = useState(100)
    const [heroDefense, setHeroDefense] = useState(char.defense)
    const [heroAttack, setHeroAttack] = useState(char.attack)
    const [monsterAttack, setMonsterAttack] = useState(0)
    const [monsterDefense, setMonsterDefense] = useState(0)
    const [turn, setTurn] = useState(false)
    const [fighting, setFighting] = useState(false)
    const [won, setWon] = useState()
    const [attack, setAttack] = useState(false)
    const [monsterAttacking, setMonsterAttacking] = useState(false)
    const [warriorImage, setWarriorImage] = useState(warrior)
    const [background, setBackground] = useState()
    const [monster, setMonster] = useState()
    const [monsterAction, setMonsterAction] = useState()
    const [width, setWidth] = useState('')
    const [monsterDead, setMonsterDead] = useState()
    const [finalScene, setFinalScene] = useState(false)
    const [monsterDefault, setMonsterDefault] = useState()

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const dragonStyle = {
        width: `${width}`,
        transform: 'scaleX(-1)'
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

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/quest/${currentQuest}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMonsterAttack(data.attack)
            setMonsterDefense(data.defense)
        })
        if (currentQuest === 1) {
            setBackground(dragonBackground)
            setMonster(dragon)
            setWidth('100%')
            setMonsterAction(dragonAttack)
        } else if (currentQuest === 3) {
            setBackground(trollBackground)
            setMonster(troll)
            setWidth('90%')
            setMonsterAction(trollAttack)
            setMonsterDead(trollDead)
            setMonsterDefault(troll)
        } else if (currentQuest === 4) {
            setBackground(orcBackground)
            setMonster(orc)
            setWidth('95%')
            setMonsterAction(orcAttack)
            setMonsterDead(orcDead)
            setMonsterDefault(orc)
        } else if (currentQuest === 7) {
            setBackground(dragonBackground)
            setMonsterDefault(dragon)
            setMonster(dragon)
            setWidth('100%')
            setMonsterAction(dragonAttack)
            setMonsterDead(dragonDead)
            setWarriorImage(knight)
        }
    }, [])

    useEffect(() => {
        setTurn(!turn)
        if (heroHP === 0) {
            if ((currentQuest === 7) || (currentQuest === 8)) {
                async function hpCheck() {
                    let health = heroHP
                    setWarriorImage(knightDead)

                    await delay(2000)
                    setFinalScene(true)
                }
                hpCheck()
            } else {
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
                    setCurrentQuest(currentQuest => currentQuest + 1)
                    await delay(2000)
                    history.push('/home')
                }
                hpCheck()
            }
        }
        if (monsterHP === 0) {
            if (currentQuest === 8) {
                async function monsterCheck() {
                    setMonster(monsterDead)
                    await delay(2000)
                    history.push('/thanks')
                }
                monsterCheck()
            } else {
                async function monsterCheck() {
                    setMonster(monsterDead)
                    setCurrentQuest(currentQuest => currentQuest + 1)
                    await delay(2000)
                    history.push('/home')
                }
                monsterCheck()
            }
        }
    }, [heroHP, monsterHP])

    const heroTurn = () => {
        setMonsterHP(monsterHP - (heroAttack - monsterDefense))
    }

    const monsterTurn = () => {
        setHeroHP(heroHP - (monsterAttack - heroDefense))
    }


    const handleClick = async () => {
        if (attack) {
            setWarriorImage(armor ? knight : warrior)
            setAttack(!attack)
        } else {
            setWarriorImage(armor ? knightAttack : warriorAttack)
            setAttack(!attack)
        }
        await delay(1000);
        heroTurn()

        await delay(2000)
        if (monsterAttacking) {
            setMonster(monsterDefault)
            setMonsterAttacking(!monsterAttacking)
        } else {
            setMonster(monsterAction)
            setMonsterAttacking(!monsterAttacking)
        }
        await delay(1000);
        monsterTurn()
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div style={towersDivStyle}>
                    <div style={warriorDivStyle}>
                        <img src={warriorImage} style={armor ? knightStyle : warriorStyle} />
                    </div>
                    <div style={monsterDivStyle}>
                        <img src={monster} style={dragonStyle} />
                    </div>
                </div>
                <div style={healthDivStyle}>
                    <ProgressBar percentage={heroHP} />
                    <ProgressBar percentage={monsterHP} />
                </div>
                <div style={attackDivStyle}>
                    {turn ?
                        finalScene ?
                        <div style={modalButtonDivStyle}>
                        <FinalModal setHeroHP={setHeroHP} armor={armor} setArmor={setArmor} setChar={setChar} char={char} currentQuest={currentQuest} setCurrentQuest={setCurrentQuest} setFinalScene={setFinalScene} setTurn={setTurn} setWarriorImage={setWarriorImage} knightImage={knight} />
                        </div>
                        :
                        <img src={attackIcon} style={attackStyle} onClick={handleClick} />
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default Battle