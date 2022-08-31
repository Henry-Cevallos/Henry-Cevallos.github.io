import React from 'react';
import '../styles/LinkedItem.css';
import { GitHub, LinkedIn, Email, LocationOn, ContactPage} from '@mui/icons-material';

const LinkItem = ({ iconName, description, url }) => {

    let icon = <GitHub />
    
    if(iconName === 'linkedin')
        icon = <LinkedIn />
    
    if(iconName === 'email')
        icon = <Email />

    if(iconName === 'location')
        icon = <LocationOn />
    
    if(iconName === 'resume')
        icon = <ContactPage />
        
    return (
        <a href={url}>
        <div className='Link-item shadow'>
            {icon}
            <div className='description'>
                {description}
            </div>
            
        </div>
        </a>
    )
}

export default LinkItem