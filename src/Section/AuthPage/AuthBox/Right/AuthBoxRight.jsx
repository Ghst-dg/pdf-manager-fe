import { useContext } from 'preact/hooks';
import './AuthBoxRight.css'
import { LoginContext } from '../AuthBox';

const AuthBoxRight = () => {
    const {setIsLogin} = useContext(LoginContext)

    return(
        <div class = 'AuthBoxRight'>
            <div class = 'AuthBoxRightHeader'>
                <span class='AuthBoxRightTitle'>PDF Manager</span>
                <div class='AuthBoxRightTitleNavLinks'>
                    <span class='AuthBoxRightTitleLinks' onClick={() => setIsLogin(true)}>Login</span>
                    <span class='AuthBoxRightTitleLinks' onClick={() => setIsLogin(false)}>Signup</span>
                </div>
            </div>
        </div>
    );
}

export default AuthBoxRight;