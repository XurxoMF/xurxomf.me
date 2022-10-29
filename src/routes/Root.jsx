import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Root() {
    return (
        <div className="relative w-full min-h-screen bg-xmf-light-white dark:bg-xmf-dark-blue text-black dark:text-white overflow-x-hidden">
            <Header />
            <main className="w-full h-[calc(100vh-4rem)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Root;
