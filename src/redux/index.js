import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { likesReducer } from "./likesReducer";
import { inputTextReducer } from "./inputTextReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";
import { spamFilter } from "./middleware";

export const rootReducer = combineReducers({
    likesReducer,
    inputTextReducer,
    commentsReducer,
    appReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, spamFilter))
);