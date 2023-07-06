const SET_INSIGHTS = 'SET_INSIGHTS';
const TOGGLE_GENERATED_INSIGHTS_OPEN = 'TOGGLE_GENERATED_INSIGHTS_OPEN';
const SET_GENERATED_INSIGHTS = 'SET_GENERATED_INSIGHTS';
const SET_CHOSEN_INSIGHT = 'SET_CHOSEN_INSIGHT';
const SET_PRODUCT = 'SET_PRODUCT';
const TOGGLE_PRODUCT_OPEN = 'TOGGLE_PRODUCT_OPEN';
const SET_AUDIENCE = 'SET_AUDIENCE';
const TOGGLE_AUDIENCE_OPEN = 'TOGGLE_AUDIENCE_OPEN';
const SET_TARGET = 'SET_TARGET';
const TOGGLE_TARGET_OPEN = 'TOGGLE_TARGET_OPEN';
const SET_TEMPERATURE = 'SET_TEMPERATURE';
const TOGGLE_TEMPERATURE_OPEN = 'TOGGLE_TEMPERATURE_OPEN';
const SET_FORMAT = 'SET_FORMAT';
const TOGGLE_FORMAT_OPEN = 'TOGGLE_FORMAT_OPEN';
const SET_TONEOFVOICE = 'SET_TONEOFVOICE';
const TOGGLE_TONEOFVOICE_OPEN = 'TOGGLE_TONEOFVOICE_OPEN';
const SET_GENERATED_CONCEPTS = 'SET_GENERATED_CONCEPTS';
const SET_CHOSEN_CONCEPT = 'SET_CHOSEN_CONCEPT';
const TOGGLE_GENERATED_CONCEPTS_OPEN = 'TOGGLE_GENERATED_CONCEPTS_OPEN';
const SET_NAME = 'SET_NAME';
const SET_CONCEPT = 'SET_CONCEPT';
const TOGGLE_ISLOADING = 'TOGGLE_ISLOADING';

const initialState = {
    insights: [],
    product: '',
    isProductOpen: true,
    audience: '',
    isAudienceOpen: true,
    generatedInsights: [],
    choosedInsight: '',
    isGeneratedInsightsOpen: true,
    temperature: 1,
    isTemperatureOpen: true,
    target: '',
    isTargetOpen: true,
    format: '',
    isFormatOpen: true,
    toneOfVoice: '',
    isToneOfVoiceOpen: true,
    generatedConcepts: [],
    choosedConcept: '',
    isGeneratedConceptsOpen: true,
    name: '',
    concept: '' ,
    isLoading: false,

  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_ISLOADING:
        return {
          ...state,
          isLoading: !state.isLoading,
        };
      case SET_CONCEPT:
        return {
          ...state,
          concept: action.payload,
        };
      case SET_NAME:
        return {
          ...state,
          name: action.payload,
        };
      case TOGGLE_TONEOFVOICE_OPEN:
        return {
          ...state,
          isToneOfVoiceOpen: !state.isToneOfVoiceOpen,
        };
      case SET_TONEOFVOICE:
        return {
          ...state,
          toneOfVoice: action.payload,
        };
      case TOGGLE_FORMAT_OPEN:
        return {
          ...state,
          isFormatOpen: !state.isFormatOpen,
        };
      case SET_FORMAT:
        return {
          ...state,
          format: action.payload,
        };
      case TOGGLE_TARGET_OPEN:
        return {
          ...state,
          isTargetOpen: !state.isTargetOpen,
        };
      case SET_TARGET:
        return {
          ...state,
          target: action.payload,
        };
      case SET_TEMPERATURE:
        return {
          ...state,
          temperature: action.payload,
        };
      case TOGGLE_TEMPERATURE_OPEN:
        return {
          ...state,
          isTemperatureOpen: !state.isTemperatureOpen,
        };
      case SET_INSIGHTS:
        return {
          ...state,
          insights: action.payload,
        };
  
      case SET_PRODUCT:
        return {
          ...state,
          product: action.payload,
        };
  
      case TOGGLE_PRODUCT_OPEN:
        return {
          ...state,
          isProductOpen: !state.isProductOpen,
        };
  
      case SET_AUDIENCE:
        return {
          ...state,
          audience: action.payload,
        };
  
      case TOGGLE_AUDIENCE_OPEN:
        return {
          ...state,
          isAudienceOpen: !state.isAudienceOpen,
        };
  
      case SET_GENERATED_INSIGHTS:
        return {
          ...state,
          generatedInsights: action.payload,
        };
  
      case SET_CHOSEN_INSIGHT:
        return {
          ...state,
          choosedInsight: action.payload,
        };
  
      case TOGGLE_GENERATED_INSIGHTS_OPEN:
        return {
          ...state,
          isGeneratedInsightsOpen: !state.isGeneratedInsightsOpen,
        };
      
        case SET_GENERATED_CONCEPTS:
          return {
            ...state,
            generatedConcepts: action.payload,
          };
    
        case SET_CHOSEN_CONCEPT:
          return {
            ...state,
            choosedConcept: action.payload,
          };
    
        case TOGGLE_GENERATED_CONCEPTS_OPEN:
          return {
            ...state,
            isGeneratedConceptsOpen: !state.isGeneratedConceptsOpen,
          };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  