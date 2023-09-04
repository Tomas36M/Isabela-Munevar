import React from 'react'
import { Link } from 'react-router-dom'
import cv from '../assets/CV_Webpage.pdf'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand logo px-3" to='/'>
                        <span className='font-link'>
                            Isabela Munevar Escalante
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto nav-items">
                            <Link className="nav-link active" aria-current="page" to='/reaserch'>
                                <li className="nav-item">
                                    <button type="button" class="btn btn-outline-secondary"><span className='font-text'>Research</span></button>
                                </li>
                            </Link>
                            <Link className="nav-link active" aria-current="page" to='/teaching'>
                                <li className="nav-item">
                                    <button type="button" class="btn btn-outline-secondary"><span className='font-text'>Teaching</span></button>
                                </li>
                            </Link>
                            <div className="nav-link active">
                                <li className="nav-item">
                                    <a href={cv} download="isabela-munevar-cv"><button type="button" class="btn btn-outline-primary"><span className='font-text'>Download CV</span></button></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar