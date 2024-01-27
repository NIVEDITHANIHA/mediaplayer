import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getHistory } from '../servicess/Allapi';
const WorkingHistory = () => {


    const [videohistory, setVideohistory] = useState([])
    const [delethistory, setDelethistory] = useState("")

    const gethistory = async () => {

        const gethistoryResponse = await getHistory()
        console.log(gethistoryResponse.data);
        setVideohistory(gethistoryResponse.data);

    }

    console.log("videohistory", videohistory);


    useEffect(() => {
        gethistory();
    }, [delethistory])




    const removehistory = async (id) => {
        console.log(id);
        const deletehisrespponses = await deleteHistory(id)
        console.log(deletehisrespponses)
        setDelethistory(deletehisrespponses);
    }
    console.log(
        delethistory
    );

    return (
        <>
            <div className='bg-light d-flex justify-content-between align-items-center p-5'>
                <h4>Watch History</h4>
                <Link to={'/'}><i class="fa-solid fa-arrow-left fa-beat-fade fa-2x text-warning me-2">Back Home</i></Link>
            </div>
            <table className='container bg-light border border-warning table m-5'>
                <thead>
                    <tr>
                        <th className='p-4'>Serial No</th>
                        <th className='p-4'>Caption</th>
                        <th className='p-4'>URL</th>
                        <th className='p-4'>Time Stamp</th>
                        <th className='p-4'></th>
                    </tr>
                </thead>

                {videohistory.length > 0 ? videohistory.map((items, index) => (

                    <tbody>


                        <tr>
                            <td className='p-4'>{index + 1}</td>
                            <td className='p-4'>{items?.caption}</td>
                            <td className='p-4'><a href={items.embeded_link} target="_blank" >{items.embeded_link}</a></td>
                            <td className='p-4'>{items?.time_stamp}</td>
                            <td className='p-4'><button className='btn btn-danger' onClick={() => removehistory(items.id)}><i class="fa-solid fa-trash-can"></i></button></td>
                        </tr>





                    </tbody>
                ))

                    : <p className='p-4 m-4 text-warning'>Nothing Have Watched No Watch history </p>}
            </table>

        </>
    )
}

export default WorkingHistory;