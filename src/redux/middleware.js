import { COMMENT_CREATE } from "./types";
import { errorOn, errorOff } from "./actions";

const badWords = ['козел', 'осел', 'дурак'];

export const spamFilter = ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some(word => action.payload.text.includes(word));
                if (hasBadWords) {
                    const error = {message: 'Увайжайте людей!!!'};
                    return dispatch(errorOn(error));
                }
                dispatch(errorOff());
            }
            return next(action);
        }
    }
}