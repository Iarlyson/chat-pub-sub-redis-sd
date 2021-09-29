import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
 import Chat from "./page/Chat";
 import Index from "./page/Index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Chat" component={Chat} />
        <Route path="/Index" component={Index} />
        <Route exact path="/">
          <Redirect to="/Index" />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
