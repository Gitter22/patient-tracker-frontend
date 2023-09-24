import React from 'react'
import Box from './Box'

const Card = ({ children }) => {
    return (
        <Box
            style={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#fff',
                padding: '16px',
            }}
        >
            {children}
        </Box>
    )
}

export default Card