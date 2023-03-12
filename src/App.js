import { useSelector } from 'react-redux';

import './App.css';
import Likes from './components/likes';
import Title from './components/title';
import Comments from './components/comments';
import Spin from './components/spin';

function App() {
  const error = useSelector(state => state.appReducer.error);
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>{error.message}</div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
