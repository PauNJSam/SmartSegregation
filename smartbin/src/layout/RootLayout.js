import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.png";

const RootLayout = () => {
    return(
        <main>
            <div className="RootLayout">
                <img src={logo} width="50px"/>
                <div className="navs">
                    <div className="nav-element"><NavLink to='/'>Home</NavLink></div>
                    <div className="nav-element"><NavLink to='/checkPoints'>Points</NavLink></div>
                    <div className="nav-element"><NavLink to='/tutorial'>Tutorial</NavLink></div>
                    <div className="nav-element"><NavLink to='/admin'>Admin</NavLink></div>
                </div>
            </div>
            <Outlet/>
        </main>
    );
};

export default RootLayout;