import React from "react";

const IntroYTM = () => {
    return (
        <section className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-10 sm:gap-20 pb-16">
            <div className="flex flex-col gap-4 text-2xl sm:text-4xl">
                <h1>
                    <span className="font-bold text-xmf-pink">
                        <a href="https://music.youtube.com/playlist?list=PLcIQdu1Soy6tBVoWqKQaktK2GCD9pTNux" target={"_blank"} rel="noreferrer">
                            TOOODA MI MÚSICA{" "}
                        </a>
                    </span>
                    FAVORITA EN UN MISMO LUGAR,
                </h1>
                <h1>
                    EN MI
                    <span className="font-bold text-xmf-pink">
                        <a href="https://music.youtube.com/library/playlists" target={"_blank"} rel="noreferrer">
                            {" "}
                            CUENTA DE YOUTUBE MUSIC
                        </a>
                    </span>
                </h1>
            </div>
            <section className="md:text-2xl max-w-4xl flex flex-col gap-4">
                <p>Soy un fanático de la música, no puedo vivir si ella, y claro, como no podía ser de otra forma, tengo muuuchas playlist personalizadas a mi gusto.</p>
            </section>
        </section>
    );
};

export default IntroYTM;
