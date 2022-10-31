import React from "react";
import IntroSpoti from "../components/secciones/IntroSpoti";
import ArtistasSpoti from "../components/secciones/ArtistasSpoti";
import EstadosAnimoSpoti from "../components/secciones/EstadosAnimoSpoti";
import GeneroTipoSpoti from "../components/secciones/GeneroTipoSpoti";

const Spotify = () => {
    return (
        <>
            <IntroSpoti />
            <ArtistasSpoti />
            <EstadosAnimoSpoti />
            <GeneroTipoSpoti />
        </>
    );
};

export default Spotify;
