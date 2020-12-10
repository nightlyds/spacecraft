import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MenuButton from "./components/menu/MenuButton.jsx";
import Menu from "./components/menu/Menu.jsx";
import counterpart from "counterpart";
import en from "./lang/en";
import uk from "./lang/uk";
import "./css/spacecraft.css";
import "./css/media_spacecraft.css";
import GraphicCost from "./components/graphics/GraphicCost.jsx";
import Description from "./components/description/Description.jsx";
import Loading from '../../basic/components/Loading.jsx';
import Error from '../../basic/components/Error.jsx';

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);
counterpart.setLocale("en");

const Spacecraft = ({ loadUp, data, loading, error}) => {
  let [menuOpenCheck, setMenuOpen] = useState(false);
  useEffect(() => {
    loadUp();
  }, []);
  function menuOpen() {
    setMenuOpen(!menuOpenCheck);
  }
  return (
    <div className="spacecraft">
      <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
      {menuOpenCheck && <Menu />}
      <div className="spacecraft-content">
        {loading && !error && <GraphicCost data={data} />}
        {loading && !error && <Description />}
        {!loading && <Loading />}
        {loading && error && <Error />}
      </div>
    </div>
  );
};

Spacecraft.propTypes = {
  loadUp: PropTypes.func,
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

Spacecraft.defaultProps = {
  loadUp: () => {},
  data: [],
  loading: false,
  error: false,
};

export default Spacecraft;
