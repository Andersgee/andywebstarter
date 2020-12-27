import { connect } from "react-redux";

const initState = false;

export default function user(state = initState, action) {
  return action.type === "user" ? action.payload : state;
}

export const setUser = (x) => ({ type: "user", payload: x });

export const withUser = (component) =>
  connect(
    (state) => ({ user: state.user }),
    (dispatch) => ({ setUser: (x) => dispatch(setUser(x)) })
  )(component);
