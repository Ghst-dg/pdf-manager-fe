import './Uploader.css'
import axios from 'axios';
import { LoadingInfoContext } from '../../Section/Dashboard/Dashboard';
import { useContext } from 'preact/hooks';

const Uploader = ({color, rad}) => {
    const{setIsLoading, setIsSuccess} = useContext(LoadingInfoContext);
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        
        try{
            const formData = new FormData();
            formData.append('pdf', file);
    
            const response = await axios.post(`${import.meta.env.VITE_LOCAL_API}/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
        }
        catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return(
        <div class="Uploader" style={{backgroundColor: color, borderRadius: rad}}>
            <input type='file' accept='application/pdf' class='uploader' onChange={handleFileUpload}/>
        </div>
    );
}

export default Uploader;