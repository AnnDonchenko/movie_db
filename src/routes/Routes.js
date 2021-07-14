import {Route, Switch} from "react-router";
import TvList from "../components/tv-list/TvList";
import Home from "../components/home/Home";
import MovieDetails from "../components/movie-details/MovieDetails";
import Movies from "../components/movies/Movies";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/movies'} component={Movies}/>
            <Route path={'/tv'} component={TvList}/>
            <Route path={'/movies/:id'} component={MovieDetails}/>
        </Switch>
    );
}