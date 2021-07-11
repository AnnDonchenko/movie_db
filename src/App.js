import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes/>
        </Router>
    </div>
  );
}

export default App;
