const regExp = {
    url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
}
const isObject = value => typeof(value) === 'object';
const isFile = file => isObject(file) && file.name && file.size;
const isValidValue = (regExp, value) => regExp.test(value);
const isValidFile = (acceptTypes, file) => isFile(file) && acceptTypes.some(acceptType => file.type === acceptType);
const notHasValue = (values, key) => !values[key];

const validateRequiredValues = (values, errors, requiredValues) => {
    const requiredKeys = Object.keys(requiredValues);
    requiredKeys.forEach(value => hasRequiredError(values, errors, value));
}

const hasRequiredError = (values,errors,key) => {
    if(notHasValue(values, key)){
        errors[key] = 'Dato Obligatorio';
        return true;
    }
    return false;
};


export {regExp, isValidValue, isValidFile, isFile, hasRequiredError, notHasValue, validateRequiredValues};
