import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={"/home"}>Home</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/admin"}>Go to Admin</Link>
        </div>
    );
}

export default Header;
