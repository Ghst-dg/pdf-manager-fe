import { useState } from 'preact/hooks';
import './CommentBtn.css'
import { BiCommentDetail } from "react-icons/bi";

const CommentBtn = ({func, totalComments}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return(
        <button class="CommentBtn" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => func()}>{isHovering ? <BiCommentDetail/> : totalComments}</button>
    )
}

export default CommentBtn;