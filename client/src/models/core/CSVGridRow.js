class CSVGridRow {
    constructor(properties) {
        // user input fields (specified in JNTO template)
        this.id = properties.id;
        this.filename = properties.filename;
        this.location = properties.location;
        this.prefecture = properties.prefecture;
        this.description = properties.description;
        this.photographer = properties.photographer;
        this.shootingDate = properties.shootingDate;
        this.from = properties.from;
        this.purchaseId = properties.purchaseId;
        this.validDate = properties.validDate;
        this.prePostApproval = properties.prePostApproval;
        this.secondaryUse = properties.secondaryUse; // keeping this for legacy purposes
        this.secondaryUseJNTO = properties.secondaryUseJNTO;
        this.secondaryUseMedia = properties.secondaryUseMedia;
        this.secondaryUseGovernment = properties.secondaryUseGovernment;
        this.trimming = properties.trimming;
        this.credit = properties.credit;
        this.rightOfPublicity = properties.rightOfPublicity;
        this.contact = properties.contact;

        // other fields (non user-input but good to see in CSV file)
        this.status = properties.status;
        this.notes = properties.notes;
        this.dataFileName = properties.dataFileName;
        this.projectId = properties.projectId;
    }

    static fromUploadRequests(requests) {
        return requests.map(req => new CSVGridRow({ ...req, ...req.context }));
    }
}

export default CSVGridRow;
