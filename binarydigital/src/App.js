import { BrowserRouter as Router, Route } from "react-router-dom"
import  Home  from "./Pages/Home"
import AirbnbCard from "./Components/AirbnbCard"
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <AirbnbCard />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/cart" component={Cart} /> */}
    </Router>
    
  );
}

export default App;
