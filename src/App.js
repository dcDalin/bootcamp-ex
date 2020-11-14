import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import CustomersPage from "./components/CustomersPage";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/customers" component={CustomersPage} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
