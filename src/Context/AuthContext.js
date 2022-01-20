import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user:
    {
        _id: "61bd906fcc930a1545f50e40",
        username: "test", 
        email: "test@gmail.com",
        password: "$2b$10$LJBMYBD1N8zon4pueC564uqtWDnYMEEfkE47hc0lI4Lw1pX4QdWVa",
        profilePicture: "",
        coverPicture: "",
        followers: [], followings: ["61bd9077cc930a1545f50e42"],
        dec: "Hey friend's ",
        city: "pune",
        from: "jalgaon",
        relationship: "1"
    }

    ,
    isFetching: false,
    error: false
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvoiders = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>{children}
        </AuthContext.Provider>
    )

}