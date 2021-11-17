import moment from 'moment';
import { Toast } from 'native-base';
import R from 'ramda';
import { Colors } from '../styles';

export function isNull(data) {
  if (R.isNil(data) || R.isEmpty(data)) {
    return true;
  } else {
    false;
  }
}
export const showToast = (message) => {
  Toast.show({
    text: `${message}`,
    textStyle: {
      color: Colors.black,
    },
    style: { backgroundColor: Colors.white },
    duration: 2000,
  });
};

export function objToQueryString(obj) {
  const keyValuePairs = [];

  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }

  return keyValuePairs.join('&');
}

export const jsonParser = (data) => {
  let parseData = data;

  try {
    parseData = JSON.parse(data);
  } catch (e) {
    () => {};
  }

  return parseData;
};

export const getDateStringFromDate = (date, outputFormat, inputFormat) => {
  if (isNull(date)) {
    return '';
  }

  if (date === '-') {
    return '-';
  }

  return moment(date, inputFormat).format(outputFormat);
};
