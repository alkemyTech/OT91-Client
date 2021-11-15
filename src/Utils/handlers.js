const showError = (formik, value) =>
  formik.touched[value] && formik.errors[value];

const handleFileChange = (formik, files, key) => {
  formik.setFieldValue(key, files[0]);
};
const changeTouchedState = (formik, key) => {
  const touchedState = { ...formik.touched };
  touchedState[key] = true;
  formik.setTouched(touchedState);
};

const handleCKEditorChange = (formik, editor, key) => {
  const data = editor.getData();
  formik.setFieldValue(key, data);
};

const handleCKeditorForm = (editor, key, fn, state) => {
  const data = editor.getData();
  fn({ ...state, [key]: data });
};

const deleteActivity = (id, state) => {
  const newData = state?.filter((item) => item.id !== id);
  return newData;
};

export {
  showError,
  handleCKEditorChange,
  handleFileChange,
  changeTouchedState,
  handleCKeditorForm,
  deleteActivity,
};
