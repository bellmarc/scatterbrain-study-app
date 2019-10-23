export const get = () => {
    const userJSON = localStorage.getItem("user")
    const user =  userJSON ? JSON.parse(userJSON) : false;
    return user
}
export const add = (user) => {
    localStorage.setItem("user",JSON.stringify(user))
}
export const clear = () => {
    localStorage.removeItem("user")
}

export default { get, add, clear }    

