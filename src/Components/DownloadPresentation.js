import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../utils/api";

import { setPresentation, toggleIsLoaidng } from "../store/actions";

const DownloadPresentation = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.selectedImage);
  const name = useSelector((state) => state.name);
  const concept = useSelector((state) => state.concept);

  const downloadFile = (file, filename) => {
    const blobUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(blobUrl);
  };

  const submitConcept = () => {
    dispatch(toggleIsLoaidng());
    api
      .postPresentation({
        imageString: selectedImage,
        name: name,
        concept: concept,
      })
      .then((presentation) => {
        dispatch(setPresentation(presentation));
        return presentation;
      })
      .then((data) => {
        api
          .downloadPresentation({ filename: data.presentation })
          .then((file) => {
            downloadFile(file, "presentation.pdf");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(toggleIsLoaidng()));
  };

  return (
    <div className="downloader">
      <button className="downloader__btn" onClick={submitConcept}>
        Скачать
      </button>
    </div>
  );
};

export default DownloadPresentation;
