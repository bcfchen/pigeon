import baseVermillionApi from './baseVermillionApi';

const apiRoot = '/user-management';

export const getUserInfoComposite = (userId) => {
    const path = `${apiRoot}/user-info-composite/users/${userId}`;
    return baseVermillionApi.get(path);
}

export const createSimpleUser = (userObj) => {
    const path = `${apiRoot}/simple/users`;
    return baseVermillionApi.post(path, userObj);
}

export const createAdvancedUser = (userObj, dispatch) => {
    const path = `${apiRoot}/advanced/users`;
    return baseVermillionApi.postWithErrorHandling(path, userObj, dispatch);
}

export const getUserGroupNames = (dispatch) => {
    const path = `${apiRoot}/advanced/user-groups`;
    return baseVermillionApi.getWithErrorHandling(path, dispatch);
};

export const getUsersByOrganizationIds = (organizationIds, dispatch) => {
    const paths = organizationIds.map(organizationId => `${apiRoot}/advanced/users?organizationId=${organizationId}`);
    return baseVermillionApi.getMultipleWithErrorHandling(paths, dispatch);
};

export const removeUsers = (usernames, dispatch) => {
    const paths = usernames.map(username => `${apiRoot}/advanced/users/${username}`);
    return baseVermillionApi.deleteMultipleWithErrorHandling(paths, dispatch);
};
