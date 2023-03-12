import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "../redux/actions";

const mapStateToProps = (state) => {
    return { likes: state.likesReducer.likes };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => {
            dispatch(incrementLikes());
        },
        onDecrementLikes: () => {
            dispatch(decrementLikes());
        }
    }
}

const Likes = (props) => {
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);