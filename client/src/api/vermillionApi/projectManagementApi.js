import baseVermillionApi from './baseVermillionApi';

const apiRoot = '/project-management';

export const searchProjectsByOrganizationId = (organizationId) => {
    const path = `${apiRoot}/projects?organizationId=${organizationId}`;
    return baseVermillionApi.get(path);
};

export const createProject = (projectName, dispatch) => {
    const path = `${apiRoot}/projects`;
    return baseVermillionApi.postWithErrorHandling(path, { projectName }, dispatch);
};

export const getAdminProjects = (dispatch) => {
    const path = `${apiRoot}/projects`;
    return baseVermillionApi.getWithErrorHandling(path, dispatch);
};