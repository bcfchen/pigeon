import baseVermillionApi from './baseVermillionApi';
import baseSimpleApi from './baseSimpleApi';

const apiRoot = '/image-management';

export const queryDownloadLink = (publicIds, userId, isVideo, dispatch) => {
    const path = `${apiRoot}/download-link`;
    return baseVermillionApi.postWithErrorHandling(path, {
        imageIds: publicIds,
        userId,
        isVideo,
        isJOMC: false,
    }, dispatch);
};

export const uploadAssets = (assetUploadRequests, dispatch) => {
    const path = `${apiRoot}/upload/image`;
    return baseSimpleApi.postMulti(path, assetUploadRequests, dispatch);
}

export const updateTags = (tags, imageId) => {
    const path = `${apiRoot}/update-tags`;
    return baseVermillionApi.post(path, {
        tags,
        imageId
    });
}