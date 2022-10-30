import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Root() {
    return (
        <div className="w-full overflow-x-hidden bg-xmf-light-white dark:bg-xmf-dark-blue text-black dark:text-white">
            <div className="relative m-auto w-full min-h-screen max-w-screen-xl">
                <Header />
                <main className="w-full min-h-[calc(100vh-4rem)] px-8">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Root;
