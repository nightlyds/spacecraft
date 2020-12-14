import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MenuButton from "../../basic/components/menu/MenuButton.jsx";
import Menu from "../../basic/components/menu/Menu.jsx";
import counterpart from "counterpart";
import en from "./lang/en";
import uk from "./lang/uk";
import "./css/launches.css";
import "./css/media_launches.css";
import Loading from "../../basic/components/Loading.jsx";
import Error from "../../basic/components/Error.jsx";
import Footer from "../../basic/components/Footer.jsx";
import LanguageChange from "../../basic/components/LanguageChange.jsx";
import LaunchesList from "./components/launchesList/LaunchesList.jsx";
import LaunchesDefault from "./components/launchesList/LaunchesDefault.jsx";
import OneLaunch from "./components/oneLaunch/OneLaunch.jsx";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);

const Launches = ({
  loadUpLaunches,
  loadUpOneLaunch,
  oneLaunch,
  launches,
  loading,
  error,
}) => {
  let [menuOpenCheck, setMenuOpen] = useState(false);
  let [oneLaunchOpenCheck, setOneLaunchOpen] = useState(false);

  useEffect(() => {
    loadUpLaunches();
  }, []);

  function menuOpen() {
    setMenuOpen(!menuOpenCheck);
  }

  function oneLaunchOpen(launch) {
    setOneLaunchOpen(!oneLaunchOpenCheck);
    if (launch) {
      loadUpOneLaunch(launch);
    }
  }
  return (
    <div className="launches">
      {oneLaunchOpenCheck && (
        <OneLaunch launch={oneLaunch} oneLaunchClose={oneLaunchOpen} />
      )}
      <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
      {menuOpenCheck && <Menu />}
      <LanguageChange />
      <div className="launches-content">
        <div className="launches-list-box">
          {loading && !error && <LaunchesDefault />}
          {loading && !error && (
            <LaunchesList launches={launches} oneLaunchOpen={oneLaunchOpen} />
          )}
        </div>
      </div>
      {!loading && <Loading />}
      {loading && error && <Error />}
      <Footer />
    </div>
  );
};

Launches.propTypes = {
  loadUpLaunches: PropTypes.func,
  loadUpOneLaunch: PropTypes.func,
  oneLaunch: PropTypes.object,
  launches: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

Launches.defaultProps = {
  loadUpLaunches: () => {},
  loadUpOneLaunch: () => {},
  oneLaunch: {},
  launches: {},
  loading: false,
  error: false,
};

export default Launches;
