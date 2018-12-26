import { local_storage } from "../utils/constant";

// get auth token from localstorage
const getHeaders = () => {
    let authorization = localStorage.getItem(local_storage.access_token);
    return { authorization };
};

/**
 * get request - generic
 * @param {string} URL
 * @returns {object} 
 */
export const get = async URL => {
    let headers = getHeaders();
    const responseData = await fetch(URL, {
        method: "GET",
        headers
    });
    const responseJson = await responseData.json();
    return responseJson;
};

/**
 * post request - generic
 * @param {string} URL 
 * @param {object} data
 * @returns {object} 
 */
export const post = async (URL, data) => {
    let headers = getHeaders();
    const responseData = await fetch(URL, {
        method: "POST",
        headers,
        body: JSON.stringify(data)
    });
    const responseJson = await responseData.json();
    return responseJson;
};

/**
 * delete request (actually delete since all, delete is keyword, remove is used)- generic
 * @param {string} URL 
 * @param {object} data
 * @returns {object} 
 */
export const remove = async (URL, data) => {
    let headers = getHeaders();
    const responseData = await fetch(URL, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data)
    });
    const responseJson = await responseData.json();
    return responseJson;
}