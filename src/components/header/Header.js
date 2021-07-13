import {Link} from "react-router-dom";
import './Header.css';
import UserInfo from "./user-info/UserInfo";
import logo from './logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setThemeDark, setThemeLight} from "../../redux/actionCreators";

export default function Header() {
    const [navClass, setNavClass] = useState('hide');
    const navToggle = () => {
        navClass === 'hide' ? setNavClass('active') : setNavClass('hide')
    }
    const dispatch = useDispatch();
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="logo"/></Link>
                </div>
                <nav>
                    <button id={'nav-btn'} onClick={() => navToggle()}><FontAwesomeIcon icon={faBars}/></button>
                    <div className={'nav-list ' + navClass}>
                        <Link to={'/movies'} onClick={() => navToggle()}>movies list</Link>
                        <Link to={'/tv'} onClick={() => navToggle()}>tv list</Link>
                    </div>
                </nav>
                <div className={'theme-change'}>
                    <div className={'dark'} onClick={() => dispatch(setThemeDark())}></div>
                    <div className={'light'} onClick={() => dispatch(setThemeLight())}></div>
                </div>
                <div className="search">
                    <input type="text"/>
                    <button><FontAwesomeIcon icon={faSearch}/></button>
                </div>
                <UserInfo/>
            </div>
        </header>
    );
}