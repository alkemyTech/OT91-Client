export const showDate = date => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
export const createNewsObject = (name, image, createdAt) => ({name, image, createdAt});
