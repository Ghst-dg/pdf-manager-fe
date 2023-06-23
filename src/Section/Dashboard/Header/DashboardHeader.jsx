import Uploader from '../../../Component/Uploader/Uploader';
import './DashboardHeader.css'

const DashboardHeader = () => {
    return(
        <div class='DashboardHeader'>
            <span class='DashboardTitle'><b>PDF Manager</b></span>
            <div class = 'DashboardBtnContainer'>
                <Uploader color = '#f4f1de' rad = '4px 12px 8px 16px'/>
            </div>
        </div>
    );
}

export default DashboardHeader;