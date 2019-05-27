import baseVermillionApi from './baseVermillionApi';

const apiRoot = '/organization-management';

export const searchOrganizationById = (organizationId, dispatch) => {
    const path = `${apiRoot}/organization-composite/organizations/${organizationId}`;
    return baseVermillionApi.getWithErrorHandling(path, dispatch);
};

export const searchAllOrganizations = (dispatch) => {
    const path = `${apiRoot}/organization-composite/organizations`;
    return baseVermillionApi.getWithErrorHandling(path, dispatch);
};

export const createOrganization = (organizationObj, dispatch) => {
    const path = `${apiRoot}/organizations`;
    return baseVermillionApi.postWithErrorHandling(path, organizationObj, dispatch);
};