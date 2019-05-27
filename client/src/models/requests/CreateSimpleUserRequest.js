const SIMPLE_USER_ORGANIZATION_ID = 21;
class CreateSimpleUserRequest {
    constructor(properties) {
        this.firstName = properties.firstName;
        this.lastName = properties.lastName;
        this.email = properties.email;
        this.id = properties.id;
        this.organizationId = SIMPLE_USER_ORGANIZATION_ID;
    }
}

export default CreateSimpleUserRequest;