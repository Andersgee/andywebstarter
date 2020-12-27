import { combineReducers } from "redux";
import { connect } from "react-redux";
import user, { setUser } from "./user";
import data, { setData } from "./data";

const rr = combineReducers({ user, data });
export default rr;

const setState = (dispatch, x) => {
  x.hasOwnProperty("user") && dispatch(setUser(x.user));
  x.hasOwnProperty("data") && dispatch(setData(x.data));
};

//add the props state and setState to the component
//use the individual withUser or withData if only one is needed...
export const withState = (component) =>
  connect(
    (state) => ({ state: state }),
    (dispatch) => ({ setState: (x) => setState(dispatch, x) })
  )(component);
