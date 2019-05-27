class CreateOrganizationRequest {
    constructor(properties) {
        this.organizationName = properties.organizationName;
        this.supervisorOrganizationId = properties.supervisorOrganizationId;
        this.userGroupName = properties.userGroupName;
        this.projectIds = properties.projectIds;
    }
}

export default CreateOrganizationRequest;
