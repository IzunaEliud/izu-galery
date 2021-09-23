import { BrowserRouter as Router , Route } from "react-router-dom"
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div id="base">
      <Router>
        <Nav/>
        <Route exact path="/">

        </Route>
      </Router>
    </div>
  );
}

export default App;
