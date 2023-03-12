import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { commentUpdate, commentRemove } from '../redux/actions';
const SingleComment = ({comment}) => {
    const { text, id } = comment;
    const [commentText, setCommentText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    };

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(commentRemove(id));
    };

    return (
    <form onSubmit={handleUpdate} className='comments-item'>
        <div className="comments-item-delete" onClick={handleRemove}>&times;</div>
        <input type="text" value={commentText} onChange={handleInput} />
        <input type="submit" hidden />
    </form>
    )
  }
  
  export default SingleComment;