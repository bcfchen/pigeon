import baseVermillionApi from './baseVermillionApi';

const apiRoot = '/folder-management';

export const saveAssetIdsToFolder = (folderId, imageIds, userId) => {
    const path = `${apiRoot}/users/${userId}/folders/${folderId}`;
    return baseVermillionApi.put(path, {
        imageIds,
    });
};

export const addFolderWithAssetIds = (folderName, imageIds, userId) => {
    const path = `${apiRoot}/users/${userId}/folders`;
    return baseVermillionApi.post(path, {
        folderName,
        imageIds,
    });
};

export const getFoldersByUserId = (userId) => {
    const path = `${apiRoot}/users/${userId}/folders`;
    return baseVermillionApi.get(path);
};

export const deleteFolder = (userId,folderId) => {
    const path = `${apiRoot}/users/${userId}/folders/${folderId}`;
    return baseVermillionApi.delete(path);
};

export const updateFolderName = (userId,folderId, folderName) => {
    const path = `${apiRoot}/users/${userId}/folders/${folderId}`;
    return baseVermillionApi.patch(path,
        {
            folderName
        }
    );
};

