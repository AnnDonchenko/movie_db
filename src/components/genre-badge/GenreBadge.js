import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function GenreBadge({mainGenreName}) {
    return (
        <p className={'genre'}><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{mainGenreName}</span></p>
    );
}