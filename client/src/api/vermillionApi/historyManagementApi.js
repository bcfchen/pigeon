import baseVermillionApi from './baseVermillionApi';

const apiRoot = '/history-management';

export const searchMyUploadRequests = (userId, isComplete) => {
    const path = `${apiRoot}/advanced/uploads/users/${userId}?isComplete=${isComplete}`;
    return baseVermillionApi.get(path);
};

export const searchMyDownloadRequests = (userId) => {
    const path = `${apiRoot}/simple/downloads/users/${userId}`;
    return baseVermillionApi.get(path);
};

export const saveMyUploadRequests = (uploadrequests) => {
    const promises = uploadrequests.map(req => updateMyUploadRequest(req.id, req.context));
    return Promise.all(promises);
};

export const updateMyUploadRequest = (uploadHistoryId, context) => {
    const path = `${apiRoot}/advanced/uploads/${uploadHistoryId}`;
    return baseVermillionApi.put(path, {
        context,
    });
};

export const adminSearchUserUploadRequests = (adminUserId, isComplete) => {
    const path = `${apiRoot}/advanced/uploads/supervisor/${adminUserId}?isComplete=${isComplete}`;
    return baseVermillionApi.get(path);
};

export const adminApproveUploads = (adminUserId, uploadHistoryIds, dispatch) => {
    const path = `${apiRoot}/advanced/uploads/supervisor/${adminUserId}/approve`;
    return baseVermillionApi.postWithErrorHandling(path, {
        uploadHistoryIds,
    }, dispatch);
};

export const adminRejectUploads = (adminUserId, rejections, dispatch) => {
    const path = `${apiRoot}/advanced/uploads/supervisor/${adminUserId}/reject`;
    const contextList = rejections.map(rej => ({
        uploadHistoryId: rej.id,
        notes: rej.notes,
    }));
    return baseVermillionApi.postWithErrorHandling(path, {
        contextList,
    }, dispatch);
};