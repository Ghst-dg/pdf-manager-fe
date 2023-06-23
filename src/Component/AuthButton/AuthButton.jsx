import './AuthButton.css'

const AuthButton = ({color, value, rad, handleAction}) => {
    return(
        <button class = 'AuthButton' style={{backgroundColor: color, borderRadius: rad}} onClick={handleAction}>
            {value}
        </button>
    );
}

export default AuthButton;