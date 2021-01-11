import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MenuButton from "../../basic/components/menu/MenuButton.jsx";
import Menu from "../../basic/components/menu/Menu.jsx";
import counterpart from "counterpart";
import en from "./lang/en";
import uk from "./lang/uk";
import "./css/spacecraft.css";
import "./css/media_spacecraft.css";
import GraphicCost from "./components/graphics/GraphicCost.jsx";
import Description from "./components/description/Description.jsx";
import Loading from "../../basic/components/Loading.jsx";
import Error from "../../basic/components/Error.jsx";
import Rocket from "./components/comprasion/components/Rocket.jsx";
import Comprasion from "./components/comprasion/Comprasion.jsx";
import Footer from "../../basic/components/Footer.jsx";
import LanguageChange from "../../basic/components/LanguageChange.jsx";


counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);

const Spacecraft = ({ loadUp, data, loading, error }) => {
  let [menuOpenCheck, setMenuOpen] = useState(false);

  useEffect(() => {
    loadUp();
  }, []);

  let api_request = data ? data.data : [];

  function menuOpen() {
    setMenuOpen(!menuOpenCheck);
  }
  return (
    <div className="spacecraft">
      <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
      {menuOpenCheck && <Menu />}
      <LanguageChange />
      <div className="spacecraft-content">
        <div className="rocket-cost-graphic-box">
          {loading && !error && <GraphicCost data={data} />}
        </div>
        {loading && !error && <Description />}
      </div>
      {!loading && <Loading />}
      {loading && error && <Error />}
      {loading && !error && api_request && (
        <div className="comprasion">
          <Comprasion />
          <div className="comprasion-rocket-box">
            {api_request.map((point) => (
              <Rocket
                rocketName={point.rocket_name}
                costs={point.cost_per_launch}
                firstFlight={point.first_flight}
                country={point.country}
                successRate={point.success_rate_pct}
                height={point.height.meters}
                diameter={point.diameter.meters}
                mass={point.mass.kg}
                engines={point.engines.type}
                enginesVersion={point.engines.version}
                image={point.flickr_images[0]}
                key={point.rocket_id}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
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
  data: {},
  loading: false,
  error: false,
};

export default Spacecraft;
