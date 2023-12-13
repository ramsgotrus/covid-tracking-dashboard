import React, { FC } from 'react'
import './styles.css'

interface MainContainerProps {
    className?: string,
    children: React.ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }): JSX.Element => {
    return (<div className='main'>
        {children}
    </div>)
}

export default MainContainer