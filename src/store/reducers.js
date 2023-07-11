const initialState = {
  insights: [],
  product: "",
  isProductOpen: true,
  audience: "",
  isAudienceOpen: true,
  generatedInsights: [],
  choosedInsight: "",
  isGeneratedInsightsOpen: true,
  temperature: 1,
  isTemperatureOpen: true,
  target: "",
  isTargetOpen: true,
  format: "",
  isFormatOpen: true,
  toneOfVoice: "",
  isToneOfVoiceOpen: true,
  generatedConcepts: [],
  choosedConcept: "",
  isGeneratedConceptsOpen: true,
  name: "",
  concept: "",
  isLoading: false,
  visualCategory: "realistic_picture",
  isVisualCategoryOpen: true,
  images: [],
  selectedImage: '',
  isImagesOpen: true,
  presentation: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRESENTATION':
      return {
        ...state,
        presentation: action.payload,
      };
    case 'SET_IMAGES':
      return {
        ...state,
        images: action.payload,
      };
    case 'TOGGLE_IMAGES_OPEN':
      return {
        ...state,
        isImagesOpen: !state.isImagesOpen,
      };
    case 'SELECT_IMAGE':
      return {
        ...state,
        selectedImage: action.payload,
      };
    case "SET_VISUAL":
      return {
        ...state,
        visual: action.payload,
      };
    case "SET_VISUAL_CATEGORY":
      return {
        ...state,
        visualCategory: action.payload,
      };
    case "TOGGLE_IS_VISUAL_CATEGORY_OPEN":
      return {
        ...state,
        isVisualCategoryOpen: !state.isVisualCategoryOpen,
      };
    case "TOGGLE_ISLOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "SET_CONCEPT":
      return {
        ...state,
        concept: action.payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "TOGGLE_TONEOFVOICE_OPEN":
      return {
        ...state,
        isToneOfVoiceOpen: !state.isToneOfVoiceOpen,
      };
    case "SET_TONEOFVOICE":
      return {
        ...state,
        toneOfVoice: action.payload,
      };
    case "TOGGLE_FORMAT_OPEN":
      return {
        ...state,
        isFormatOpen: !state.isFormatOpen,
      };
    case "SET_FORMAT":
      return {
        ...state,
        format: action.payload,
      };
    case "TOGGLE_TARGET_OPEN":
      return {
        ...state,
        isTargetOpen: !state.isTargetOpen,
      };
    case "SET_TARGET":
      return {
        ...state,
        target: action.payload,
      };
    case "SET_TEMPERATURE":
      return {
        ...state,
        temperature: action.payload,
      };
    case "TOGGLE_TEMPERATURE_OPEN":
      return {
        ...state,
        isTemperatureOpen: !state.isTemperatureOpen,
      };
    case "SET_INSIGHTS":
      return {
        ...state,
        insights: action.payload,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "TOGGLE_PRODUCT_OPEN":
      return {
        ...state,
        isProductOpen: !state.isProductOpen,
      };

    case "SET_AUDIENCE":
      return {
        ...state,
        audience: action.payload,
      };

    case "TOGGLE_AUDIENCE_OPEN":
      return {
        ...state,
        isAudienceOpen: !state.isAudienceOpen,
      };

    case "SET_GENERATED_INSIGHTS":
      return {
        ...state,
        generatedInsights: action.payload,
      };

    case "SET_CHOSEN_INSIGHT":
      return {
        ...state,
        choosedInsight: action.payload,
      };

    case "TOGGLE_GENERATED_INSIGHTS_OPEN":
      return {
        ...state,
        isGeneratedInsightsOpen: !state.isGeneratedInsightsOpen,
      };

    case "SET_GENERATED_CONCEPTS":
      return {
        ...state,
        generatedConcepts: action.payload,
      };

    case "SET_CHOSEN_CONCEPT":
      return {
        ...state,
        choosedConcept: action.payload,
      };

    case "TOGGLE_GENERATED_CONCEPTS_OPEN":
      return {
        ...state,
        isGeneratedConceptsOpen: !state.isGeneratedConceptsOpen,
      };

    default:
      return state;
  }
};

export default rootReducer;
