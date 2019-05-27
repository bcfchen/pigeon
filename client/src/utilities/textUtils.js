// if length is greater than 21, sub the last 3 chars with '...'
export const truncateAssetCardTitle = originalTitle => {
    if (!originalTitle || originalTitle.length < 17) {
        return originalTitle;
    }

    return originalTitle.substring(0, 14) + '...';
};

export const truncateProjectCardTitle = originalTitle => {
    if (!originalTitle || originalTitle.length < 15) {
        return originalTitle;
    }

    return originalTitle.substring(0, 12) + '...';
};

export const buildProjectIdFilterString = projectIds => {
    const filterStr = projectIds.reduce((str, projectId, index) => {
        const shouldAddOr = index < projectIds.length - 1;
        const orStr = shouldAddOr ? `projectId:${projectId} OR ` : `projectId:${projectId}`;
        return str.concat(orStr);
    }, '');

    return filterStr;
};

export const stringToBoolean = str => {
    if (typeof str === 'boolean') {
        return str;
    }
    // default to true if value not populated
    if (str === null || str === undefined) {
        return true;
    }
    return (str && str.toLowerCase() === 'true');
};