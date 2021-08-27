

function Filler({ percentage }) {
    const divStyle = {
        background: 'red',
        height: '100%',
        borderRadius: 'inherit',
        transition: 'width .2 ease-in',
        width: `${percentage}%`,
    }

    return (
        <div style={divStyle} >

        </div>
    )
}

export default Filler