import './Uploader.css'
import axios from 'axios';
import { LoadingInfoContext } from '../../Section/Dashboard/Dashboard';
import { useContext } from 'preact/hooks';

const Uploader = ({color, rad}) => {
    const{setIsLoading, setIsPassed, refresh, setRefresh} = useContext(LoadingInfoContext);
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        
        try{
            setIsLoading(true);
            const formData = new FormData();
            formData.append('pdf', file);
    
            const response = await axios.post(`${import.meta.env.VITE_GLOBAL_API}/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setIsPassed(true);
            } 
            else {
                setIsPassed(false);
            }
            setIsLoading(false);
        }
        catch (error) {
            console.error('Error uploading file:', error);
            setIsLoading(false);
            setIsPassed(false);
        }

        setRefresh(!refresh);
    };

    return(
        <div class="Uploader" style={{backgroundColor: color, borderRadius: rad}}>
            <input type='file' accept='application/pdf' class='uploader' onChange={handleFileUpload}/>
        </div>
    );
}

export default Uploader;