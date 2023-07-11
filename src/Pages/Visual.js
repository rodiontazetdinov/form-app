import { useSelector, useDispatch } from "react-redux";

import { api } from "../utils/api";

import VisualOptions from "../Components/VisualOptions";
import NameConcept from "./NameConcept";
import ClosedWindow from "../Components/ClosedWindow";
import Form from "../Components/Form";
import Images from "../Components/Images";

import {
  toggleIsVisualCategoryOpen,
  toggleIsLoaidng,
  setVisual,
  toggleImagesOpen,
  setImages,
} from "../store/actions";

const Visual = () => {
  const isVisualCategoryOpen = useSelector(
    (state) => state.isVisualCategoryOpen
  );
  const visualCategory = useSelector((state) => state.visualCategory);
  const visual = useSelector((state) => state.visual);
  const name = useSelector((state) => state.name);
  const concept = useSelector((state) => state.concept);
  const isImagesOpen = useSelector((state) => state.isImagesOpen);
  const selectedImage = useSelector((state) => state.selectedImage);

  const dispatch = useDispatch();

  function submitVisual() {
    dispatch(toggleIsLoaidng());
    api
      .postVisual({
        visual_category: visualCategory,
        name: name,
        concept: concept,
      })
      .then((visual) => {
        dispatch(setVisual(visual.visual));
        dispatch(toggleIsVisualCategoryOpen());
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(toggleIsLoaidng()));
  }

  function submitImages() {
    dispatch(toggleIsLoaidng());
    api
      .postImages({
        visual: visual,
      })
      .then((images) => {
        dispatch(setImages([images.KD, images.SD, images.DA]));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(toggleIsLoaidng()));
  }

  function handleOpenVisualCategory() {
    dispatch(toggleIsVisualCategoryOpen());
  }

  function handleOpenImages() {
    dispatch(toggleImagesOpen());
  }

  return (
    <>
      <NameConcept />
      <Form submitter={submitVisual} isOpen={isVisualCategoryOpen}>
        {isVisualCategoryOpen && <VisualOptions number={7} title={"visual"} />}
        {!isVisualCategoryOpen && (
          <ClosedWindow
            title={"visual"}
            subtitle={visual}
            inputName="visual"
            setState={handleOpenVisualCategory}
          />
        )}
      </Form>
      <Form submitter={submitImages} isOpen={isVisualCategoryOpen}>
        {isImagesOpen && (
          <Images number={8} title={"images"} onBtnClick={submitImages} />
        )}
        {!isImagesOpen && (
          <ClosedWindow
            title={"images"}
            subtitle={"Картинка выбрана"}
            inputName="images"
            setState={handleOpenImages}
            selectImage={selectedImage}
          />
        )}
      </Form>
    </>
  );
};

export default Visual;
