class AssetUploadContext {
    constructor(properties) {
        if (!properties) { return; }

        this.location = properties.location;
        this.prefecture = properties.prefecture;
        this.projectId = properties.projectId;
        this.description = properties.description;
        this.alt = properties.alt;
        this.caption = properties.caption;
        this.photographer = properties.photographer;
        this.shootingDate = properties.shootingDate;
        this.from = properties.from;
        this.purchaseId = properties.purchaseId;
        this.validDate = properties.validDate;
        this.secondaryUse = properties.secondaryUse;
        this.secondaryUseJNTO = properties.secondaryUseJNTO;
        this.secondaryUseMedia = properties.secondaryUseMedia;
        this.secondaryUseGovernment = properties.secondaryUseGovernment;
        this.trimming = properties.trimming;
        this.prePostApproval = properties.prePostApproval;
        this.copyrightHolder = "Japan National Tourism Organization";//properties.copyrightHolder;
        this.credit = properties.credit;
        this.collectionName = "Global Campaign 2018";//properties.collectionName;
        this.contentfulId = properties.contentfulId;
        this.rightOfPublicity = properties.rightOfPublicity;
        this.contact = properties.contact;
    }
}

export default AssetUploadContext;
