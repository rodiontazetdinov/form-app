import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, toggleImagesOpen } from "../store/actions";

const Images = ({ number, title, onBtnClick }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const selectedImage = useSelector((state) => state.selectedImage);
  const isImagesOpen = useSelector((state) => state.isImagesOpen);

  const models = {
    1: "KD",
    2: "SD",
    3: "DA",
  };

  const handleImageClick = (image) => {
    dispatch(selectImage(image));
    dispatch(toggleImagesOpen());
  };

  return (
    <div>
      <div className="images">
        <div className="images__nubmer">{number}</div>
        <div className="images__wrapper">
          <h2 className="images__title">{title}</h2>
          {isImagesOpen && (
            <button onClick={onBtnClick} className="images__submit">
              Сгенерировать
            </button>
          )}
        </div>
      </div>

      {isImagesOpen && (
        <div className="images__container">
          {images.map((image, index) => (
            <>
              <h3>{models[index + 1 + ""]}</h3>
              <img
                key={index}
                src={`data:image/png;base64,${image}`}
                alt={`Image ${index}`}
                className={
                  selectedImage === image
                    ? "images__image_selected"
                    : "images__image"
                }
                onClick={() => handleImageClick(image)}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;
