import React from 'react';
import '../styles/LinkedItem.css';
import { GitHub, LinkedIn, Email, LocationOn} from '@mui/icons-material';

const LinkItem = ({ iconName, description }) => {

    let icon = <GitHub />
    
    if(iconName === 'linkedin')
        icon = <LinkedIn />
    
    if(iconName === 'email')
        icon = <Email />

    if(iconName === 'location')
        icon = <LocationOn />
    
    return (
        <div className='Link-item'>
            {icon}
            <div className='description'>
                {description}
            </div>
            
        </div>
    )
}

export default LinkItem