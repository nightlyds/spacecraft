function mapStateToProps(component) {
  switch (component) {
    case "SPACECRAFT":
      return function (state) {
        return {
          data: state.dataReducer,
          loading: state.loadingReducer,
          error: state.errorReducer
        };
      };
    default:
      return undefined;
  }
}

export default mapStateToProps;
