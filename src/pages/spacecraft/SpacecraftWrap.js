import Spacecraft from "./Spacecraft.jsx";
import { connect } from "react-redux";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const SpacecraftWrap = connect(
  mapStateToProps("SPACECRAFT"),
  mapDispatchToProps("SPACECRAFT")
)(Spacecraft);

export default SpacecraftWrap;