import { Link } from "react-router-dom";

function EnlaceNav({ to, nombre, className, setOpen }) {
    return (
        <Link to={to} className={className + " select-none"} onClick={() => setOpen(false)}>
            {nombre}
        </Link>
    );
}

export default EnlaceNav;
