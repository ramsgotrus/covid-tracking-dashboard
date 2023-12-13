import React, { FC } from 'react'
import { Header, MainContainer, Footer } from '@components/index'
import Box from '@mui/material/Box'

interface ErrorComponentProps {
    className?: string,
}

const ErrorComponent: FC<ErrorComponentProps> = ({ }): JSX.Element => {
    return (<Box sx={{ flexGrow: 1 }}>
        <Header title='COVID-19 Dashboard'></Header>
        <MainContainer>
            <h1>We encountered an issue processing your request.</h1>
        </MainContainer>
        <Footer title='Ram. © 2023. All rights reserved.' />
    </Box>
    )
}

export default ErrorComponent