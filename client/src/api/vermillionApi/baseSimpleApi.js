import axios from 'axios';
import config from '../../config';
import * as errorHandlerActions from '../../redux/actions/errorHandlerActions';

class BaseSimpleApi {
    constructor() {
        this.host = config.apiGateway.ELB;
    }

    postMulti(path, requests, dispatch) {
        const fullPath = `http://${this.host}${path}`;
        const outgoingRequests = requests.map(req => axios.post(fullPath, req));
        return Promise.all(outgoingRequests)
            .catch(err => {
                const { message } = err;
                dispatch(errorHandlerActions.addErrorMessage(message));
                throw (err.message);
            });
    }
}

export default new BaseSimpleApi();
