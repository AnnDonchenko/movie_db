import {Link} from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to={'/movies'}>movies list</Link>
                    <Link to={'/genres'}>genres list</Link>
                </nav>
            </div>
        </header>
    );
}