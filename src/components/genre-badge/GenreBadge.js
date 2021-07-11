import {useEffect, useState} from "react";
import {getMovieGenre} from "../../services/MoviesAPI";

export default function GenreBadge ({id}){
    const [mainGenre, setMainGenre] = useState([]);
    console.log(id);
    useEffect(()=>{
        getMovieGenre().then(value => {
            let x = [...value.data.genres].filter(genre => genre.id === id[0]);
            setMainGenre(x[0].name);
        })
    },[])
    return (
        <div>
            <p>{mainGenre}</p>
        </div>
    );
}