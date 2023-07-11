import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <Spinner
      animation="border"
      variant="secondary"
      role="status"
      size="xxl"
    ></Spinner>
  );
}

export default Loader;
