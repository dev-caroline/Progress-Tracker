import React, { useState } from 'react'

const Dashboard = () => {
    const [box, setBox] = useState([])
    const [comment, setComment] = useState('')
    const [currentNugget, setCurrentNugget] = useState("");
    const nuggetList = [
        "Keep going, you're doing great!",
        "Drink water and mind your business 😌",
        "Small steps every day = big results",
        "Your effort today matters more than perfection",
        "God's timing is always perfect"
    ]
    const nugget = ()=>{
        const random = Math.floor(Math.random()* nuggetList.length)
        setCurrentNugget(nuggetList[random])
    }

    const addTask = () => {
        const task = prompt('Enter your daily routine')
        if (task === '') {
            alert('fill')
        } else {

        }
    }

    const saveBtn = () => {
        setBox([...box, comment])
        localStorage.setItem('Array of comments', box)
    }
    return (
        <div>

            <nav className='bg-green-800  text-light p-3 flex justify-between w-100'>
                <h1 className='fs-5'>Progress Tracker</h1>
                <h1 className='fs-5'>Streak: <button>0</button></h1>
            </nav>

            <div className='col-lg-9 col-11 bg-green-200 shadow mx-auto mt-lg-20 mt-lg-5 mt-2 p-3' style={{ height: '80vh' }}>
                <h1 className='text-center '>Today's Nugget</h1>
                <div className='flex justify-content-center mt-20'>
                    <button style={{ height: '40vh' }} className='bg-white mt-20 rounded-5 p-5 fs-3 fw-bold col-lg-7 col-10 text-center' onClick={nugget}>
                        <p>{currentNugget}</p>
                    </button>
                </div>

            </div>
            <div className='d-lg-flex mt-5 gap-3' >
                <div className='col-lg-8 col-11 mx-auto ms-lg-5 fs-4'>
                    <h1 className='text-center'>Daily Routine...</h1>
                    <table className='table table-bordered border-4 border-dark'>
                        <thead>
                            <tr>
                                <th className='text-center'>Task</th>
                                <th className='text-center'>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <th>Skin Care</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Oral Care</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Mine Airdrops</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Take Vitamin C</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Bible Reading / Prayer</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>21 days MERN stack challenge</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Save 500 naira</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Prepare for tomorrow</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center m-3'>
                        <button className='form-control w-50 fw-bold text-white' style={{ backgroundColor: '#016630' }} onClick={addTask}>Add Task</button>
                    </div>
                </div>
                <div className='col-lg-3 col-11 mx-auto bg-green-800 p-4' style={{ maxHeight: '65vh' }}>
                    <h1 className='text-center mt-3 text-white'>Daily Comment...</h1>
                    <textarea style={{ height: '40vh' }} className='bg-white mt-3 rounded-5 p-5 fs-3 fw-bold col-12' onChange={(e) => { setComment(e.target.value) }}></textarea>
                    <button className='form-control mt-4 fw-bold' style={{ backgroundColor: '#B9F8CF' }} onClick={saveBtn}>Save</button>
                </div>
            </div>
            <div style={{ minHeight: '50vh' }} className='bg-green-200 mt-5 p-2 col-12 col-lg-12 border border-success border-4'>
                <h1 className='text-center'>Comments</h1>
                {comment}
            </div>
        </div>
    )
}

export default Dashboard