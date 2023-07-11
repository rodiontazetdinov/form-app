import InputWindow from "../Components/InputWindow";
import Form from "../Components/Form";
import Responses from "../Components/Responses";
import ClosedWindow from "../Components/ClosedWindow";
import Insight from "./Insight";
import CreativeTemperature from "../Components/CreativeTemperature";

import { useDispatch, useSelector } from "react-redux";

import {
  setTemperature,
  setTarget,
  setFormat,
  setToneOfVoice,
  toggleToneOfVoiceOpen,
  toggleFormatOpen,
  toggleTargetOpen,
  toggleTemperatureOpen,
  toggleGeneratedConceptsOpen,
  setGeneratedConcepts,
  setChosenConcept,
  setName,
  setConcept,
  toggleIsLoaidng,
} from "../store/actions";

import { api } from "../utils/api";

const NameConcept = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const audience = useSelector((state) => state.audience);
  const choosedInsight = useSelector((state) => state.choosedInsight);
  const target = useSelector((state) => state.target);
  const isTargetOpen = useSelector((state) => state.isTargetOpen);
  const format = useSelector((state) => state.format);
  const isFormatOpen = useSelector((state) => state.isFormatOpen);
  const temperature = useSelector((state) => state.temperature);
  const isTemperatureOpen = useSelector((state) => state.isTemperatureOpen);
  const toneOfVoice = useSelector((state) => state.toneOfVoice);
  const isToneOfVoiceOpen = useSelector((state) => state.isToneOfVoiceOpen);
  const choosedConcept = useSelector((state) => state.choosedConcept);
  const isGeneratedConceptsOpen = useSelector(
    (state) => state.isGeneratedConceptsOpen
  );
  const generatedConcepts = useSelector((state) => state.generatedConcepts);

  const handleInputsState = () => {
    dispatch(toggleFormatOpen());
    dispatch(toggleTargetOpen());
    dispatch(toggleToneOfVoiceOpen());
    dispatch(toggleTemperatureOpen());
  };

  const handleGeneratedConceptsState = () => {
    dispatch(toggleGeneratedConceptsOpen());
  };

  const handeChoosedConcept = (item) => {
    dispatch(setName(item.name));
    dispatch(setConcept(item.concept));
    dispatch(setChosenConcept(item));
  };

  const submitConcept = () => {
    dispatch(toggleIsLoaidng());
    api
      .postConcept({
        product: product,
        audience: audience,
        target: target,
        format_type: format,
        toneofvoice: toneOfVoice,
        temperature: temperature,
        insight: choosedInsight,
      })
      .then((concepts) => {
        const conceptsArray = [];
        for (const [key, value] of Object.entries(concepts)) {
          conceptsArray.push({ name: key, concept: value });
        }
        dispatch(setGeneratedConcepts(conceptsArray));
        handleInputsState();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(toggleIsLoaidng()));
  };

  const handleFormSubmit = () => {
    dispatch(toggleGeneratedConceptsOpen());
  };

  return (
    <>
      <Insight />
      <Form submitter={submitConcept} isOpen={isToneOfVoiceOpen}>
        {isTargetOpen && (
          <InputWindow
            number={3}
            title={"target"}
            subtitle={"Для чего это нужно?"}
            inputName="target"
            setState={setTarget}
            alterValue={target}
            isRequired={true}
          />
        )}
        {!isTargetOpen && (
          <ClosedWindow
            title={"target"}
            subtitle={target}
            inputName="target"
            setState={handleInputsState}
          />
        )}
        {isFormatOpen && (
          <InputWindow
            number={4}
            title={"format"}
            subtitle={"Для чего это нужно?"}
            inputName="format"
            setState={setFormat}
            alterValue={format}
            isRequired={true}
          />
        )}
        {!isFormatOpen && (
          <ClosedWindow
            title={"format"}
            subtitle={format}
            inputName="format"
            setState={handleInputsState}
          />
        )}

        {isTemperatureOpen && (
          <CreativeTemperature
            number={5}
            title={"temperature"}
            subtitle={"Для чего это нужно?"}
            inputName="temperature"
            setState={setTemperature}
          />
        )}
        {!isTemperatureOpen && (
          <ClosedWindow
            title={"temperature"}
            subtitle={temperature}
            inputName="temperature"
            setState={handleInputsState}
          />
        )}

        {isToneOfVoiceOpen && (
          <InputWindow
            number={6}
            title={"tone of voice"}
            subtitle={"Для чего это нужно?"}
            inputName="format"
            setState={setToneOfVoice}
            alterValue={toneOfVoice}
            isRequired={false}
          />
        )}

        {!isTemperatureOpen && (
          <ClosedWindow
            title={"toneOfVoice"}
            subtitle={toneOfVoice}
            inputName="toneOfVoice"
            setState={handleInputsState}
          />
        )}
      </Form>
      {isGeneratedConceptsOpen && (
        <Responses
          title={"Generated concepts"}
          description={"выберите понравившийся инсайт"}
          action={handeChoosedConcept}
          payload={generatedConcepts}
          isConceptPair={true}
          submitter={handleFormSubmit}
        />
      )}
      {!isGeneratedConceptsOpen && (
        <ClosedWindow
          title={"Generated concepts"}
          subtitle={choosedConcept}
          inputName="generatedConcepts"
          setState={handleGeneratedConceptsState}
          isConceptPair={true}
        />
      )}
    </>
  );
};

export default NameConcept;
