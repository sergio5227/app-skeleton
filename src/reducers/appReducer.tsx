import { combineReducers } from "redux";
import { SET_COUNT } from "../actions/dispatches/counter";
import { SET_USER } from "../actions/dispatches/auth";
import { RESET_STATE } from "../actions/dispatches/general";
import {SET_THEME } from "../actions/dispatches/theme";

const initialState = {
  user: {},
  count: 0,
  employees: { data: [], detail: {} },
  upload: [],
  theme:'#fff'
};

const app = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action?.value || '#fff' };
    case SET_USER:
      return { ...state, user: action?.value || {} };
    case SET_COUNT:
      return { ...state, count: action?.value || 0 };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ app });

export default rootReducer;

