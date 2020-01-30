import { instanceOf } from "prop-types"
import {USER_SIGN_UP_SUCCSESS,USER_SIGN_UP_FAIL } from '../types'

const initialState = {}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case USER_SIGN_UP_SUCCSESS:
            return {...state, user: action.payload}
        default:
            return state
    }

}

export default reducer;



