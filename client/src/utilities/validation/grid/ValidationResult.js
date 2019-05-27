class ValidationResult {
    constructor(properties) {
        this.isValid = properties.isValid;
        this.errorMessage = properties.errorMessage;
    }

    getIsValid() {
        return this.isValid;
    }

    getErrorMessage() {
        return this.errorMessage;
    }

    static DEFAULT = new ValidationResult({ isValid: true, errorMessage: undefined });
}

export default ValidationResult;
