import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import InstrumentBrowser from "./components/InstrumentBrowser";
import InstrumentDetail from "./components/InstrumentDetail";
import MyRentals from "./components/MyRentals";
import ReviewForm from "./components/MyRentals/ReviewForm";
import Footer from "./components/Navigation/Footer";


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
          <Route path="/myrentals">
            <MyRentals />
          </Route>
          <Route path="/addreview/:id">
            <ReviewForm />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
