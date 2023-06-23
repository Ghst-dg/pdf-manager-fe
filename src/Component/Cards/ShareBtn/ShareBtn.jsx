import './ShareBtn.css'
import { BiShareAlt } from "react-icons/bi";

const ShareBtn = ({func}) => {
    return(
        <button class="ShareBtn" onClick={() => func()}><BiShareAlt/></button>
    )
}

export default ShareBtn;