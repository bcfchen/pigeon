import AssetUploadContext from "./AssetUploadContext";

class AssetUploadRequest {
    constructor(properties) {
        if (!properties) { return; }
        this.id = properties.id;
        this.fileAsString = properties.fileAsString;
        this.filename = properties.filename;
        this.originalFilename = this.originalFilename || properties.filename;
        this.userId = properties.userId;
        this.dataFileName = properties.dataFileName;
        this.thumbnailUrl = properties.thumbnailUrl;
        this.folderId = properties.folderId;
        this.context = new AssetUploadContext(properties.context);
    }

    setContext(context) {
        Object.assign(this.context, context);
    }

    setDataFileName(dataFileName) {
        this.dataFileName = dataFileName;
    }

    setThumbnailUrl (url) {
        this.thumbnailUrl = url;
    }
}

export default AssetUploadRequest;
