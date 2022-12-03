import React from "react";

const PlaylistsYTM = () => {
    const playlists = [
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6vjBsWFwb9Fd-a20ONG_oAO",
            nombre: "🔥Top🔥",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6swlFyw_QcRsWicuSAl1HVK",
            nombre: "💮Nightcore💮",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6twuQPB-45kvdccHSmxjL1L",
            nombre: "🚗Conducir🚗",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6t97tze8Hn3L_KNNtb6HFxd",
            nombre: "💔SAD💔",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6tDhKQzxubQZkIOYEHKqqWq",
            nombre: "🌠Relax🌠",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6sXylyJY_vjT4fk8PjC3Yxb",
            nombre: "🔰2005-2015🔰",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6tTMWZ2mxdjARnKnq9qfBN1",
            nombre: "🎑Lo-fi & Chill🎑",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6u8sr8pyEpHhx7x5SqNCpAS",
            nombre: "💦Isak Danielson💦",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6sLMB-YCqlBIOt_ItBG8FSB",
            nombre: "🎊Kawaii🎊",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6s1kqlLIzsdVIUiFE-CqOK_",
            nombre: "💟Anime & Japo💟",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6u764YKdJgDmIAzMv1fjopI",
            nombre: "💗Teflon Sega💗",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6v4CXH8a6cnBFzsmpvqxmLP",
            nombre: "🔥Lil Nas X🔥",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6tOdfXMb40wbRYdnsK8HJPg",
            nombre: "🖤Tate McRae🖤",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6txDSexJNGTqT0YKTq9wvBR",
            nombre: "🍀Billie Eilish🍀",
        },
        {
            titulo: "https://www.youtube.com/embed/videoseries?list=PLcIQdu1Soy6sMihWIfSLkEcUWELysSX-k",
            nombre: "🎐Eve Utaite🎐",
        },
    ];

    return (
        <section className="w-full pb-36">
            <h1 className="pb-12 text-center font-bold text-2xl lg:text-3xl">PLAYLISTS</h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-8 items-center lg:justify-center lg:items-start">
                {playlists.map((playlist) => (
                    <section className="bg-xmf-dark-blue dark:bg-opacity-5 dark:bg-xmf-light-white bg-opacity-5 border border-xmf-dark-blue dark:border-xmf-light-white dark:border-opacity-10 border-opacity-10 rounded-2xl shadow-xl w-full max-w-lg lg:self-stretch p-2 text-center">
                        <h2 className="text-2xl mb-2">{playlist.nombre}</h2>
                        <iframe
                            className="rounded-xl w-full aspect-video"
                            src={playlist.titulo}
                            title={playlist.titulo}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default PlaylistsYTM;
