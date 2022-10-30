import { Link } from "react-router-dom";

function EnlaceNav({ to, nombre, className }) {
    return (
        <Link to={to} className={className + " select-none"}>
            {nombre}
        </Link>
    );
}

export default EnlaceNav;
