import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import MoonSVG from "../../assets/svg/MoonSVG";
import SunSVG from "../../assets/svg/SunSVG";

function BotonCambioTema() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            {theme === "dark" ? <SunSVG className={"w-6 h-6 fill-white hover:fill-xmf-pink"} /> : <MoonSVG className={"w-6 h-6 fill-black hover:fill-xmf-pink"} />}
        </button>
    );
}
export default BotonCambioTema;
