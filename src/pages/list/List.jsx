import React, { useEffect } from 'react'

const List = ({ loadUpLaunches, loadUpOneLaunch, oneLaunch, launches, loading, error}) => {
    useEffect(() => {
        loadUpLaunches();
    }, [])
    return (
        <div className="list">
            
        </div>
    )
}

export default List
