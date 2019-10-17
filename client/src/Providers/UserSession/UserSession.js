import React, { useState } from 'react';
import axios from 'axios';

const handleError = require('./functions/handleError')
const sendResponse = require('./functions/sendResponse')
export const userSessionContext = React.createContext()

const UserSession = (props) => {

    const addNewUserToServer = (user) => {
        return axios.post('users',user).then(sendResponse).catch(handleError)
    }
    const getUserFromServerById = (id) => {
        return axios.get(`users/${id}`).then(sendResponse).catch(handleError)
    }
    const getUserFromBrowser = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        return user ? user : false
    }
    const addUserToBrowser = (user) => {
        localStorage.setItem("user",JSON.stringify(user))
        return true
    }
    
    
    return (
        <userSessionContext.Provider value = {{
                addNewUserToServer,
                getUserFromServerById,
                getUserFromBrowser,
                addUserToBrowser
            }}>
            { props.children }
        </userSessionContext.Provider>
    )
}

export default UserSession
