import { INCREMENT_LIKES, DECREMENT_LIKES } from "./types"; 

const initialState = { likes: 0 };

export const likesReducer = (state = initialState, action) => {
    console.log({mes: "likesReducer", state, action})
    switch(action.type) {
        case INCREMENT_LIKES:
            return {...state, likes: state.likes + 1};
        case DECREMENT_LIKES:
            return {...state, likes: state.likes - 1};
        default:
            return state;
    }
}