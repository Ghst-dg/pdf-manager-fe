import { useState, useEffect, useContext } from 'preact/hooks';
import DashboardButton from '../../../../../Component/DashboardButton/DashboardButton';
import './NavbarFooter.css'
import SpinnerLoader from '../../../../../Component/SpinnerLoader/SpinnerLoader';
import { LoadingInfoContext, UserInfoContext } from '../../../Dashboard';

const NavbarFooter = () => {
    const{isLoading, isPassed, isMine, isShared} = useContext(LoadingInfoContext);
    const userInfo = useContext(UserInfoContext);
    const [isHovering, setIsHovering] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showContent, setShowContent] = useState(false); 

    useEffect(() => {
        if (!isLoading) {
            setShowMessage(true);
            setTimeout(() => {
            setShowMessage(false);
            setShowContent(true);
        }, 2000);}
    }, [isLoading]);
    
    const renderLoader = () => (
        <SpinnerLoader heigth={80} width={80}/>
        );
    
    const renderMessage = () => {
        if (isPassed) {
            return <span class='SuccessText'>Success</span>;
        } 
        else {
            return <span class='ErrorText'>Failed</span>;
        }
    };

    const renderContent = () => (
        <>
            {isHovering ? 
                <span class = "ValueTitleText">Your Files</span> : 
                <span class="TotalAddent">{isMine}</span>
            }

            {isHovering ? 
                <span class = "ValueTitleText">+ Shared Files</span> :
                <span class="TotalAddent">{`+ ${isShared}`}</span>
            }

            <hr class="TotalLine" />
            
            {isHovering ? 
                <span class = "ValueTitleText">Total</span> : 
                <span class="TotalAddent">{userInfo?.pdfs?.length}</span>
            }
        </>);

    return(
        <div class='NavbarFooter'>
            <div class = 'NavbarAdditionBox' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {isLoading && renderLoader()}
            {!isLoading && showMessage && renderMessage()}
            {!isLoading && !showMessage && showContent && renderContent()}
            </div>
            <DashboardButton value = 'Signout' color = '#81b29a' rad = '16px 8px 12px 4px'/>
        </div>
    );
}

export default NavbarFooter;