import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigateByUrl = useNavigate();
    return (

        <div className='bg-light'>
            <Container className=" pt-5 d-flex align-items-center justify-content-center w-100 " >
                <Row >
                    <Col></Col>
                    <Col lg={6} >

                        <h1 >Welcome to <span className="text-warning">Media Player</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugit ex voluptatem libero reiciendis, quibusdam possimus, dolorem, fugiat excepturi autem rerum cupiditate tenetur sint impedit culpa! Fugit recusandae asperiores assumenda?</p>
                        <button type='button' onClick={() => navigateByUrl('/home')} className="btn btn-warning mt-5">Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
                    </Col>
                    <Col lg={5}>
                        <img style={{ width: '100%', height: '30rem', borderRadius: '100%', boxShadow: '30, 30, 30, 10', padding: '10px' }} src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />

                    </Col>
                </Row>

            </Container>

            <Container className="mt-5 d-flex align-items-center justify-content-center w-100" >
                <Row className="mt-5 d-flex align-items-center justify-content-center ">
                    <h1 className="mt-5 d-flex align-items-center justify-content-center mt-4 "> <span class="text-warning">Feat</span>ures</h1>
                    <Col lg={4}  >
                        <Card className="p-4 border-top border-warning bg-light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '12rem', }} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Managing Video</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={4}  >
                        <Card className="p-4 border-top border-warning bg-light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '12rem', }} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                            <Card.Body>
                                <Card.Title>Categorized Video</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={4}  >
                        <Card className="p-3 border-top border-warning bg-light" style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '12rem', }} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
                            <Card.Body>
                                <Card.Title>Watching History</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </Container>



            <Container className="mt-5 w-100 border border-warning rounded" style={{ height: '500px', textAlign: 'justify' }}>
                <Row >

                    <Col lg={6} >
                        <h3 className='text-warning mt-5'>
                            Simple fast and powerfull
                        </h3>


                        <p> <span className='fs-4'> Play Everything :</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique vero officia accusamus, fuga est atque adipisci laudantium, eos sunt ipsa, autem eveniet animi molestiae ratione at perspiciatis repudiandae. Veniam!
                        </p>
                        <p> <span className='fs-4'> Play Everything :</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique vero officia accusamus, fuga est atque adipisci laudantium, eos sunt ipsa, autem eveniet animi molestiae ratione at perspiciatis repudiandae. Veniam!
                        </p>
                        <p> <span className='fs-4'> Play Everything :</span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique vero officia accusamus, fuga est atque adipisci laudantium, eos sunt ipsa, autem eveniet animi molestiae ratione at perspiciatis repudiandae. Veniam!
                        </p>


                    </Col>

                    <Col lg={6} className='mt-5'>
                        <iframe width="550" height="400" src="https://www.youtube.com/embed/ryD8BqVexJI" title="OK Kanmani - Mental Manadhil Video | A.R. Rahman, Mani Ratnam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </Col>


                </Row>

            </Container>

        </div>
    )


}

export default LandingPage