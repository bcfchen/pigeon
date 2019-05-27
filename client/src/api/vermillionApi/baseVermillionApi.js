import { API } from 'aws-amplify';
import { addErrorMessage } from '../../redux/actions/errorHandlerActions';
class BaseVermillionApi {
    constructor() {
        this.apiName = 'vermillion';
    }

    async put(path, body) {
        const response = await API.put(this.apiName, path, { body });
        return response.data;
    }

    async get(path) {
        try {
            const response = await API.get(this.apiName, path);
            return response.data;
        } catch (err) {
            addErrorMessage(err);
        }
    }

    getWithErrorHandling(path, dispatch) {
        return API.get(this.apiName, path)
            .then(response => response.data)
            .catch(err => {
                const { message } = err;
                dispatch(addErrorMessage(message));
                throw (message);
            });
    }


    getMultipleWithErrorHandling(paths, dispatch) {
        const requests = paths.map(path => API.get(this.apiName, path).then(response => response.data));
        return Promise.all(requests).then(responses => responses.reduce((accumulator, element) => accumulator.concat(element), [])).catch(err => {
            const { message } = err;
            dispatch(addErrorMessage(message));
            throw (message);
        });
    }

    post(path, body) {
        return API.post(this.apiName, path, { body })
            .then(response => response.data);
    }

    postWithErrorHandling(path, body, dispatch) {
        return this
            .post(path, body)
            .catch(err => {
                const { message } = err;
                dispatch(addErrorMessage(message));
                throw (message);
            });
    }

    deleteWithErrorHandling(path, dispatch) {
        return API.del(this.apiName, path)
            .then(response => response.data)
            .catch(err => {
                const { message } = err;
                dispatch(addErrorMessage(message));
                throw (message);
            });
    }

    deleteMultipleWithErrorHandling(paths, dispatch) {
        const requests = paths.map(path => API.del(this.apiName, path).then(response => response.data));
        return Promise.all(requests).catch(err => {
            const { message } = err;
            dispatch(addErrorMessage(message));
            throw (message);
        });
    }


    async delete(path, body) {
        const response = await API.del(this.apiName, path, { body });
        return response.data;
    }

    async patch(path, body) {
        const response = await API.patch(this.apiName, path, { body });
        return response.data;
    }
}

export default new BaseVermillionApi();