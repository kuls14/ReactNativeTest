import { parentUrl } from '../urlEndPoints';
import { apiConfig } from './utils/apiConfig';
import vaccineListApi from './vaccineList';

const baseURL = apiConfig(parentUrl);

const Apis = {
  vaccineListApi: vaccineListApi(baseURL),
};

export default Apis;
