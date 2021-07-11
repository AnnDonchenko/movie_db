import {Route, Switch} from "react-router";
import MoviesList from "../components/movies-list/MoviesList";

export default function Routes (){
    return (
        <Switch>
            <Route path={'/movies'} component={MoviesList}/>
            <Route path={'/genres'} component={MoviesList}/>
        </Switch>
    );
}