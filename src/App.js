// import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/ui/Header/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import SectionFooter from "./components/ui/Footer/FooterComp";

function App() {
  return (
    <div className="body">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <SectionFooter />
    </div>
  );
}

export default App;
