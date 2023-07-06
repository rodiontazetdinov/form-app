import { NavLink } from "react-router-dom";
// const isActive = true;
const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink 
                to="/insight"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                }
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#075BFD" : "#969AA3",
                    };
                }}
            >инсайт</NavLink>
            <NavLink 
                to="/nameconcept"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                }
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#075BFD" : "#969AA3",
                    };
                }}
            >нейминг и концепция</NavLink>
            <NavLink 
                to="/visual"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
                }
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#075BFD" : "#969AA3",
                    };
                }}
            >визуал</NavLink>
            <NavLink 
                to="/presentation"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "#969AA3" : ""
                }
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "#075BFD" : "#969AA3",
                    };
                }}
            >презентация</NavLink>
        </nav>
    )
}

export default Navbar;