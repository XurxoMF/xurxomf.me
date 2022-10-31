import React from "react";

const GeneroTipoSpoti = () => {
    const artistas = [
        "https://open.spotify.com/embed/playlist/6LwdQstuBIz7tJPoyggRSt?utm_source=generator",
        "https://open.spotify.com/embed/playlist/15FaPAUQJ3K02M6GZGqYCa?utm_source=generator",
        "https://open.spotify.com/embed/playlist/11qPOJNYjkRsOut5RtlF7I?utm_source=generator",
        "https://open.spotify.com/embed/playlist/4pnskbzr0FwY2D1JCFHd0r?utm_source=generator",
        "https://open.spotify.com/embed/playlist/6WtOIlJ5yTJziMnjPOw9fq?utm_source=generator",
        "https://open.spotify.com/embed/playlist/7kzAlnOp5sxgDDbxCViH6T?utm_source=generator",
        "https://open.spotify.com/embed/playlist/1fgZF6BteovJ1MRyoepL5g?utm_source=generator",
    ];

    return (
        <section className="w-full pb-36">
            <h1 className="pb-12 text-center font-bold text-2xl lg:text-3xl">💎 TIPO 💎</h1>
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

export default GeneroTipoSpoti;
