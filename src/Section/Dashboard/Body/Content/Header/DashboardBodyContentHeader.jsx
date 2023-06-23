import { useState } from 'preact/hooks';
import './DashboardBodyContentHeader.css'
import axios from 'axios';
import { createContext } from 'preact';
import { LoadingInfoContext } from '../../../Dashboard';


const DashboardBodyContentHeader = () => {
    const{setIsLoading, setIsSuccess} = createContext(LoadingInfoContext);
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        
        try{
            setIsLoading(true);
            const formData = new FormData();
            formData.append('pdf', file);
    
            const response = await axios.post(`http://localhost:5000/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setIsSuccess(true);
                } 
            else {
                setIsSuccess(false);
            }
            setIsLoading(false);
        }
        catch (error) {
            console.error('Error uploading file:', error);
            setIsLoading(false);
            setIsSuccess(false);
        }
    };

    const [isHovering, setIsHovering] = useState(0);

    return(
        <div class='DashboardBodyContentHeader'>
            <div class='UploaderContainer'>
                <input type='file' accept='application/pdf' class='uploader' onChange={handleFileUpload}/>
            </div>

            <div class='DashboardBodyContentHeaderContainer'
                style={{backgroundColor: '#81B29A',
                    borderRadius: '16px 64px 48px 32px'}}
                onMouseEnter={() => setIsHovering(1)} 
                onMouseLeave={() => setIsHovering(0)}>
                    {isHovering === 1 ? 
                        <span class='DashboardBodyContentHeaderContainerText'>Files You Uploaded</span> : 
                        <>5</>
                    }
                </div>

            <div class='DashboardBodyContentHeaderContainer'
                style={{backgroundColor: '#E07A5F',
                    borderRadius: '64px 32px 16px 48px'}}
                onMouseEnter={() => setIsHovering(2)} 
                onMouseLeave={() => setIsHovering(0)}>
                    {isHovering === 2 ? 
                        <span class='DashboardBodyContentHeaderContainerText'>Files Shared With You</span> : 
                        <>6</>
                    }
                </div>

        </div>
    );
}

export default DashboardBodyContentHeader;