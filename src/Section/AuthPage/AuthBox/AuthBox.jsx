import { createContext } from 'preact';
import { useState } from 'preact/hooks';
import './AuthBox.css'
import AuthBoxLeft from './Left/AuthBoxLeft';
import AuthBoxRight from './Right/AuthBoxRight';

export const LoginContext = createContext(null);

const AuthBox = () => {
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div class = 'AuthBox'>
            <LoginContext.Provider value = {{isLogin, setIsLogin}}>
                <AuthBoxLeft/>
                <AuthBoxRight/>
            </LoginContext.Provider>
        </div>
    );
}

export default AuthBox;