import { useState } from 'preact/hooks';
import './Comment.css'
import { AiOutlineSend } from "react-icons/ai";
import axios from 'axios'

const CommentFeature = ({pdfId, username, comments, refresh, setRefresh}) => {
    const [input, setInput] = useState("");

    const handleComment = async () => {
        try {
            const data = {
                pdfId: `${pdfId}`,
                userName: `${username}`,
                comment: `${input}`,
            };

            const headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            };

            const response = await axios.post(`${import.meta.env.VITE_LOCAL_API}/pdf/comment`, data, {
                headers,
            });

        } 
        catch (error) {
            console.error('Error posting comment:', error);
        }
        
        setInput("");
        setRefresh(!refresh);
    };

    return(
        <div class='Comment'>
            <div class='CommentContainer'>
                {comments?.map((data, index) => (
                        <div class='CommentSection' key={index}>
                            <span class='CommenterName'>{data?.userName}</span>
                            <span class='CommentValue'>{data?.comment}</span>
                            <span class='CommentDate'>{data?.date}</span>
                        </div>
                ))}
            </div>
            <div class='CommentGen'>
                <div class='CommentTextSend'>
                    <input class='CommentText' onInput={e => setInput(e.target.value)} value={input}/>
                    <button class='SendCommentBtn' onClick={handleComment}><AiOutlineSend/></button>
                </div>
            </div>
        </div>
    );
}

export default CommentFeature;