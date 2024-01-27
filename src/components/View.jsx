import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getVideos } from '../servicess/Allapi';
function View({ getVideo }) {
  console.log("getVideo,getVideo");
  const [allVideos, setAllVideos] = useState([])

  const [deleteVideo, setDeleteVideo] = useState(false)
  console.log(deleteVideo);
  const getAll = async () => {
    const response = await getVideos()
    setAllVideos(response.data)
  }
  console.log(allVideos);
  useEffect(() => {
    getAll()
    setDeleteVideo(false)
  }, [getVideo, deleteVideo])

  return (
    <>


      <Row>

        {allVideos.length > 0 ?
          allVideos.map((video) => <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard display={video} setDeleteVideo={setDeleteVideo} />
          </Col>)
          :
          <p>Nothing to show</p>}

      </Row>
    </>
  )
}

export default View