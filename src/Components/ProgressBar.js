import Filler from "./Filler"

const divStyle = {
    position: 'relative',
    height: '25px',
    width: '500px',
    borderRadius: '10px',
    border: '1px solid #333',
}

function ProgressBar({ percentage }) {
    return (
        <div style={divStyle}>
            <Filler percentage={percentage} />
        </div>
    )
}

export default ProgressBar