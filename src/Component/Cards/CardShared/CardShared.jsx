import { useState } from 'preact/hooks';
import CommentBtn from '../CommentBtn/CommentBtn';
import './CardShared.css'

const CardShared = ({borderRad, bgColor}) => {
    const[longWidth, setLongWidth] = useState(false);

    const widthManagerFunc = () => {
        setLongWidth(!longWidth);
    }

    return(
        <div class="CardShared"
        style={{borderRadius: borderRad, 
            backgroundColor: bgColor,
            width: longWidth ? "550px" : "275px"}}>
            
            <div class="CardContainer" 
                style={{borderRadius: borderRad,
                width: longWidth ? "45%" : "90%"}}>

                <div class="CardSharedPreview"></div>
                <div class="CardSharedBtnContainer">
                    <CommentBtn func={widthManagerFunc}/>
                </div>
            </div>
            <div class="CardContainer"
                style={{display: longWidth ? "flex" : "none", 
                    width: "45%",
                    borderRadius: borderRad}}></div>

        </div> 
    );
}

export default CardShared;