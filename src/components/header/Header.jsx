import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
        <NavLink to={"/"}>
            <div className="left">
                1
            </div>
            <div className="right">
                <div className="top">
                    STEP 1
                </div>
                <div className="bottom">
                    your info
                </div>
            </div>
        </NavLink>
        <NavLink to={"/step2"}>
            <div className="left">
                2
            </div>
            <div className="right">
                <div className="top">
                    STEP 2
                </div>
                <div className="bottom">
                    select plan
                </div>
            </div>
        </NavLink>
        <NavLink to={"/step3"}>
            <div className="left">
                3
            </div>
            <div className="right">
                <div className="top">
                    STEP 3
                </div>
                <div className="bottom">
                    add-ons
                </div>
            </div>
        </NavLink>
        <NavLink to={"/step4"}>
            <div className="left">
                4
            </div>
            <div className="right">
                <div className="top">
                    STEP 4
                </div>
                <div className="bottom">
                    summary
                </div>
            </div>
        </NavLink>
    </header>
  )
}

export default Header