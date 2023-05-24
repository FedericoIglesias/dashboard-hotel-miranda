import { route } from "../dotenv";
import { InitState, SendLogin } from "../types";

export const userInitialState: InitState = {
  token: "",
  name: "",
  email: "",
  photo: "",
};

export const LoginReducer = async (
  state: InitState,
  action: SendLogin
): Promise<InitState> => {
  try {
    const response = await fetch("http://localhost:3100/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(action),
    })
    
    state = await response.json();

    console.log(state, 'asdas');
    

    return await state;
  } catch (e) {
    alert(e);
  }
};
