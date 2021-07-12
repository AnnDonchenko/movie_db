import userImg from './user.png';
import './UserInfo.css';

export default function UserInfo (){
    return (
        <div className={'user-info'}>
            <div><img src={userImg} alt="John"/></div>
            <div>Welcom John</div>
        </div>
    );
}