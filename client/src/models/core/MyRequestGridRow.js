import GridRow from "./GridRow";

class MyRequestGridRow extends GridRow {
    constructor(properties) {
        super(properties);
        this.alt = properties.alt;
        this.caption = properties.caption;
    }

    static fromUploadRequests(requests) {
        return requests.map(req => new MyRequestGridRow({ ...req, ...req.context }));
    }
}

export default MyRequestGridRow;
