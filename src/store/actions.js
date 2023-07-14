export const setPresentation = (presentation) => ({
  type: "SET_PRESENTATION",
  payload: presentation,
});

export const setImages = (images) => ({
  type: "SET_IMAGES",
  payload: images,
});

export const selectImage = (image) => ({
  type: "SELECT_IMAGE",
  payload: image,
});

export const toggleImagesOpen = () => ({
  type: "TOGGLE_IMAGES_OPEN",
});

export const setVisual = (visual) => ({
  type: "SET_VISUAL",
  payload: visual,
});

export const setVisualCategory = (category) => ({
  type: "SET_VISUAL_CATEGORY",
  payload: category,
});

export const toggleIsVisualCategoryOpen = () => ({
  type: "TOGGLE_IS_VISUAL_CATEGORY_OPEN",
});

export const toggleIsLoaidng = () => ({
  type: "TOGGLE_ISLOADING",
});

export const setConcept = (concept) => ({
  type: "SET_CONCEPT",
  payload: concept,
});

export const setName = (name) => ({
  type: "SET_NAME",
  payload: name,
});

export const setToneOfVoice = (toneOfVoice) => ({
  type: "SET_TONEOFVOICE",
  payload: toneOfVoice,
});

export const toggleToneOfVoiceOpen = () => ({
  type: "TOGGLE_TONEOFVOICE_OPEN",
});

export const setFormat = (format) => ({
  type: "SET_FORMAT",
  payload: format,
});

export const toggleFormatOpen = () => ({
  type: "TOGGLE_FORMAT_OPEN",
});

export const setInsights = (insights) => ({
  type: "SET_INSIGHTS",
  payload: insights,
});

export const setChosenInsight = (insight) => ({
  type: "SET_CHOSEN_INSIGHT",
  payload: insight,
});

export const setGeneratedInsights = (insights) => ({
  type: "SET_GENERATED_INSIGHTS",
  payload: insights,
});

export const toggleGeneratedInsightsOpen = () => ({
  type: "TOGGLE_GENERATED_INSIGHTS_OPEN",
});

export const setChosenConcept = (concept) => ({
  type: "SET_CHOSEN_CONCEPT",
  payload: concept,
});

export const setGeneratedConcepts = (concepts) => ({
  type: "SET_GENERATED_CONCEPTS",
  payload: concepts,
});

export const toggleGeneratedConceptsOpen = () => ({
  type: "TOGGLE_GENERATED_CONCEPTS_OPEN",
});

export const setProduct = (product) => ({
  type: "SET_PRODUCT",
  payload: product,
});

export const toggleProductOpen = () => ({
  type: "TOGGLE_PRODUCT_OPEN",
});

export const setTemperature = (temperature) => ({
  type: "SET_TEMPERATURE",
  payload: temperature,
});

export const toggleTemperatureOpen = () => ({
  type: "TOGGLE_TEMPERATURE_OPEN",
});

export const setAudience = (audience) => ({
  type: "SET_AUDIENCE",
  payload: audience,
});

export const toggleAudienceOpen = () => ({
  type: "TOGGLE_AUDIENCE_OPEN",
});

export const setTarget = (target) => ({
  type: "SET_TARGET",
  payload: target,
});

export const toggleTargetOpen = () => ({
  type: "TOGGLE_TARGET_OPEN",
});
