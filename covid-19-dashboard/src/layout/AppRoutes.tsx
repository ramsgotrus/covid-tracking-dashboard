import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, DashBoard } from '@pages/index'

const Loading = () => <p>Loading ...</p>

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<DashBoard />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes