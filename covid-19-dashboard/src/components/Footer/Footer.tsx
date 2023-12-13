import React, { FC } from 'react'
import './styles.css'

interface FooterProps {
    className?: string,
    title: string,
}

const Footer: FC<FooterProps> = ({ title }): JSX.Element => {
    return (<div className='footer'>
        <p>{title}</p>
    </div>)
}

export default Footer