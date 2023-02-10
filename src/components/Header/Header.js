import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import { Link } from 'react-router-dom'


import logoPath from '../../assets/logo2.png'


export default function index() {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-primary fw-bold">
                <div className="container-fluid">
                    <Link to={''} className="navbar-brand " href="#"><img className='img-fluid logo' src={logoPath} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link links active"  aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'} className="nav-link links " href="#">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/page'} className="nav-link links" href="#">Page</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'blog'} className="nav-link links" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link links" href="#">Contact</Link>
                            </li>

                        </ul>
                        <div className="d-flex justify-content-center align-items-center "  >
                            <input className="form-control bg-transparent border-0 me-2 placeholder-color border-bottom border-2 come-top mt-2" type="search" placeholder={`Search Products `} aria-label="Search" />
                            <BsSearch className='search-icon fs-3  ' />
                            <button className="btn  btn-outline-light border-0 text-black me-3 ms-4  mt-2 " type="submit" > Account</button>
                            <button className="btn btn-outline-light border-0 rounded-5 fs-3 mb-0 me-2 text-black position-relative " type="submit"><BiShoppingBag className='mb-2' /><span className='count'>12</span></button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
