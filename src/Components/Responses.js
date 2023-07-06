import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setChosenInsight,
  toggleGeneratedInsightsOpen,
} from "../store/actions";

import Response from "./Response";

import {
  saveRequestToLocalStorage,
  getRequestsFromLocalStorage,
} from "../utils/functions";

const Responses = ({
  title,
  description,
  action,
  payload,
  isConceptPair,
  submitter,
}) => {
  const dispatch = useDispatch();
  const choosedInsigth = useSelector((state) => state.choosedInsigth);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // dispatch(action(item))
    action(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    submitter();

    // Действия, которые нужно выполнить при отправке выбранного результата
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
