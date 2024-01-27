import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="border-top  bg-light" >


            <div class="container text-center mt-5  ">
                <div class="row">
                    <div class="col">
                        <div class="d-flex">
                            <i class="fa-solid fa-video fa-2x me-3" style={{ color: "orange" }}></i>
                            <h5><span class="text-warning">MEDIA</span>PLAYER</h5>
                        </div>
                        <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur itaque consequuntur dolore hic accusamus perspiciatis voluptatibus quia exercitationem. Architecto aperiam accusantium laborum autem expedita magnam optio, fugit eius vel. Asperiores.</p>

                    </div>
                    <div class="col d-flex flex-column">
                        <h5><span class="text-warning">LI</span>NK</h5>

                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/landingpage'}>Landing Page</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/home'}>Home</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/workinghistory'}>Working History</Link>


                    </div>
                    <div class="col d-flex flex-column">
                        <h5><span class="text-warning">GUI</span>DES</h5>

                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://react.dev/'}>React</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://react-bootstrap.github.io/'}>React Bootstarp</Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://bootswatch.com/'}>React Bootwatch</Link>


                    </div>
                    <div class="col ">
                        <h5><span class="text-warning">CON</span>TACT</h5>
                        <div class="d-flex " >
                            <input type="text" placeholder='Enter Email' class="form-control me-2" />
                            <button type="submit" class="btn btn-warning">Submit</button>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mt-4 ">
                            <Link style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-brands fa-instagram fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} > <i class="fa-brands fa-twitter fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-brands fa-facebook fs-3 me-3"></i></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://www.linkedin.com/login'}> <i class="fa-brands fa-linkedin fs-3 me-3"></i></Link>

                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyrights@2023 Video Player react</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;