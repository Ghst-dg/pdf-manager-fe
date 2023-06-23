import DashboardBodyContent from './Content/DashboardBodyContent';
import './DashboardBody.css'
import DashboardBodyNavbar from './Navbar/DashboardBodyNavbar';

const DashboardBody = () => {
    return(
        <div class='DashboardBody'>
            <DashboardBodyNavbar/>
            <DashboardBodyContent/>
        </div>
    );
}

export default DashboardBody;