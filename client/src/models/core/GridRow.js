import AssetUploadRequest from './AssetUploadRequest';
import { stringToBoolean } from '../../utilities/textUtils';
class GridRow {
    constructor(properties) {
        this.id = properties.id;
        this.fileAsString = properties.fileAsString;
        this.filename = properties.filename;
        this.originalFilename = this.originalFilename || properties.filename;
        this.userId = properties.userId;
        this.thumbnailUrl = properties.thumbnailUrl;
        this.location = properties.location;
        this.projectId = properties.projectId;
        this.prefecture = properties.prefecture;
        this.description = properties.description;
        this.photographer = properties.photographer;
        this.shootingDate = properties.shootingDate;
        this.from = properties.from;
        this.purchaseId = properties.purchaseId;
        this.validDate = properties.validDate;
        this.trimming = stringToBoolean(properties.trimming);
        this.prePostApproval = stringToBoolean(properties.prePostApproval);
        this.secondaryUse = stringToBoolean(properties.secondaryUse);
        this.secondaryUseJNTO = stringToBoolean(properties.secondaryUseJNTO);
        this.secondaryUseMedia = stringToBoolean(properties.secondaryUseMedia);
        this.secondaryUseGovernment = stringToBoolean(properties.secondaryUseGovernment);
        this.credit = properties.credit;
        this.rightOfPublicity = stringToBoolean(properties.rightOfPublicity);
        this.contact = properties.contact;
        this.copyrightHolder = properties.copyrightHolder;
        this.collectionName = properties.collectionName;
        this.contentfulId = properties.contentfulId;
        this.status = properties.status;
        this.notes = properties.notes;
        this.dataFileName = properties.dataFileName;
        this.bytes = properties.bytes;
        this.width = properties.width;
        this.height = properties.height;
        this.dimensions = properties.width + "," + properties.height;
    }

    static toUpdateRequests(gridRows) {
        const requests = gridRows.map(row => {
            const context = {
                location: row.location,
                prefecture: row.prefecture,
                projectId: row.projectId,
                region: row.region,
                description: row.description,
                photographer: row.photographer,
                shootingDate: row.shootingDate,
                from: row.from,
                purchaseId: row.purchaseId,
                validDate: row.validDate,
                secondaryUse: row.secondaryUse,
                secondaryUseJNTO: row.secondaryUseJNTO,
                secondaryUseMedia: row.secondaryUseMedia,
                secondaryUseGovernment: row.secondaryUseGovernment,
                trimming: row.trimming,
                prePostApproval: row.prePostApproval,
                copyrightHolder: row.copyrightHolder,
                credit: row.credit,
                contact: row.contact,
                collectionName: row.collectionName,
                contentfulId: row.contentfulId,
                rightOfPublicity: row.rightOfPublicity,
            };

            return new AssetUploadRequest({ ...row, context });
        });

        return requests;
    }

    static fromUploadRequests(requests) {
        return requests.map(req => new GridRow({ ...req, ...req.context }));
    }
};

export default GridRow;
