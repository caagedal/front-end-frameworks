import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            {/* Main Navigation */}
            <div className="flex flex-col items-center gap-4 mb-6">
                <NavLink
                    to="/"
                    className="text-2xl font-bold hover:text-accent transition"
                >
                    The Nest
                </NavLink>
                <div className="flex gap-6">
                    <NavLink
                        to="/contact"
                        className="text-sm hover:text-accent transition"
                    >
                        Contact
                    </NavLink>
                    <p className="text-sm hover:text-accent transition cursor-pointer">
                        About
                    </p>
                    <p className="text-sm hover:text-accent transition cursor-pointer">
                        FAQ's
                    </p>
                </div>
            </div>

            {/* Footer Copy */}
            <p className="text-center text-sm text-gray-400">
                © 2024 The Nest. All rights reserved.
            </p>
        </footer>
    );
}
