import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {
        id:1,
        text: 'Flower', 
        amount: -20
        },
        {
        id:2,
        text: 'Salary', 
        amount: -30
        },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({childrem}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {childrem}
        </GlobalContext.Provider>
    )
}