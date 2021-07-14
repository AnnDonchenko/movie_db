import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";
import {useSelector} from "react-redux";
import GenresList from "./components/genres-list/GenresList";

function App() {

    const {theme} = useSelector(state => state.moviesReducer);
    return (
        <div className={"App " + theme}>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
