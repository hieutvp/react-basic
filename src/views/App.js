import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./Navigation/NavigationBar";
import Home from "./Home";
import ListUsers from "./Users/ListUsers";
import DetailUser from "./Users/DetailUser";
import Jobs from "./Jobs/Jobs";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
/**
 * @returns 2 components: class component và function component (function, arrow function)
 * JSX
 */
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo" exact>
              <ListTodo />
            </Route>
            <Route path="/job" exact>
              <Jobs />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          {/* <ListTodo /> */}
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
