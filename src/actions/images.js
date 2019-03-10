import types from '../utils/types';

import api from '../utils/api';
import { logError } from '../utils/errors';

export const _getUserImages = dispatch => {
  dispatch({ type: types.GET_USER_IMAGES_LIST });
  api
    .myImages()
    .then(response => {
      dispatch({
        type: types.GET_USER_IMAGES_LIST_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({ type: types.GET_USER_IMAGES_LIST_FAILURE });
      logError(error);
    });
};

export const getUserImages = () => {
  return _getUserImages;
};

export const createImage = (...args) => {
  return dispatch => {
    dispatch({ type: types.CREATE_IMAGE });
    api
      .createImage(...args)
      .then(response => {
        dispatch({
          type: types.CREATE_IMAGE_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({ type: types.CREATE_IMAGE_FAILURE });
        logError(error);
      });
  };
};
