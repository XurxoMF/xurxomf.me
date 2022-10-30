import React from "react";
import GitHubSVG from "../../assets/svg/GitHubSVG";
import SpotifySVG from "../../assets/svg/SpotifySVG";
import DiscordSVG from "../../assets/svg/DiscordSVG";
import CopyToClipboard from "react-copy-to-clipboard";

const Footer = () => {
    const redes = [
        { to: "https://github.com/XurxoMF", icono: GitHubSVG },
        { to: "https://open.spotify.com/user/prbo3g78pqe2ea0162jryhojs?si=5e11210aa71047a5", icono: SpotifySVG },
        { to: "https://discord.gg/ZvB55s4", icono: DiscordSVG },
    ];

    const [copiado, setCopiado] = React.useState(false);

    return (
        <footer className="p-8 flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-8 lg:gap-0 lg:w-full lg:flex-row lg:justify-evenly lg:border-y border-xmf-pink py-8">
                <section>
                    <p className="text-xl font-bold border-b-2 border-xmf-pink">Contáctame</p>
                    <CopyToClipboard
                        text="xurxolaxe@gmail.com"
                        onCopy={() => {
                            setCopiado(true);
                            setTimeout(() => {
                                setCopiado(false);
                            }, 3000);
                        }}
                    >
                        <p className="relative text-lg cursor-pointer px-2 hover:text-xmf-pink">
                            xurxolaxe@gmail.com <span className={(copiado ? "absolute" : "hidden") + " -right-5"}>✅</span>
                        </p>
                    </CopyToClipboard>
                </section>
                <section>
                    <p className="text-xl font-bold border-b-2 border-xmf-pink mb-2">Redes Sociales</p>
                    <div className="flex gap-4 px-2 justify-center">
                        {redes.map((red) => (
                            <a href={red.to} target="_blank" rel="noreferrer">
                                <red.icono className={"w-7 h-7 fill-black dark:fill-white hover:fill-xmf-pink dark:hover:fill-xmf-pink"} />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <p className="text-sm">Copyright &copy; 2022 - Xurxo Martínez</p>
        </footer>
    );
};

export default Footer;
