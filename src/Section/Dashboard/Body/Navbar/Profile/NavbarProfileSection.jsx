import { useContext } from 'preact/hooks';
import { colorGen1 } from '../../../../../Function/RandomColorGenerator';
import './NavbarProfileSection.css'
import { UserInfoContext } from '../../../Dashboard';

const NavbarProfileSection = () => {
    const userInfo = useContext(UserInfoContext);

    return(
        <div class='NavbarProfileSection'>
            <div class='ProfilePicture' 
            style={{backgroundImage: `url("dp${((userInfo?.name[0]?.charCodeAt(0)) % 12) + 1}.png")`, 
                backgroundColor: colorGen1()}}></div>
            <span class='ProfileName'>{userInfo?.name}</span>
            <span class='ProfileEmail'>{userInfo?.email}</span>
        </div>
    );
}

export default NavbarProfileSection;