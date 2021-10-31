const showError = (formik, value) => formik.touched[value] && formik.errors[value];
const handleFileChange = (formik, files, key) => { formik.setFieldValue(key, files[0]) };

const handleCKEditorChange = (formik, editor, key) => {
    const data = editor.getData();
    formik.setFieldValue(key, data);
}
const handleCKEditorBlur = (formik, key) => {
    const touchedState = {...formik.touched};
    touchedState[key] = true;
    formik.setTouched(touchedState);
}

export {showError, handleCKEditorChange, handleCKEditorBlur, handleFileChange};
