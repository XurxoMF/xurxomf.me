import React from "react";

const EstadosAnimoSpoti = () => {
    const artistas = ["https://open.spotify.com/embed/playlist/5TaMR78sOpY0rJvZB95KLB?utm_source=generator", "https://open.spotify.com/embed/playlist/5v0zcOOp5D24WjHMMveQam?utm_source=generator"];

    return (
        <section className="w-full pb-36">
            <h1 className="pb-12 text-center font-bold text-2xl lg:text-3xl">😿 ÁNIMO 😿</h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center lg:justify-center lg:items-start">
                {artistas.map((artista) => (
                    <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-lg lg:self-stretch p-2 text-center">
                        <iframe
                            className="rounded-xl"
                            src={artista}
                            width="100%"
                            height="230"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default EstadosAnimoSpoti;
