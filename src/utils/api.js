class Api {
    constructor(options) {
       this._baseUrl = options.baseUrl;
       this._headers = options.headers;
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // getInitialCards() {
    //    return this._request(`${this._baseUrl}/cards`, {
    //         headers: this._headers
    //     }) 
    // }

    // getProfile() {
    //    return this._request(`${this._baseUrl}/users/me`, {
    //         headers: this._headers
    //     }); 
    // }

    // patchUserInfo({ name, about }) {
    //     return this._request(`${this._baseUrl}/users/me`, {
    //         method: 'PATCH',
    //         headers: this._headers,
    //         body: JSON.stringify({
    //             name: name,
    //             about: about
    //         })
    //         }
    //     );
    // }

    postInsights({ product, audience }) {
        return this._request(`${this._baseUrl}/generate_insights/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                product,
                audience
            })
            }
        ); 
    }

    postConcept({ product, audience, toneofvoice, format_type, target, insight, temperature }) {
        return this._request(`${this._baseUrl}/generate_name_concept_pairs/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                product,
                audience,
                toneofvoice,
                format_type,
                target,
                insight,
                temperature,
            })
            }
        ); 
    }

    postVisual({ product, audience }) {
        return this._request(`${this._baseUrl}/generate_visual/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                product,
                audience
            })
            }
        ); 
    }

    postImages({ product, audience }) {
        return this._request(`${this._baseUrl}/generate_images/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                product,
                audience
            })
            }
        ); 
    }

    postPresentation({ product, audience }) {
        return this._request(`${this._baseUrl}/generate_presentation/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                product,
                audience
            })
            }
        ); 
    }

    // removeMyCard(id) {
    //     return this._request(`${this._baseUrl}/cards/${id}`, {
    //         method: 'DELETE',
    //         headers: this._headers,
    //         }) 
    // }

    // increaseLike(id, likes) {
    //     return this._request(`${this._baseUrl}/cards/${id}/likes`, {
    //         method: 'PUT',
    //         headers: this._headers,
    //         body: JSON.stringify({
    //             likes: likes,

    //         })
    //         });
    // }

    // decreaseLike(id) {
    //     return this._request(`${this._baseUrl}/cards/${id}/likes`, {
    //         method: 'DELETE',
    //         headers: this._headers,
    //         });
    // }
    

    // setAvatar({ avatar }) {
    //     return this._request(`${this._baseUrl}/users/me/avatar`, {
    //         method: 'PATCH',
    //         headers: this._headers,
    //         body: JSON.stringify({
    //             avatar: avatar
    //         })
    //         }
    //     ); 
    // }
}

export const api = new Api({
    baseUrl: 'http://35.220.218.172:8000',
    headers: {
    'Content-Type': 'application/json'
  }
});