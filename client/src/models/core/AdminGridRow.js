import GridRow from './GridRow';

class AdminGridRow extends GridRow {
    constructor(properties) {
        super(properties);
        this.isSelected = false;
        this.alt = properties.alt;
        this.caption = properties.caption;
    }

    static fromUploadRequests(requests) {
        return requests.map(req => new AdminGridRow({ ...req, ...req.context }));
    }
}

export default AdminGridRow;
