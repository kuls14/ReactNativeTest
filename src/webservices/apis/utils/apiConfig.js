import apisauce from 'apisauce';
import { call, put } from 'redux-saga/effects';
import { ErrorConsts } from '../../../constants';
import { isNull, showToast } from '../../../utils/helper';

export const apiConfig = (baseURL) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' },
  });

export function* handleErrorResponse(
  response,
  failureAction,
  shouldLogout = true,
) {
  const error = yield call(getError, response, shouldLogout);

  showToast(error);
  yield put(failureAction(error));
}

export function getError(response, shouldLogout = true) {
  if (response?.problem === 'CLIENT_ERROR') {
    return handleClientError(response, shouldLogout);
  }

  if (response?.problem === 'NETWORK_ERROR') {
    return getErrorMessage(response, ErrorConsts.networkError);
  }

  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return getErrorMessage(response, ErrorConsts.serverError);
  }

  return ErrorConsts.somethingWentWrong;
}

export const handleClientError = (response, shouldLogout) => {
  if (response.status === 401 && shouldLogout) {
    showToast('Please Login');
  }

  return getErrorMessage(response, ErrorConsts.somethingWentWrong);
};

export const getErrorMessage = (response, defaultError) => {
  let errorMessage;

  if (!isNull(response.data?.message)) {
    errorMessage = response.data?.message;
  } else if (!isNull(response.data?.error_description)) {
    errorMessage = response.data?.error_description;
  } else if (!isNull(response.data?.error)) {
    errorMessage = response.data?.error;
  } else {
    errorMessage = defaultError;
  }

  return errorMessage;
};
