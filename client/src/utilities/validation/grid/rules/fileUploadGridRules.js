export const validStringRule = (cellVal, isRequired = false) => {
    return cellVal && typeof cellVal === 'string' && cellVal.length > 0;
};

export const lettersOnlyRule = (cellVal) => {
    return cellVal && typeof cellVal === 'string' && /^[a-zA-Z]+$/.test(cellVal);
};

export const validBooleanRule = (cellVal) => {
    const isBooleanType = cellVal && typeof cellVal === 'boolean';
    const isBooleanStr = cellVal && (typeof cellVal === 'string' && (cellVal.toUpperCase() === 'FALSE' || cellVal.toUpperCase() === 'TRUE'));
    return isBooleanType || isBooleanStr;
};

export const numbersOnlyRule = (cellVal) => {
    return cellVal && (typeof cellVal === 'number' || /^\d+$/.test(cellVal));
};

export const alphaNumericsOnlyRule = (cellVal) => {
    return cellVal && /^[a-z0-9]+$/i.test(cellVal);
}

export const validDateRule = (cellVal) => {
    return cellVal && numbersOnlyRule(cellVal);
};

export const validEmailRule = (cellVal) => {
    return cellVal && /\S+@\S+\.\S+/.test(cellVal);
};

export const valueExistsRule = (cellVal) => {
    return cellVal && cellVal.length > 0;
};