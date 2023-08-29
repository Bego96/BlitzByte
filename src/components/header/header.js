import Menu from '../menu/Menu';
import Navigation from '../navigation/navigation';

function Header (props) {


    return (
        <header>
            <Navigation setAside={props.setAside} showAside={props.showAside}/>
        </header>
    )
};

export default Header;