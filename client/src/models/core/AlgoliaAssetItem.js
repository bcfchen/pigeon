class AlgoliaAssetItem {
    constructor(properties) {
        this.thumbnailUrl = properties.thumbnailUrl;
        this.publicId = properties.public_id;
        this.description = properties.description;
        this.resourceType = properties.resource_type;
        this.format = properties.format;
        this.fileSizeInMB = Math.round(properties.bytes / 1000000 * 100) / 100;
        this.tags = properties.tags;
        this.width = properties.width;
        this.height = properties.height;
        this.orientation = properties.orientation;
        this.secureUrl = properties.secureUrl;
        this.context = properties.context;
    }
}

export default AlgoliaAssetItem;