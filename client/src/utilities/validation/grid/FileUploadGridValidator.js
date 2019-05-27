import { validStringRule, validBooleanRule, validEmailRule, validDateRule, alphaNumericsOnlyRule } from './rules/fileUploadGridRules';
import ValidationResult from './ValidationResult';

class FileUploadGridValidator {
    constructor() {
        this.validationMap = {
            filename: {
                rule: validStringRule,
                required: true,
                errorMessage: 'File name must be entered correctly',
            },
            location: {
                rule: validStringRule,
                required: true,
                errorMessage: 'Location must be entered correctly'
            },
            prefecture: {
                rule: validStringRule,
                required: true,
                errorMessage: 'Prefecture must be entered correctly'
            },
            description: {
                rule: validStringRule,
                required: true,
                errorMessage: 'Description must be entered correctly'
            },
            photographer: {
                rule: validStringRule,
                required: false,
                errorMessage: 'Photographer must be entered correctly'
            },
            shootingDate: {
                rule: validDateRule,
                required: true,
                errorMessage: 'Shooting date must be entered correct in the format: YYYYMMDD'
            },
            from: {
                rule: validStringRule,
                required: false,
                errorMessage: 'From must be entered correctly'
            },
            purchaseId: {
                rule: alphaNumericsOnlyRule,
                required: false,
                errorMessage: 'Purchase ID must be entered correctly'
            },
            validDate: {
                rule: validDateRule,
                required: false,
                errorMessage: 'Valid date must be entered correctly in the format: YYYYMMDD'
            },
            prePostApproval: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Pre/post approval must be entered correctly as true or false'
            },
            secondaryUseJNTO: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Secondary Use must be entered correctly as true or false'
            },
            secondaryUseMedia: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Secondary Use must be entered correctly as true or false'
            },
            secondaryUseGovernment: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Secondary Use must be entered correctly as true or false'
            },
            trimming: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Trimming must be entered correctly as true or false'
            },
            credit: {
                rule: validStringRule,
                required: true,
                errorMessage: 'Credit must be entered correctly'
            },
            rightOfPublicity: {
                rule: validBooleanRule,
                required: true,
                errorMessage: 'Right of publicity must be entered correctly as true or false'
            },
            contact: {
                rule: validEmailRule,
                required: false,
                errorMessage: 'Contact must be entered correctly'
            }
        };
    }

    validate(fieldName, valueToValidate) {
        const validationMapItem = this.validationMap[fieldName];
        if (!validationMapItem) {
            return ValidationResult.DEFAULT;
        }

        if (!validationMapItem.required) {
            if (valueToValidate) {
                return new ValidationResult({
                    isValid: validationMapItem.rule(valueToValidate),
                    errorMessage: validationMapItem.errorMessage
                })
            }

            return ValidationResult.DEFAULT;
        }

        return new ValidationResult({
            isValid: validationMapItem.rule(valueToValidate),
            errorMessage: validationMapItem.errorMessage
        })
    }
}

export default new FileUploadGridValidator();
