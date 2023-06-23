import './DashboardBodyContent.css'
import Feed from './Feed/Feed';
import DashboardBodyContentHeader from './Header/DashboardBodyContentHeader';

const DashboardBodyContent = () => {
    return(
        <div class='DashboardBodyContent'>
            <div class='DashboardBodyContentBox'>
                {/* <DashboardBodyContentHeader/> */}
                <Feed/>
            </div>
        </div>
    );
}

export default DashboardBodyContent;