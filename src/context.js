import {createContext, useReducer} from "react";
import {reducer} from "./components/reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    }

    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    }

    value.incQuantity = (itemId) => {
        dispatch({type: 'INC_QUANTITY', payload: {id: itemId}});
    }

    value.incQuantity = (itemId) => {
        dispatch({type: 'DEC_QUANTITY', payload: {id: itemId}});
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    }

    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'});
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
};