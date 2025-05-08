import React from 'react'

const Dashboard = () => {
    return (
        <div>

            <nav className='bg-green-800  text-light p-3 flex justify-between w-100'>
                <h1 className='fs-3'>Progress Tracker</h1>
                <h1 className='fs-lg-3 fs-6'>Points: <button>0</button></h1>
                <button className='fs-lg-5 fs-6 px-lg-5 py-lg-2 rounded-lg-5 rounded-4 p-2 text-dark fw-bold' style={{backgroundColor: '#B9F8CF'}}>Settings</button>
                
            </nav>

            <div className='col-lg-9 col-11 bg-green-200 shadow mx-auto mt-lg-20 mt-5 p-3' style={{ height: '80vh' }}>
                <h1 className='text-center '>Today's Nugget</h1>
                <div style={{ height: '40vh' }} className='bg-white mt-20 rounded-5 p-5 fs-3 fw-bold col-lg-7 col-10 mx-auto text-center'>
                    "Nuggets will appear here"
                </div>

            </div>
            <div className='d-lg-flex mt-5 gap-3' >
                <div className='col-lg-8 col-11 mx-auto ms-lg-5 fs-4'>
                    <h1 className='text-center'>Daily Routine...</h1>
                    <table className='table table-bordered border-4 border-dark'>
                        <thead>
                            <th className='text-center'>Task</th>
                            <th className='text-center'>Completed</th>
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
                                <th>Skin Care</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                            <tr>
                                <th>Skin Care</th>
                                <th><input type="checkbox" name="" id="" style={{ width: '20px', height: '20px' }} /></th>
                            </tr>
                        </tbody>
                            <div className='d-flex justify-content-center m-3'>
                            <button className='form-control w-50 fw-bold text-white' style={{backgroundColor: '#016630'}}>Add Task</button>
                            </div>
                    </table>
                </div>
                <div className='col-lg-3 col-11 mx-auto bg-green-800 p-4' style={{minHeight: '65vh'}}>
                    <h1 className='text-center mt-3 text-white'>Daily Comment...</h1>
                    <textarea style={{ height: '40vh' }} className='bg-white mt-3 rounded-5 p-5 fs-3 fw-bold col-12'></textarea>
                    <button className='form-control mt-4 fw-bold' style={{ backgroundColor: '#B9F8CF' }}>Save</button>
                </div>
            </div>
            <div style={{ height: '50vh' }} className='bg-green-200 mt-5 p-2 col-12 col-lg-12 border border-success border-4'>
                <p>Progress Statistics</p>
            </div>
        </div>
    )
}

export default Dashboard