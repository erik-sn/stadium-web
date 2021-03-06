import types from '../utils/types';

import api from '../utils/api';
import { logError } from '../utils/errors';

export const loginUserWithGithub = (code, state) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_USER_GITHUB_OAUTH, payload: state });
    api
      .login(code)
      .then(response => {
        dispatch({
          type: types.LOGIN_USER_GITHUB_OAUTH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: types.LOGIN_USER_GITHUB_OAUTH_FAILURE });
        logError(error);
      });
  };
};

export const getMyProfile = dispatch => {
  dispatch({ type: types.GET_USER_PROFILE, payload: null });
  api
    .me()
    .then(response => {
      dispatch({
        type: types.GET_USER_PROFILE_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({ type: types.GET_USER_PROFILE_FAILURE, payload: null });
      logError(error);
    });
};

export const updateMyProfile = form => {
  return dispatch => {
    dispatch({ type: types.UPDATE_USER_PROFILE, payload: null });
    api
      .updateMe(form)
      .then(response => {
        dispatch({
          type: types.UPDATE_USER_PROFILE_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: types.UPDATE_USER_PROFILE_FAILURE, payload: error });
        logError(error);
      });
  };
};

export const deleteUser = () => {
  return dispatch => {
    dispatch({ type: types.DELETE_USER, payload: null });
    api
      .deleteMe()
      .then(response => {
        dispatch({
          type: types.DELETE_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: types.DELETE_USER_FAILURE, payload: error });
        logError(error);
      });
  };
};

export const refreshAuthToken = token => {
  return dispatch => {
    dispatch({ type: types.REFRESH_AUTH_TOKEN, payload: null });
    api
      .refreshToken(token)
      .then(response => {
        dispatch({
          type: types.REFRESH_AUTH_TOKEN_SUCCESS,
          payload: response.data,
        });
        getMyProfile(dispatch);
      })
      .catch(error => {
        dispatch({
          type: types.REFRESH_AUTH_TOKEN_FAILURE,
          payload: null,
        });
        logError(error);
      });
  };
};

export const logout = clientId => {
  return dispatch => {
    dispatch({ type: types.LOGOUT_USER, payload: null });
    api
      .logout(clientId)
      .then(response => {
        dispatch({
          type: types.LOGOUT_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.LOGOUT_USER_FAILURE,
          payload: null,
        });
        logError(error);
      });
  };
};
