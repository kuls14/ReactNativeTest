import urlEndPoints from '../urlEndPoints';

const vaccineListApi = (api) => () => {
  const vaccineListData = (newData) => {
    return api.get(urlEndPoints.listingApi, newData);
  };

  return {
    vaccineListData,
  };
};

export default vaccineListApi;
