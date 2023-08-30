import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  " to="/counter">
                                    Counter
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  " to="/wish">
                                    WishMessage
                                </NavLink>
                            </li>
                            {/* <NavLink className="nav-link  " to="/productItems">
                                ProductItems
                            </NavLink> */}
                            <NavLink className="nav-link  " to="/user">
                                UserForm
                            </NavLink>
                            <NavLink className="nav-link  " to="/login">
                                Login
                            </NavLink>
                            <NavLink className="nav-link  " to="/register">
                                Register
                            </NavLink>
                            <NavLink className="nav-link  " to="/userauth">
                                UserAuth
                            </NavLink>
                            <NavLink className="nav-link  " to="/productcart">
                                ProductCart
                            </NavLink>
                            <NavLink className="nav-link  " to="/parentcomponent">
                                ParentComponent
                            </NavLink>
                            <NavLink className="nav-link  " to="/contactapp">
                               ContactApp
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;