import {Route, Switch} from "react-router";
import MoviesList from "../components/movies-list/MoviesList";
import TvList from "../components/tv-list/TvList";
import Home from "../components/home/Home";
import MovieDetails from "../components/movie-details/MovieDetails";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/movies'} component={MoviesList}/>
            <Route path={'/tv'} component={TvList}/>
            <Route path={'/movies/:id'} component={MovieDetails}/>
        </Switch>
    );
}