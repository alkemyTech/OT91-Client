const history = useHistory()

export const redirectTo = path => {
  history.push(path);
};
