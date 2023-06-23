import './DashboardBodyNavbar.css'
import NavbarFooter from './Footer/NavbarFooter';
import NavbarProfileSection from './Profile/NavbarProfileSection';

const DashboardBodyNavbar = () => {
    return(
        <div class='DashboardBodyNavbar'>
            <NavbarProfileSection/>
            <NavbarFooter/>
        </div>
    );
}

export default DashboardBodyNavbar;