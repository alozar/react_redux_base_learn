import { COMMENTS_ADD, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_REMOVE } from "./types"; 

const initialState = { comments: [] };

export const commentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case COMMENTS_ADD:
            return {...state, comments: [...state.comments, ...action.payload]};
        case COMMENT_CREATE:
            return {...state, comments: [...state.comments, action.payload]};
        case COMMENT_UPDATE:
            return {
                ...state,
                comments: state.comments.map(comment => 
                    comment.id === action.payload.id?
                    {...comment, text: action.payload.text}
                    :
                    {...comment}
                    )
            };
        case COMMENT_REMOVE:
            return {...state, comments: state.comments.filter(comment => comment.id !== action.payload)};
        default:
            return state;
    }
}