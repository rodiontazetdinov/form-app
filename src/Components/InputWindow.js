import { useState } from "react";
import { useDispatch } from "react-redux";

const InputWindow = ({
  number,
  title,
  subtitle,
  inputName,
  setState,
  alterValue,
  isRequired,
}) => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
    dispatch(setState(event.target.value));
  };

  return (
    <div className="input-window">
      <div className="input-window__number">{number}</div>
      <div className="input-window__wrapper">
        <h2 className="input-window__title">{title}</h2>
        <p className="input-window__subtitle">{subtitle}</p>
        <p className="input-window__counter">{`${textInput.length}/250`}</p>
        <textarea
          className="input-window__input"
          type="text"
          value={textInput || alterValue}
          onChange={handleInputChange}
          minLength={2}
          maxLength={250}
          name={inputName}
          required={isRequired && "required"}
        />
      </div>
    </div>
  );
};

export default InputWindow;
