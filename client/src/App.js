import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import ContactsPage from "./components/ContactsPage";
import ErrorPage from "./components/errorpage";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Link to={{ pathname: "/ContactsPage" }}>
              <button type="button" className="principal">
                CONTACT LIST
              </button>
            </Link>
            <br />
            <Link to={{ pathname: "/AddContact" }}>
              <button type="button" className="principal">
                ADD A NEW CONTACT
              </button>
            </Link>
          </div>
        </Route>
        <Route exact path="/ContactsPage/" component={ContactsPage} />
        <Route
          exact
          path={["/AddContact", "/edit/:id"]}
          component={AddContact}
        />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
