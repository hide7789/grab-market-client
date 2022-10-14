import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import Productpage from "./product";

function App() {
  return (
    <dic>
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route exact={true} path="/product/:id">
          <Productpage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </dic>
  );
}

export default App;
