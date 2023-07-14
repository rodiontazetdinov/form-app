import InputWindow from "../Components/InputWindow";
import Form from "../Components/Form";
import Responses from "../Components/Responses";
import ClosedWindow from "../Components/ClosedWindow";
import { useDispatch, useSelector } from "react-redux";

import { api } from "../utils/api";

import {
  setProduct,
  setAudience,
  setInsights,
  setChosenInsight,
  toggleAudienceOpen,
  toggleProductOpen,
  toggleGeneratedInsightsOpen,
  toggleIsLoaidng,
} from "../store/actions";

const Insight = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const audience = useSelector((state) => state.audience);
  const insights = useSelector((state) => state.insights);
  const isProductOpen = useSelector((state) => state.isProductOpen);
  const isAudienceOpen = useSelector((state) => state.isAudienceOpen);
  const choosedInsight = useSelector((state) => state.choosedInsight);
  const isGeneratedInsightsOpen = useSelector(
    (state) => state.isGeneratedInsightsOpen
  );

  const handleInputsState = () => {
    dispatch(toggleAudienceOpen());
    dispatch(toggleProductOpen());
  };

  const handleGeneratedInsightsState = () => {
    dispatch(toggleGeneratedInsightsOpen());
  };

  const submitInsight = () => {
    dispatch(toggleIsLoaidng());
    api
      .postInsights({ product: product, audience: audience })
      .then((insights) => {
        dispatch(setInsights(insights.insight));
        handleInputsState();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(toggleIsLoaidng());
      });
  };

  const handeChoosedInsight = (item) => {
    dispatch(setChosenInsight(item));
  };

  const handleFormSubmit = () => {
    dispatch(toggleGeneratedInsightsOpen());
  };

  return (
    <>
      <Form submitter={submitInsight} isOpen={isProductOpen}>
        {isProductOpen && (
          <InputWindow
            number={1}
            title={"product"}
            subtitle={"Описание(что вам нужно?)"}
            inputName="product"
            setState={setProduct}
            alterValue={product}
            isRequired={true}
          />
        )}
        {isProductOpen && (
          <InputWindow
            number={2}
            title={"audience"}
            subtitle={"Описание(что вам нужно?)"}
            inputName="audience"
            setState={setAudience}
            alterValue={audience}
            isRequired={false}
          />
        )}

        {!isProductOpen && (
          <ClosedWindow
            number={2}
            title={"product"}
            subtitle={product}
            inputName="product"
            setState={handleInputsState}
          />
        )}
        {!isAudienceOpen && (
          <ClosedWindow
            number={2}
            title={"audience"}
            subtitle={audience}
            inputName="audience"
            setState={handleInputsState}
          />
        )}
      </Form>
      {isGeneratedInsightsOpen && (
        <Responses
          title={"Generated insights"}
          description={"выберите понравившийся инсайт"}
          action={handeChoosedInsight}
          payload={insights}
          submitter={handleFormSubmit}
          isConceptPair={false}
        />
      )}
      {!isGeneratedInsightsOpen && (
        <ClosedWindow
          number={2}
          title={"generated insights"}
          subtitle={choosedInsight}
          inputName="generatedInsights"
          setState={handleGeneratedInsightsState}
          isConceptPair={false}
        />
      )}
    </>
  );
};

export default Insight;
