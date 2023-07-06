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

export const toggleIsLoaidng = () => ({
  type: TOGGLE_ISLOADING,
});

export const setConcept = (concept) => ({
  type: SET_CONCEPT,
  payload: concept,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setToneOfVoice = (toneOfVoice) => ({
  type: SET_TONEOFVOICE,
  payload: toneOfVoice,
});

export const toggleToneOfVoiceOpen = () => ({
  type: TOGGLE_TONEOFVOICE_OPEN,
});

export const setFormat = (format) => ({
  type: SET_FORMAT,
  payload: format,
});

export const toggleFormatOpen = () => ({
  type: TOGGLE_FORMAT_OPEN,
});

export const setInsights = (insights) => ({
  type: SET_INSIGHTS,
  payload: insights,
});

export const setChosenInsight = (insight) => ({
  type: SET_CHOSEN_INSIGHT,
  payload: insight,
});

export const setGeneratedInsights = (insights) => ({
  type: SET_GENERATED_INSIGHTS,
  payload: insights,
});

export const toggleGeneratedInsightsOpen = () => ({
  type: TOGGLE_GENERATED_INSIGHTS_OPEN,
});


export const setChosenConcept = (concept) => ({
  type: SET_CHOSEN_CONCEPT,
  payload: concept,
});

export const setGeneratedConcepts = (concepts) => ({
  type: SET_GENERATED_CONCEPTS,
  payload: concepts,
});

export const toggleGeneratedConceptsOpen = () => ({
  type: TOGGLE_GENERATED_CONCEPTS_OPEN,
});

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product,
});

export const toggleProductOpen = () => ({
  type: TOGGLE_PRODUCT_OPEN,
});

export const setTemperature = (temperature) => ({
  type: SET_TEMPERATURE,
  payload: temperature,
});

export const toggleTemperatureOpen = () => ({
  type: TOGGLE_TEMPERATURE_OPEN,
});

export const setAudience = (audience) => ({
  type: SET_AUDIENCE,
  payload: audience,
});

export const toggleAudienceOpen = () => ({
  type: TOGGLE_AUDIENCE_OPEN,
});

export const setTarget = (target) => ({
  type: SET_TARGET,
  payload: target,
});

export const toggleTargetOpen = () => ({
  type: TOGGLE_TARGET_OPEN,
});



