import { useContext, useEffect, useState } from 'preact/hooks';
import './Share.css'
import axios from 'axios'
import { LoadingInfoContext } from '../../../Section/Dashboard/Dashboard';

const Share = ({useremail, recievedemail, pdfId}) => {
    const {setIsLoading, setIsPassed, isMine, setIsMine, isShared, setIsShared} = useContext(LoadingInfoContext);
    const [input, setInput] = useState("");
    
    const handleShare = async () => {
        try {
            setIsLoading(true);
            const data = {
                userEmail: `${input}`,
                pdfId: `${pdfId}`,
            };

            const headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            };

            const response = await axios.post(`http://localhost:5000/share`, data, {
                headers,
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
            console.error('Error sharing PDF:', error);
            setIsLoading(false);
            setIsPassed(false);
        }
    };

    useEffect(() => {
        if(useremail === recievedemail) 
        {
            setIsMine(isMine => isMine + 1);
        }

        else
        {
            setIsShared(isShared => isShared + 1);
        }
    }, [pdfId])

    return(
    <div class = "Share">
        {useremail === recievedemail ? 
            <>
            <input type="text" placeholder="email" class = 'ShareEmailInput' onInput={e => setInput(e.target.value)}/>
            <button class = 'ShareEmailBtn' onClick={handleShare}>Share</button>
            </>: 
            <span class = "Unshare">{`${recievedemail} have shared this with you`}</span>}
    </div>
    );
}

export default Share;