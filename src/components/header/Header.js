import {Link} from "react-router-dom";
import './Header.css';
import UserInfo from "./user-info/UserInfo";
import logo from './logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function Header() {
    const [navClass, setNavClass] = useState('hide');
    const navToggle = () => {
        navClass === 'hide' ? setNavClass('active') : setNavClass('hide')
    }
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="logo"/></Link>
                </div>
                <nav>
                    <button id={'nav-btn'} onClick={()=>navToggle()}><FontAwesomeIcon icon={faBars} /></button>
                    <div className={'nav-list ' + navClass}>
                        <Link to={'/movies'} onClick={()=>navToggle()}>movies list</Link>
                        <Link to={'/tv'} onClick={()=>navToggle()}>genres list</Link>
                    </div>
                </nav>
                <div className="search">
                    <input type="text"/>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <UserInfo/>
            </div>
        </header>
    );
}