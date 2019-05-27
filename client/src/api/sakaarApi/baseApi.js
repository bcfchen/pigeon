import { API } from 'aws-amplify';
import { addErrorMessage } from '../../redux/actions/errorHandlerActions';

class BaseVermillionApi {
  constructor() {
    this.apiName = 'sakaar';
  }

  async put(path, body) {
    const response = await API.put(this.apiName, path, { body });
    return response.data;
  }

  get(path, dispatch) {
    return API.get(this.apiName, path)
      .then(response => response.data)
      .catch((err) => {
        const { message } = err;
        dispatch(addErrorMessage(message));
        throw (message);
      });
  }


  getMultiple(paths, dispatch) {
    const requests = paths.map(path => API.get(this.apiName, path).then(response => response.data));
    return Promise.all(requests)
      .then(responses => responses.reduce((accumulator, element) => accumulator.concat(element), []))
      .catch((err) => {
        const { message } = err;
        dispatch(addErrorMessage(message));
        throw (message);
      });
  }

  post(path, body, dispatch) {
    return API.post(this.apiName, path, { body })
      .then(response => response.data)
      .catch((err) => {
        const { message } = err;
        if (dispatch) {
          dispatch(addErrorMessage(message));
        }
        throw (message);
      });
  }

  delete(path, dispatch) {
    return API.del(this.apiName, path)
      .then(response => response.data)
      .catch((err) => {
        const { message } = err;
        dispatch(addErrorMessage(message));
        throw (message);
      });
  }

  deleteMultiple(paths, dispatch) {
    const requests = paths.map(path => API.del(this.apiName, path).then(response => response.data));
    return Promise.all(requests).catch((err) => {
      const { message } = err;
      dispatch(addErrorMessage(message));
      throw (message);
    });
  }

  async patch(path, body) {
    const response = await API.patch(this.apiName, path, { body });
    return response.data;
  }
}

export default new BaseVermillionApi();
