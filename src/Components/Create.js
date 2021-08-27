import { React, useState } from 'react'
import background from '../Images/Background.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import knight from '../Images/Knight-Idle.png'
import warrior from '../Images/Warrior-Idle.png'
import warriorRun from '../Images/Warrior-Run.png'
import book from '../Images/Book.png'


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

const warriorStyle = {
    width: '650px'
}

const buttonStyle = {
    boxShadow: '5px 10px grey',
}

const bookStyle = {
    width: '200px',
    filter: 'drop-shadow(0px 0px 30px #fff)'
}

const bookButtonStyle = {
    background: 'transparent',
    border: 'none'
}

const vertDivStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight
}

const paddingMargin = {
    padding: '20px',
    margin: '20px'
}

const inputStyle = {
    textTransform: 'capitalize'
}

function Create({ setChar, char }) {
    const history = useHistory()
    const [name, setName] = useState('')
    const [created, setCreated] = useState(false)
    const [editing, setEditing] = useState(false)

    function capitalizeName(name) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing) {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/character/${char.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name
                })
            });
    
            const parsedBody = await res.json();
            setChar(parsedBody)
            setEditing(false)
        } else {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/character`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name
                })
            });
    
            const parsedBody = await res.json();
            setChar(parsedBody)
            setCreated(true)
            alert('Click on the book to start your adventure!')
        }
    };

    const handleChange = (e) => { 
        let capitalName = capitalizeName(e.target.value)
        setName(capitalName) 
    }

    const handleClick = () => { history.push('/home') }

    const handleEdit = () => { setEditing(!editing) }

    const handleDelete = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/character/${char.id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
        });
        const parsedBody = await res.json()

        setCreated(!created)
        setName('')
    }

    return (
        <div style={divStyle}>
            <div style={contentDiv}>
                <div className='ui  column centered grid' style={vertDivStyle}>
                    <div className='row' style={paddingMargin}>
                        <div className='font-face-fenwick' style={fontStyle}>
                            <br></br>
                            {created ? name : 'Create Your Character'}
                        </div>
                    </div>
                    <div className='row'>
                        {/* <div>
                            <img src={warriorTwo} style={warriorStyle}/>
                        </div> */}
                        <div>
                            <img src={created ? warriorRun : warrior} style={warriorStyle} />
                        </div>
                    </div>
                    <div>
                        {created ?
                            (editing ?
                                <form onSubmit={handleSubmit}>
                                    <div className="massive ui input focus">
                                        <input
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className='row' style={paddingMargin}>
                                        <button type='submit' className='massive ui orange button' style={buttonStyle}>{editing ? 'SAVE' : 'CREATE'}</button>
                                    </div>
                                </form>
                                :
                                <>
                                    <div className='column'>
                                        <button onClick={handleClick} style={bookButtonStyle}><img style={bookStyle} src={book} /></button>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className='column' >
                                        <div className='row' >
                                            <button onClick={handleEdit} className='huge ui blue left floated button' style={buttonStyle} >EDIT CHARACTER</button>

                                            <button onClick={handleDelete} className='huge ui red right floated button' style={buttonStyle} >DELETE CHARACTER</button>
                                        </div>
                                    </div>
                                </>
                            )
                            :
                            <form onSubmit={handleSubmit}>
                                <div className="massive ui input focus">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>

                                <div className='row' style={paddingMargin}>
                                    <button type='submit' className='massive ui orange button' style={buttonStyle}>{editing ? 'SAVE' : 'CREATE'}</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Create