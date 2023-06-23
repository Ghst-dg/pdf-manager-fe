import { useContext, useEffect, useState } from 'preact/hooks';
import CommentBtn from '../CommentBtn/CommentBtn';
import ShareBtn from '../ShareBtn/ShareBtn';
import './Card.css'
import Share from '../Share/Share';
import { UserInfoContext } from '../../../Section/Dashboard/Dashboard';
import axios from 'axios';
import SpinnerLoader from '../../SpinnerLoader/SpinnerLoader';
import CommentFeature from '../Comment/Comment';

const Card = ({borderRad, bgColor, email, pdfId}) => {
    const userInfo = useContext(UserInfoContext);
    const [isLoading, setIsLoading] = useState(true);
    const[longHeigth, setLongHeight] = useState(false);
    const[longWidth, setLongWidth] = useState(false);
    const [pdfs, setPdfs] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/pdf/${pdfId}`);
                if (response.status === 200) {
                setPdfs(response.data);
            } else {
                console.error('Failed to retrieve PDFs');
            }
                setIsLoading(false);
            } 
            catch (error) {
            console.error('Error fetching PDFs:', error);
            }
        };
    
        fetchPdfs();
    }, [refresh]);

    const heigthManagerFunc = () => {
        setLongHeight(!longHeigth);
    }

    const widthManagerFunc = () => {
        setLongWidth(!longWidth);
    }

    return(
        <div class="Card" 
                style={{borderRadius: borderRad, 
                backgroundColor: bgColor,
                height: longHeigth ? "600px" : "300px",
                width: longWidth ? "900px" : "450px"}}>

            <div class="CardContainer" 
                style={{borderRadius: borderRad,
                height: longHeigth ? "45%" : "90%",
                width: longWidth ? "45%" : "90%"}}>

                <div class="CardPreview">
                    <div class="CardImg"></div>
                    <span class="CardTitle">{pdfs?.pdf?.filename}</span>
                </div>

                <div class="CardBtnContainer">
                    <ShareBtn func={heigthManagerFunc}/>
                    <CommentBtn func={widthManagerFunc} totalComments={pdfs?.pdf?.comments?.length}/>
                </div>

            </div>
            <div class="CardContainer"
                style={{display: longWidth ? "flex" : "none", 
                    width: "45%",
                    height: longHeigth ? "45%" : "90%",
                    borderRadius: borderRad}}>
                        <CommentFeature pdfId = {pdfId} username={userInfo?.name} comments={pdfs?.pdf?.comments} refresh = {refresh} setRefresh = {setRefresh}/>
                    </div>
            <div class="CardContainer"
                style={{display: longHeigth ? "flex" : "none",
                    borderRadius: borderRad,
                    height: "45%"}}>
                        {isLoading ? <SpinnerLoader/> :<Share useremail={email} recievedemail={pdfs?.pdf?.adminEmail} pdfId={pdfId}/>}
                    </div>
        </div>
    );
}

export default Card;