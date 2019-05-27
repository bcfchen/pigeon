class CreateAdvancedUserRequest {
    constructor(properties) {
        this.firstName = properties.firstName;
        this.lastName = properties.lastName;
        this.email = properties.email;
        this.attributes = {
            phoneNumber: properties.phoneNumber
        };
        this.organizationId = properties.organizationId;
    }
}

export default CreateAdvancedUserRequest;