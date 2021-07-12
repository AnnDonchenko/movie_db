import {Route, Switch} from "react-router";
import MoviesList from "../components/movies-list/MoviesList";
import GenresList from "../components/genres-list/GenresList";
import Home from "../components/home/Home";

export default function Routes (){
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/movies'} component={MoviesList}/>
            <Route path={'/genres'} component={GenresList}/>
        </Switch>
    );
}