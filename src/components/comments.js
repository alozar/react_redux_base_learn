import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';

import { commentCreate, commentsLoadAsync } from "../redux/actions"
import SingleComment from "./singleComment";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => state.commentsReducer.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsLoadAsync());
    }, []);

    const handleInput = (e) => {
        setTextComment(e.target.value);
    };

    const hangleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
    };

    return (
        <div className='card-comments'>
            <form onSubmit={hangleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {comments.map(comment => (
                <SingleComment key={comment.id} comment={comment} />
            ))}
            
        </div>
    )
}

export default Comments;