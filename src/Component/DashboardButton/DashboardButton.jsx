import './DashboardButton.css'
import { route } from 'preact-router';

const DashboardButton = ({color, value, rad}) => {
    const handleSignOut = () => {
        route('/login');
        localStorage.removeItem('token');
    }

    return(
        <button class = 'DashboardButton' style={{backgroundColor: color, borderRadius: rad}} onClick={handleSignOut}>
            {value}
        </button>
    );
}

export default DashboardButton;