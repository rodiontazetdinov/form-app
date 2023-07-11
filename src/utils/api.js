class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  postInsights({ product, audience }) {
    return this._request(`${this._baseUrl}/generate_insights/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        product,
        audience,
      }),
    });
  }

  postConcept({
    product,
    audience,
    toneofvoice,
    format_type,
    target,
    insight,
    temperature,
  }) {
    return this._request(`${this._baseUrl}/generate_name_concept_pairs/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        product,
        audience,
        toneofvoice,
        format_type,
        target,
        insight,
        temperature,
      }),
    });
  }

  postVisual({ visual_category, name, concept }) {
    return this._request(`${this._baseUrl}/generate_visual/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        visual_category,
        name,
        concept
      }),
    });
  }

  postImages({ visual }) {
    return this._request(`${this._baseUrl}/generate_images/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        visual
      }),
    });
  }

  postPresentation({ imageString, name, concept }) {
    return this._request(`${this._baseUrl}/generate_presentation/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ 
        imageString: imageString,
        name: name,
        concept: concept }),
    });
  }

  downloadPresentation({ filename }) {
    return fetch(`${this._baseUrl}/download/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ 
        filename: filename }),
    })
    .then(response => response.blob())
  }
}

export const api = new Api({
  baseUrl: "http://34.92.175.180:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
