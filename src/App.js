import "antd/dist/antd.css";
import "./App.css";
import MainPage from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import Productpage from "./product";
import { Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <dic>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<CloudDownloadOutlined />}
          >
            상품
          </Button>
        </div>
      </div>
      <div id="body">
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
      </div>
      <div id="footer"></div>
    </dic>
  );
}

export default App;
