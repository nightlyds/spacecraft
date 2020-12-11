import Launches from "./Launches.jsx.js";
import { connect } from "react-redux";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const LaunchesWrap = connect(
  mapStateToProps("LAUNCHES"),
  mapDispatchToProps("LAUNCHES")
)(Launches);

export default LaunchesWrap;