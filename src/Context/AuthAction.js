export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCES",
    payload: user,

})
export const LoginLailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})

export const Follow = (userId) =>({
    type: "FOLLOW",
    payload : userId,
})

export const Unfollow = (userId) =>({
    type: "UNFOLLOW",
    payload : userId,
})