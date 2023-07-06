import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    console.log(Spinner)
  return <Spinner
            animation="border"
            variant='secondary'
            role="status" 
            size='xxl'
         >
    {/* <span className="visually-hidden">Loading...</span> */}
  </Spinner>;
}

export default Loader;