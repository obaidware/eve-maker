import { createContext, useReducer } from "react";

export const Context = createContext()
const initState = {
    user: {},
    isloggedin: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE': {
            return { ...state, user: action.payload.values, userId: action.payload.id }
        } case 'LOGIN': {
            return { ...state, isloggedin: true }
        } case "LOGOUT": {
            return { ...state, isloggedin: false }
        }
    }
}

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}