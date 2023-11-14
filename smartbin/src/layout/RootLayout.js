import { NavLink, Outlet } from "react-router-dom";
import '../style/RootLayout.css';

const RootLayout = () => {
    return(
        <main>
            <div>
                <p>Logo Here</p>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/checkPoints'>Points</NavLink>
                    <NavLink to='/tutorial'>Tutorial</NavLink>
                    <NavLink to='/admin'>Admin</NavLink>
                </div>
            </div>
            <Outlet/>
        </main>
    );
};

export default RootLayout;