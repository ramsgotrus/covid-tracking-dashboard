import React, { FC } from 'react'
import './styles.css'

interface TwoColumnGridProps {
    className?: string,
    children: React.ReactNode
}

const TwoColumnGrid: FC<TwoColumnGridProps> = ({ children }): JSX.Element => {
    return (<div className='columnGrid'>
        {children}
    </div>)
}

export default TwoColumnGrid