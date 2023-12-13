import React from "react"
import Tooltip from '@mui/material/Tooltip'

interface ResetIconAttributes {
    className?: string,
    handleOnClick: () => void
}

export const ResetIcon: React.FC<ResetIconAttributes> = ({ handleOnClick }: ResetIconAttributes) => {
    return (
        <Tooltip title="Clear filter">
            <div onClick={() => handleOnClick()} style={{ cursor: 'pointer' }}>
                <svg fill="#000000" width="30px" height="30px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z" /></svg>
            </div>
        </Tooltip>

    )
}

export default ResetIcon