import { useState } from "react";
import Logo from "./Logo";
import BotonCambioTema from "../botones/BotonCambioTema";
import Nav from "../nav/Nav";
import MenuSVG from "../../assets/svg/MenuSVG";

function Header() {
    const [navMob, setNavMob] = useState(false);

    return (
        <>
            <header className="relative w-full h-16 px-8 flex justify-between items-center">
                <Logo />
                <Nav tipo={"header"} />
                <div className="absolute right-8 flex gap-4 sm:gap-8">
                    <BotonCambioTema />
                    <button onClick={() => setNavMob(navMob ? false : true)} className="lg:hidden">
                        <MenuSVG
                            className={
                                "w-6 h-6 hover:fill-xmf-pink dark:hover:fill-xmf-pink transition-[transform] ease-in-out duration-500" +
                                (navMob ? " rotate-[135deg] fill-xmf-pink" : " fill-black dark:fill-white")
                            }
                        />
                    </button>
                </div>
            </header>
            <Nav tipo={"mobile"} open={navMob} />
        </>
    );
}

export default Header;
