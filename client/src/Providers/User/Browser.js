const get = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user ? user : false
}
const add = (user) => {
    localStorage.setItem("user",JSON.stringify(user))
    return true
}
const clear = () => {
    localStorage.removeItem("user")
}

export default { get, add, clear }    

