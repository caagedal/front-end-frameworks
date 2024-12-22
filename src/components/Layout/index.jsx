import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout() {

    return (
        <>
            <Header />
            <main className="flex-grow min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
    
}