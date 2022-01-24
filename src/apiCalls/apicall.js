import axios from "axios";

export const login_call = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("http://dipsocials.herokuapp.com/api/auth/login", userCredentials);
        localStorage.setItem("username",res.data.username)
        localStorage.setItem("user",JSON.stringify( res.data))    
        dispatch({ type: "LOGIN_SUCCES", payload: res.data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
}