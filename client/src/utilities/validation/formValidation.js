export const hasValidationErrors = (isValidObj) => {
    for (let key in isValidObj) {
        if (!isValidObj[key]) {
            return true;
        }
    }
    return false;
}

export const hasEmptyInputFields = (userObj) => {
    for (let key in userObj) {
        if (!userObj[key] || userObj[key].length === 0) {
            return true;
        }
    }
    return false;
}