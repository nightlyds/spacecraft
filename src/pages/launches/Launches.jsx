import React, { useEffect } from 'react'

const Launches = ({ loadUpLaunches, loadUpOneLaunch, oneLaunch, launches, loading, error}) => {
    useEffect(() => {
        loadUpLaunches();
    }, [])
    return (
        <div className="launches">
            
        </div>
    )
}

export default Launches
