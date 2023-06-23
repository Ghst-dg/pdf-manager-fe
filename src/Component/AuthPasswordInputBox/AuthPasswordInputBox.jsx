import './AuthPasswordInputBox.css'

const AuthPasswordInputBox = ({capturePassword}) => {
    return(
        <input type="password" placeholder="Password" class = 'AuthPasswordInputBox' onInput={e => capturePassword(e.target.value)}/>
    );
}

export default AuthPasswordInputBox;