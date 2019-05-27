import baseApi from './baseApi';

const apiRoot = '/main';
export const generateFromUrl = (contentUrl, dispatch) => baseApi.post(`${apiRoot}/generate-from-url`, { url: contentUrl }, dispatch);
export const consumeByProjectId = (projectId, dispatch) => baseApi.get(`${apiRoot}/consume/${projectId}`, dispatch);
