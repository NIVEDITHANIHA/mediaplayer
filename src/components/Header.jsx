import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>

            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand >

                        <Link to={'/'} style={{ textDecoration: 'none', margin: '400px', fontSize: '45px', color: 'orange' }}>
                            <i class="fa-solid fa-video fa-beat-fade ms-3" style={{ color: "orange", margin: '20px' }}></i>
                            MEDIA PLAYER</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )

}


export default Header