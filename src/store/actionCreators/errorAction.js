const errorAction = (value) => {
    return {
      type: "ERROR",
      error: value,
    };
  };
  
  export default errorAction;
  