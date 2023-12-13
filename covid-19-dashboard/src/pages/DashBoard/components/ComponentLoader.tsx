import React, { FC } from 'react'
import { Header, MainContainer, Footer, CustomTableLoader } from '@components/index'
import Box from '@mui/material/Box'

interface FooterProps {
    className?: string,
}

const ComponentLoader: FC<FooterProps> = ({ }): JSX.Element => {
    return (<Box sx={{ flexGrow: 1 }}>
        <Header title='COVID-19 Dashboard'></Header>
        <MainContainer>
           
                <CustomTableLoader key={Math.random()} />,
         
        </MainContainer>
        <Footer title='Ram. © 2023. All rights reserved.' />
    </Box>
    )
}

export default ComponentLoader