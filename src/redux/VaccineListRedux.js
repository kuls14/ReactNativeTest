import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  vaccineListRequest: ['payload'],
  vaccineListSuccess: ['data'],
  vaccineListFailure: ['error'],
});

export const VaccineListTypes = Types;

const VaccineListActions = Creators;

export default VaccineListActions;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  vaccineListData: {},
});

/* ------------- Selectors ------------ */
export const VaccineListSelectors = {
  fetching: (state) => state.vaccineList.fetching,
  vaccineListData: (state) => state.vaccineList.vaccineListData,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => state.merge({ fetching: true, error: null });

export const vaccineListSuccessResponse = (state, action) => {
  const { data } = action;

  return state.merge({ fetching: false, error: null, vaccineListData: data });
};

export const vaccineListError = (state, action) => {
  const { error } = action;

  return state.merge({ fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */
export const vaccineListReducer = createReducer(INITIAL_STATE, {
  [Types.VACCINE_LIST_REQUEST]: request,
  [Types.VACCINE_LIST_SUCCESS]: vaccineListSuccessResponse,
  [Types.VACCINE_LIST_FAILURE]: vaccineListError,
});
