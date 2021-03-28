import "./App.css";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import Home from "./components/Dashboard/Home";
import Devices from "./components/Device/Devices";
import { dummyData } from "./dummyData";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      {dummyData.map((device, i) => (
        <Link to={"devices/" + device.id} key={i} />
      ))}
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/devices/:id" component={Devices}></Route>
      </Switch>
    </div>
  );
}

export default App;
