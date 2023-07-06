const ClosedWindow = ({ title, subtitle, inputName, setState, isConceptPair }) => {

  const handleInputsState = (event) => {
    setState()
  };

  return (
    <div className="closed-window">
      <div className="closed-window__number"></div>
      <div className="closed-window__wrapper">
        <h2 className="closed-window__title">{title}</h2>
        {!isConceptPair && <p className="closed-window__subtitle">{subtitle}</p>}
        {isConceptPair && 
        <>
        <h2 className="closed-window__title">{subtitle.name}</h2>
        <p className="closed-window__subtitle">{subtitle.concept}</p>
        </>
        }
        <button
            className="closed-window__btn"
            type="text"
            onClick={handleInputsState}
            minLength={2}
            maxLength={250}
            name={inputName}
            >Edit description</button>
      </div>
    </div>
  );
};

export default ClosedWindow;