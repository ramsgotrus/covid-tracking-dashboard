import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'
import './styles.css'

interface HeaderProps {
    className?: string,
    title: string,
}

const Header: FC<HeaderProps> = ({ title }): JSX.Element => {
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault()
        navigate(`/`)
    }

    return (

        <div className='headertext'>
            <strong className='title' onClick={handleClick}>{title}</strong>
            <div style={{
                position: 'absolute',
                textAlign: 'right',
                top: 125,
                left: 0,
                display: 'flex',
                marginLeft: 12
            }}>
                <Breadcrumbs aria-label="breadcrumbs" >
                    {['Home'].map((item: string) => (
                        <Link color="#ffff" key={item} href="#basics" onClick={handleClick}>
                            {item}
                        </Link>
                    ))}
                </Breadcrumbs>
            </div>
        </div>

    )
}

export default Header