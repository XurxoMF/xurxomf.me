import { paginas } from "../../data/subPages";
import EnlaceNav from "../link/EnlaceNav";

function Nav({ tipo, open, setOpen }) {
    return (
        <>
            {tipo === "header" ? (
                /* Nav para pc, dentro de nav */
                <nav className="w-full hidden lg:flex justify-center gap-6">
                    {paginas.map((e) => (
                        <EnlaceNav to={e.to} nombre={e.name} key={e.name} setOpen={setOpen} className="relative text-lg m-4 hover:text-xmf-pink border-b-2 border-xmf-pink" />
                    ))}
                </nav>
            ) : (
                /* Nav para teléfonos */
                <nav className={"w-full flex flex-col items-center gap-2 lg:hidden " + (open ? "relative" : "hidden")}>
                    {paginas.map((e) => (
                        <EnlaceNav to={e.to} nombre={e.name} key={e.name} setOpen={setOpen} className="text-lg border-b-2 border-xmf-pink hover:text-xmf-pink" />
                    ))}
                </nav>
            )}
        </>
    );
}

export default Nav;
