import { all } from 'redux-saga/effects';
import VaccineList from './VaccineList';

export default function* rootSaga() {
  yield all([...VaccineList]);
}
