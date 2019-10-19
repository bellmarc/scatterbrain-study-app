const axios = require('axios');
const handleError = require('./functions/handleError')
const sendResponse = require('./functions/sendResponse')

export const add = (user) => {
    return axios.post('/users',user).then(sendResponse).catch(handleError)
}
export const get = (id) => {
    return axios.get(`/users/${id}`).then(sendResponse).catch(handleError)
}

export default { get, add }



