import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import 'react-dates/initialize';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import InstrumentBrowser from "./components/InstrumentBrowser";
import InstrumentDetail from "./components/InstrumentDetail";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
    .then(() => setIsLoaded(true));
  }, [dispatch])



  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/instruments">
            <InstrumentBrowser />
          </Route>
          <Route path="/instruments/:id">
            <InstrumentDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
