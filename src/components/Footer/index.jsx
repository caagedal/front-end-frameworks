import { NavLink } from "react-router-dom"


export function Footer(){

    return(
        <footer className="flex flex-col justify-center items-center">
            <NavLink to = "/">The Nest</NavLink>
            <div className="flex">
                <NavLink to = "/contact">Contact</NavLink>
                <p>About</p>
                <p>FAQ's</p>
            </div>
            <p>© 2024 The Nest. All rights reserved.</p>
        </footer>        
    )
}