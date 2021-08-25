import { React, useState } from 'react'
import background from '../Images/Background.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import knight from '../Images/Knight-Idle.png'
import warrior from '../Images/Warrior-Idle.png'
import warriorRun from '../Images/Warrior-Run.png'
import book from '../Images/Book-BG.png'


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
    boxShadow: '0px 0px 30px #fff'
}

const bookButtonStyle = {
    background: 'transparent',
    border: 'none'
}

const vertDivStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    height: window.innerHeight
}

const paddingMargin = {
    padding: '20px',
    margin: '20px'
}


function Create() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [created, setCreated] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
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
        // setDogs([...dogs, parsedBody]);
        // history.push('/dogs');
        setCreated(true)
    };

    const handleChange = (e) => { setName(e.target.value) }

    const handleClick = () => { history.push('/home') }

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
                            <img src={created ? warriorRun : warrior} style={warriorStyle}/>
                        </div>
                    </div>
                    <div>
                        {created ? 
                            <>
                            <div className='column'>
                                <button onClick={handleClick} style={bookButtonStyle}><img style={bookStyle} src={book}/></button>
                            </div>
                          
                            <div className='column'>
                                <a class="huge ui pointing green basic label">Click on the book to start your adventure!</a>
                            </div>
                            </>
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
                                    />
                                </div>

                                <div className='row' style={paddingMargin}>
                                    <button type='submit' className='massive ui orange button' style={buttonStyle}>CREATE</button>
                                </div>
                            </form> 
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Create