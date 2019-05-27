const emailValidator = (email) => {
    const emailAddressRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailAddressRegex.test(email);
};

const passwordValidator = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&><_=~^#,.;:|/])[A-Za-z\d@$.!%*?&><_=~^#,;:|/]{12,}$/;
    return passwordRegex.test(password);
};

const verificationCodeValidator = (code) => {
    const codeRegex = /^[0-9]{6}$/;
    return codeRegex.test(code);
};

const phoneNumberValidator = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]+$/;
    return phoneNumberRegex.test(phoneNumber);
}

const nameValidator = (name) => {
    const nameRegex = /^[A-Za-z\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+$/;
    return nameRegex.test(name);
}

const genericNameValidator = (projectName) => {
    const nameRegex = /^[0-9A-Za-z\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf\s,.'-_]+$/;
    return nameRegex.test(projectName);
}

export default {
    email: emailValidator,
    password: passwordValidator,
    name: nameValidator,
    verificationCode: verificationCodeValidator,
    phoneNumber: phoneNumberValidator,
    genericName: genericNameValidator
};