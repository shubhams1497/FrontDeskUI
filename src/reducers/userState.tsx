const initialState = {
  isLoggedIn: false,
  userName: "",
  emailId: "",
  userType: "",
};

interface IAction {
  type: USERSTATE_ACTIONS;
  payload: Record<string, any>;
}

enum USERSTATE_ACTIONS {
  USER_STATE_RESET = "USER_STATE_RESET",
  USER_STATE_UPDATE = "USER_STATE_UPDATE",
}

export default function userStateReducer(
  state = initialState,
  action: IAction
) {
  switch (action.type) {
    case USERSTATE_ACTIONS.USER_STATE_UPDATE:
      return Object.assign({}, state, action.payload);
    case USERSTATE_ACTIONS.USER_STATE_RESET:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

export function updateUserStateAction(payload: Record<string, any>) {
  return (dispatch: any) => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 2500);
    });

    return myPromise.then(() =>
      dispatch({ type: USERSTATE_ACTIONS.USER_STATE_UPDATE, payload })
    );
  };
}
