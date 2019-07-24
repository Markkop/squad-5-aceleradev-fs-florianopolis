export const ActionTypes = {
  REQUEST_ATTEMPT_LOGIN: "REQUEST_ATTEMPT_LOGIN",
  SUCCESS_ATTEMPT_LOGIN: "SUCCESS_ATTEMPT_LOGIN",
  FAILURE_ATTEMPT_LOGIN: "FAILURE_ATTEMPT_LOGIN",

  REQUEST_LOGOUT: "REQUEST_LOGOUT",

  REQUEST_ATTEMPT_USER: "REQUEST_ATTEMPT_USER",
  SUCCESS_ATTEMPT_USER: "SUCCESS_ATTEMPT_USER",
  FAILURE_ATTEMPT_USER: "FAILURE_ATTEMPT_USER",

  REQUEST_SIGN_USER: "REQUEST_SIGN_USER",
  SUCCESS_SIGN_USER: "REQUEST_SIGN_USER",
  FAILURE_SIGN_USER: "REQUEST_SIGN_USER",

  REQUEST_ATTEMPT_NOTIFICATION: "REQUEST_ATTEMPT_NOTIFICATION",
  SUCCESS_ATTEMPT_NOTIFICATION: "SUCCESS_ATTEMPT_NOTIFICATION",
  FAILURE_ATTEMPT_NOTIFICATION: "FAILURE_ATTEMPT_NOTIFICATION"
};

export function getUsers() {
  return {
    type: ActionTypes.REQUEST_ATTEMPT_USER
  };
}

export function getNotifications() {
  return {
    type: ActionTypes.REQUEST_ATTEMPT_NOTIFICATION
  };
}

export function login(credentials) {
  return {
    type: ActionTypes.REQUEST_ATTEMPT_LOGIN,
    payload: {
      credentials
    }
  };
}


export function cadastraUser(credentials) {
  return {
    type: ActionTypes.REQUEST_SIGN_USER,
    payload: {
      credentials
    }
  };
}



export function logout() {
  return {
    type: ActionTypes.REQUEST_LOGOUT
  };
}
