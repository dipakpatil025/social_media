import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
// const cuser = JSON.parse(localStorage.getItem("user")
const INITIAL_STATE = {
    // user:
    // {
    //     _id: "61bd906fcc930a1545f50e40",
    //     username: "test",
    //     email: "test@gmail.com",
    //     password: "$2b$10$LJBMYBD1N8zon4pueC564uqtWDnYMEEfkE47hc0lI4Lw1pX4QdWVa",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [], followings: [],
    //     dec: "Hey friend's ",
    //     city: "pune",
    //     from: "jalgaon",
    //     relationship: "1"
    // }
    // user:
    // {
        //     _id: "61bd9077cc930a1545f50e42",
        //     username: "test2", 
        //     email: "test2@gmail.com",
        //     password: "$2b$10$gLbvSwhgTC.YoxFyuv4EA.D/tNBLd/AoJHQzD.n/pLoAGtt7YWzGK",
        //     profilePicture: "",
        //     coverPicture: "",
        //     followers: ["61bd906fcc930a1545f50e40"], followings: [],
        //     dec: "Hey friend's ",
        //     city: "pune",
        //     from: "jalgaon",
        //     relationship: "1"
        // }
        
        // user:    {"_id":"61e6b82d24285ba91d97d649","username":"dip","email":"dip@gmail.com","password":"$2b$10$U35xQaMvnwAT.mXWMm1WxejbDk7w4VBDsqz9XzZ49zVYPKkR3n/A.","profilePicture":"","CoverPicture":"","followers":[],"followings":[],"isAdmin":false,"createdAt":"2022-01-18T12:53:01.579Z","updatedAt":"2022-01-18T12:53:01.579Z","__v":0}
       
        user: localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user"))) : null
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