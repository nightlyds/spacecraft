import List from "./List.jsx";
import { connect } from "react-redux";
import mapStateToProps from "../../store/mapStateToProps";
import mapDispatchToProps from "../../store/mapDispatchToProps";

const ListWrap = connect(
  mapStateToProps("LIST"),
  mapDispatchToProps("LIST")
)(List);

export default ListWrap;