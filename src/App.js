import { BrowserRouter as Router , Route } from "react-router-dom"
import Nav from "./components/Nav";
import './App.css';
import SeachBar from "./components/SeachBar";
import ItemPhoto from "./components/ItemPhoto";
import Footer from "./components/Footer";
import ImageSave from "./components/ImageSave";

function App() {
  return (
    <div id="base">
      <Router>
        <Nav/>
        <Route exact path="/">
          <SeachBar />
          <ItemPhoto/>
        </Route>
        <Route exact path="/add-img">
          <ImageSave/>
        </Route>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
