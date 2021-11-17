import { call, put, select, takeLatest } from 'redux-saga/effects';
import VaccineListActions, {
  VaccineListSelectors,
  VaccineListTypes,
} from '../redux/VaccineListRedux';
import Apis from '../webservices/apis';
import { handleErrorResponse } from '../webservices/apis/utils/apiConfig';

const vaccineList = Apis.vaccineListApi();

function* handleVaccineListSuccess(data, payload) {
  if (payload?.page === 1) {
    yield put(VaccineListActions.vaccineListSuccess(data?.results));
  } else {
    const previousData = yield select(VaccineListSelectors.vaccineListData);

    const previousVaccineList = [...previousData?.result];

    const newData = {
      ...data.results,
      result: [...previousVaccineList, ...data?.results?.result],
    };

    yield put(VaccineListActions.vaccineListSuccess(newData));
  }
}

function* getVaccineList(api, { payload }) {
  const response = yield call(api.vaccineListData, payload);

  if (response?.status === 200 || response?.status === 201) {
    yield call(handleVaccineListSuccess, response?.data, payload);
  } else {
    yield call(
      handleErrorResponse,
      response,
      VaccineListActions.vaccineListFailure,
    );
  }
}

export default [
  takeLatest(
    VaccineListTypes.VACCINE_LIST_REQUEST,
    getVaccineList,
    vaccineList,
  ),
];
