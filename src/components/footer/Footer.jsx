import React from "react";
import GitHubSVG from "../../assets/svg/GitHubSVG";
import SpotifySVG from "../../assets/svg/SpotifySVG";
import DiscordSVG from "../../assets/svg/DiscordSVG";

const Footer = () => {
    const redes = [
        { to: "https://github.com/XurxoMF", icono: GitHubSVG },
        { to: "https://open.spotify.com/user/prbo3g78pqe2ea0162jryhojs?si=5e11210aa71047a5", icono: SpotifySVG },
        { to: "https://discord.gg/ZvB55s4", icono: DiscordSVG },
    ];

    return (
        <footer className="p-8 flex flex-col items-center gap-8 text-center">
            <section>
                <p className="text-xl font-bold border-b-2 border-xmf-pink">Contáctame</p>
                <p className="text-lg cursor-pointer px-2">xurxolaxe@gmail.com</p>
            </section>
            <section>
                <p className="text-xl font-bold border-b-2 border-xmf-pink mb-2">Redes Sociales</p>
                <div className="flex gap-4 px-2">
                    {redes.map((red) => (
                        <a href={red.to} target="_blank" rel="noreferrer">
                            <red.icono className={"w-7 h-7 fill-black dark:fill-white hover:fill-xmf-pink dark:hover:fill-xmf-pink"} />
                        </a>
                    ))}
                </div>
            </section>
            <p className="text-sm">Copyright &copy; 2022 - Xurxo Martínez</p>
        </footer>
    );
};

export default Footer;
