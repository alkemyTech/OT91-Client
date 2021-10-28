const regExp = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    password: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{6,}$/i
};

const validValue = (regExp, value) => !regExp.test(value);
const notHasValue = (values, key) => !values[key];

const errorRequired = (values,errors,key) => {
    if(notHasValue(values, key)){
        errors[key] = 'Dato Obligatorio';
        return true;
    }
    return false;
};


export {regExp, validValue, errorRequired, notHasValue};
