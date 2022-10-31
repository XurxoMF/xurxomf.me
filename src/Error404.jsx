import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Error404 = () => {
    return (
        <div className="w-full overflow-x-hidden bg-xmf-light-white dark:bg-xmf-dark-blue text-black dark:text-white text-lg font-xmf-font">
            <div className="relative m-auto w-full min-h-screen max-w-screen-xl text-center">
                <Header />
                <main className="w-full min-h-[calc(100vh-4rem)] pb-8 mb-8 flex flex-col items-center justify-center gap-12 text-2xl">
                    <p>Parece que aquí no hay nada, solo vacío y soledad...</p>
                    <p>Si has llegado aquí desde algún enlace de mi web, por favor, avísame por discord o github para solucionarlo {"<"}3</p>
                    <Link to={"/"} className="px-4 py-2 bg-xmf-pink rounded-xl">
                        INICIO
                    </Link>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Error404;
