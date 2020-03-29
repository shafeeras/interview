import { LOGIN } from "../../actions/Login";

const initialState = {
  success: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.success:
      return { ...state, success: action.data };
    default:
      return { ...state };
  }
};

export default loginReducer;
