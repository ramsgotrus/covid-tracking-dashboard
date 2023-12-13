import React from 'react'
import Skeleton from '@mui/material/Skeleton'


const BarChartLoader = () => {
    return (
        <div className="barChart">
            <Skeleton height={600} variant="rectangular" />
        </div>
    )
}

export default BarChartLoader