import React from 'react';
import CircleEnabled from '@mui/icons-material/Circle';
import CircleDisabled from '@mui/icons-material/CircleOutlined';

const Circle = ({ enabled }) => {

    return (
        enabled
        ? <CircleEnabled sx={{color: '#fff', fontSize: 15}}/>
        : <CircleDisabled sx={{color: '#fff', fontSize: 15}}/>
    )
}

export default Circle;