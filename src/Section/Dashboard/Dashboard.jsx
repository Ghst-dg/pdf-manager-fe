import { createContext } from 'preact';
import DashboardBody from './Body/DashboardBody';
import './Dashboard.css'
import DashboardHeader from './Header/DashboardHeader';
import { useEffect, useState } from 'preact/hooks';
import axios from 'axios'
import SpinnerLoader from '../../Component/SpinnerLoader/SpinnerLoader';

export const UserInfoContext = createContext(null);
export const LoadingInfoContext = createContext(null);

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isPassed, setIsPassed] = useState(true);
    const [isShared, setIsShared] = useState(0);
    const [isMine, setIsMine] = useState(0);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_GLOBAL_API}/user`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

            if (response.status === 200)
            {
                const data = await response.data;
                setUserInfo(data);
            } 
            else
            {
                console.error('Failed to retrieve user information');
            }
        } 
        catch (error) 
        {
            console.error(error);
        }
    };

    fetchUserInfo();
    }, [refresh]);

    return(
        <LoadingInfoContext.Provider value = {{isLoading, setIsLoading, isPassed, setIsPassed, isShared, isMine, setIsShared, setIsMine, refresh, setRefresh}}>
        <div class='Dashboard'>
            {userInfo ? (
                        <div class='DashboardMask'>
                            <UserInfoContext.Provider value={userInfo}>
                                <DashboardHeader/>
                                <DashboardBody/>
                            </UserInfoContext.Provider>
                        </div>
            ): (
                <SpinnerLoader width={200} heigth={200}/>
            )}
        </div>
        </LoadingInfoContext.Provider>
    );
}

export default Dashboard;