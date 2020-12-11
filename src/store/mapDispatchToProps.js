import { bindActionCreators } from "redux";
import loadUpAction from "./actionCreators/loadUpAction";
import loadUpLaunchesAction from "./actionCreators/loadUpLaunchesAction";
import loadUpOneLaunchAction from "./actionCreators/loadUpOneLaunchAction";

function mapDispatchToProps(component) {
  switch (component) {
    case "SPACECRAFT":
      return function (dispatch) {
        return {
          loadUp: bindActionCreators(loadUpAction, dispatch),
        };
      };
    case "LIST":
      return function (dispatch) {
        return {
          loadUpLaunches: bindActionCreators(loadUpLaunchesAction, dispatch),
          loadUpOneLaunch: bindActionCreators(loadUpOneLaunchAction, dispatch),
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
