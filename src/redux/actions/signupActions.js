import { getUserSignupData } from "../../api/api";
import { USER_SIGN_UP_FAIL, USER_SIGN_UP_SUCCSESS } from "../types";

export const userSignupRequest = userData => dispatch => {
 return getUserSignupData(userData)//без return нельзя вынести сatch в хук! не забыть вернуть!
    .then(response => {
      console.log("response UserRequest", response.data);
      dispatch({ type: USER_SIGN_UP_SUCCSESS, payload: response.data });
    })
};
