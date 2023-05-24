import { InitState } from "../types";

export const userInitialState: InitState = {
  token: "",
  name: "",
  email: "",
  photo: "",
};

export const LoginReducer = (
  state: InitState,
  action: InitState
): InitState => {

    state = action

return state

};
