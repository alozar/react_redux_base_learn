import {
    INCREMENT_LIKES, DECREMENT_LIKES,
    INPUT_TEXT,
    COMMENT_CREATE, COMMENT_UPDATE, COMMENT_REMOVE, COMMENTS_ADD,
    LOADER_DISPALY_ON, LOADER_DISPALY_OFF,
    ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF,
} from "./types";

export const incrementLikes = () => ({type: INCREMENT_LIKES});
export const decrementLikes = () => ({type: DECREMENT_LIKES});

export const inputText = (text) => ({type: INPUT_TEXT, payload: text});

export const commentCreate = (text, id) => ({type: COMMENT_CREATE, payload: { text, id }});
export const commentUpdate = (text, id) => ({type: COMMENT_UPDATE, payload: { text, id }});
export const commentRemove = (id) => ({type: COMMENT_REMOVE, payload: id });
export const commentsAdd = (comments) => ({type: COMMENTS_ADD, payload: comments });

export const loaderOn = () => ({ type: LOADER_DISPALY_ON });
export const loaderOff = () => ({ type: LOADER_DISPALY_OFF });

export const errorOn = (error) => ({ type: ERROR_DISPLAY_ON, payload: error });
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF });

export const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export const commentsLoadAsync = () => (
    dispatch => {
        dispatch(loaderOn());
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(response => response.json())
            //Конструкция нужна чтобы симулировать трехсекундную задержку при загрузке данных
            .then(jsonData => new Promise((resolve, reject) => {
                const comments = jsonData.map(comment => ({text: comment.name, id: comment.id}));
                setTimeout(() => {
                    dispatch(commentsAdd(comments));
                    dispatch(errorOff());
                    resolve();
                }, 3000);
            }))
            .catch(error => {
                dispatch(errorOn(error));
            })
            .finally(() => {
                dispatch(loaderOff());
            });;
    }
);

//Старый вариант
// export const commentsLoadAsync = () => (
//     async dispatch => {
//         dispatch(loaderOn());
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
//         const jsonData = await response.json();
//         const comments = jsonData.map(comment => ({text: comment.name, id: comment.id}));
//         setTimeout(() => {
//             dispatch(commentsAdd(comments));
//             dispatch(loaderOff());
//         }, 3000);
//     }
// );

