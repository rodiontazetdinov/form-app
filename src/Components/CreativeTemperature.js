import { useDispatch, useSelector } from 'react-redux';

const CreativeTemperature = ({ inputName, number, title, setState})=> {
    const temperature = useSelector((state) => state.temperature);
    const dispatch = useDispatch()

    const handleInputsState = (e) => {
        dispatch(setState(parseFloat(e.target.value)))
        console.log(parseFloat(e.target.value))
      };
    return (
        <div className="temperature">
          <div className="temperature__nubmer">{number}</div>
          <div className="temperature__wrapper">
            <h2 className="temperature__title">{title}</h2>
            <input
                className="temperature__input"
                type="range"
                onChange={handleInputsState}
                min={0}
                max={1}
                name={inputName}
                step={0.1}
                value={temperature}
                />
          </div>
        </div>
      );
}

export default CreativeTemperature;