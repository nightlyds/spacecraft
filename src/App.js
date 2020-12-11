import React from "react";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SpacecraftWrap from "./pages/spacecraft/SpacecraftWrap";
import ListWrap from './pages/list/ListWrap'
import Error_404 from "./basic/components/Error_404.jsx";
import "normalize.css";
import "animate.css";
import './basic/css/fonts_and_colors.css'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SpacecraftWrap} />
            <Route exact path="/list" component={ListWrap} />
            <Route component={Error_404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
