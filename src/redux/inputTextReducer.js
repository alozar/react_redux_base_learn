import { INPUT_TEXT } from "./types"; 

const initialState = { text: '' };

export const inputTextReducer = (state = initialState, action) => {
    switch(action.type) {
        case INPUT_TEXT:
            return {...state, text: action.payload};
        default:
            return state;
    }
}