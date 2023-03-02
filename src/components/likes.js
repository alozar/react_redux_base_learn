import { connect } from "react-redux";
import { INCREMENT_LIKES, DECREMENT_LIKES } from "../redux/types";

const mapStateToProps = (state) => {
    console.log({mes:"mapStateToProps", state});
    return { likes: state.likesReducer.likes };
}

const mapDispatchToProps = (dispatch) => {
    console.log({mes: 'mapDispatchToProps', dispatch });
    return {
        onIncrementLikes: () => {
            const action = {type: INCREMENT_LIKES};
            dispatch(action);
        },
        onDecrementLikes: () => {
            const action = {type: DECREMENT_LIKES};
            dispatch(action);
        }
    }
}

const Likes = (props) => {
    console.log({mes:"render Likes", props});
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);