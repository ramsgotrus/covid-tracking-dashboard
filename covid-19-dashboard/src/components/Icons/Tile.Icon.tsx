import React from "react"

interface TileIconAttributes {
    className?: string
}

export const TileIcon: React.FC<TileIconAttributes> = ({ }: TileIconAttributes) => {
    return (
        <div style={{ cursor: 'pointer' }}>
            <svg width="200px" height="200px" viewBox="0 0 76 76" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" >
                <path fill="#006c79" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 22,52L 22,35L 30,35L 30,52L 22,52 Z M 32,52L 32,22L 39,22L 39,52L 32,52 Z M 41,52L 41,41L 49,41L 49,52L 41,52 Z M 51,52L 51,29L 59,29L 59,52L 51,52 Z M 17,19L 20,19L 20,54L 59,54L 59,57L 17,57L 17,19 Z " />
            </svg>
        </div >

    )
}

export default TileIcon