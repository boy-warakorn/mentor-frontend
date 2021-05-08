import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./view/home";
import Login from "./view/login";
import Register from "./view/register";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
