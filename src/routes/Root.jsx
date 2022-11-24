import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Root() {
    return (
        <div id="fondo" className="w-full overflow-x-hidden bg-fixed bg-cover bg-center text-black dark:text-white text-lg font-xmf-font">
            <div className="w-full min-h-screen backdrop-blur-sm bg-xmf-light-white dark:bg-xmf-dark-blue bg-opacity-80 dark:bg-opacity-80">
                <div className="relative m-auto w-full min-h-screen max-w-screen-xl">
                    <Header />
                    <main className="w-full min-h-[calc(100vh-4rem)] px-8 mb-8">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Root;
