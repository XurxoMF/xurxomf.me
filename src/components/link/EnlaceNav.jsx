import { Link } from "react-router-dom";

function EnlaceNav({ to, nombre, className }) {
    return (
        <Link to={to} className={className}>
            {nombre}
        </Link>
    );
}

export default EnlaceNav;
