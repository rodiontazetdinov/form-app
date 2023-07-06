export const saveRequestToLocalStorage = (key, request) => {
    // Get the existing requests array from localStorage
    let requests = JSON.parse(localStorage.getItem(key)) || [];
  
    // Add the new request to the array
    requests.push(request);
  
    // Save the updated requests array to localStorage
    localStorage.setItem(key, JSON.stringify(requests));
  };

export const getRequestsFromLocalStorage = (key) => {
    // Get the requests array from localStorage
    const requests = JSON.parse(localStorage.getItem(key));
  
    // If requests array is not found, return an empty array
    return requests || [];
  };