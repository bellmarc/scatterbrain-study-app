export const get = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user ? user : false
}
export const add = (user) => {
    localStorage.setItem("user",JSON.stringify(user))
}
export const clear = () => {
    localStorage.removeItem("user")
}

export default { get, add, clear }    

