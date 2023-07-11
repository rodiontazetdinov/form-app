import React, { useState } from "react";

import Response from "./Response";

const Responses = ({
  title,
  description,
  action,
  payload,
  isConceptPair,
  submitter,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    action(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    submitter();
  };

  return (
    <section className="responses">
      <div className="responses__main">
        <div className="responses__title-icon"></div>
        <div className="responses__wrapper">
          <h2 className="responses__title">{title}</h2>
          <p className="responses__description">{description}</p>
          <ul className="responses__container">
            {payload &&
              payload.map((item, idx) => (
                <Response
                  key={idx}
                  item={item}
                  onItemClick={handleItemClick}
                  isSelected={item === selectedItem}
                  isConceptPair={isConceptPair}
                />
              ))}
          </ul>

          {isSubmitted && <p>Результат отправлен: {selectedItem}</p>}
        </div>
      </div>
      {selectedItem && !isSubmitted && (
        <button className="responses__submit" onClick={handleSubmit}>
          Выбрать
        </button>
      )}
    </section>
  );
};

export default Responses;
