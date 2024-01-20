import PropTypes from "prop-types";

export default function LabeledButton({label}) {
    LabeledButton.propTypes = {
        label: PropTypes.string.isRequired
    }
  
    const handleClick = () => {
        alert(`The label from that Button was: ${label}!`)
    };

    return(
        <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px', margin: '10px' }}>
           <button onClick={handleClick}>{label}</button>
        </div>
    )
}