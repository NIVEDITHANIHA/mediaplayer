import React, { useState } from 'react';
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom';

const Home = () => {



    const [getVideo, setGetVideo] = useState('')


    return (
        <>
            <div className=' bg-light pt-5 d-flex justify-content-between align-items-center '>
                <div className='add-videos'>
                    <Add setGetVideo={setGetVideo} />
                </div>

                <div className='me-5'>
                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }} to={'/workinghistory'}>Watch History</Link>

                </div>

            </div>
            <div className='container-fluid w-100 d-flex justify-content-between bg-light'>
                <div className='all-videos col-lg-9'>
                    <h4> ALL VIDEO</h4>
                    <View getVideo={getVideo} />

                </div>
                <div className='category col-lg-3'>
                    <Category></Category>

                </div>
            </div>

        </>
    )
}

export default Home

