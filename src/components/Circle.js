import React from 'react';
import CircleEnabled from '@mui/icons-material/Circle';
import CircleDisabled from '@mui/icons-material/CircleOutlined';

const Circle = ({ enabled }) => {

    return (
        enabled
        ? <CircleEnabled />
        : <CircleDisabled />
    )
}

export default Circle;