import './AuthTextInputBox.css'

const AuthTextInputBox = ({value, captureValue}) => {
    return(
        <input type="text" placeholder={value} class = 'AuthTextInputBox' onInput={e => captureValue(e.target.value)}/>
    );
}

export default AuthTextInputBox;