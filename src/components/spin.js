import { RotatingLines, Dna } from "react-loader-spinner";
import { useSelector } from 'react-redux';

const Spin = (props) => {
  const loading = useSelector(state => state.appReducer.loading);
  return (
    <div className='loader-styles'>
        
        <Dna
          visible={loading}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
    </div>
  )
};

export default Spin;