import React from "react";
import { useCookies } from "react-cookie";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store/store.js";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import counterpart from "counterpart";
import SpacecraftWrap from "./pages/spacecraft/SpacecraftWrap";
import LaunchesWrap from "./pages/launches/LaunchesWrap";
import About from "./pages/about/About.jsx";
import Error404 from "./basic/components/Error404.jsx";
import "normalize.css";
import "animate.css";
import "./basic/css/fonts_and_colors.css";

function App() {
  const [cookies, setCookie] = useCookies(["language"]);

  if(cookies.language === "EN"){
    counterpart.setLocale("en");
  }else if(cookies.language === "UK"){
    counterpart.setLocale("uk");
  }
  return (
    <div className="App">
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={SpacecraftWrap} />
              <Route exact path="/launches" component={LaunchesWrap} />
              <Route exact path="/about" component={About} />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
