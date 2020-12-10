const loadingAction = (value) => {
  return {
    type: "LOADING",
    loading: value,
  };
};

export default loadingAction;
