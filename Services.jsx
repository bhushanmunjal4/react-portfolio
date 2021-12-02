import React from 'react'
import Cards from './Card/Cards';
import Data from './Card/Data';
import image1 from './Card/website.jpg';
import image2 from './Card/video.jpg';
import image3 from './Card/digital.jpg';

function Services() {
    return (
        
        <div className="services">
            <div className="service-heading">
                <h1>What Can I Do</h1>
                <p>These are the services I provide you.</p>
            </div>
            <div className="b-container">
                <Cards
                stype={Data[0].stype}
                simage={image1}
                sdescription={Data[0].sdescription}
                />
                <Cards
                stype={Data[0].stype}
                simage={image2}
                sdescription={Data[1].sdescription}
                />
                <Cards
                stype={Data[0].stype}
                simage={image3}
                sdescription={Data[2].sdescription}
                />
            </div>     
        </div>
    )
}

export default Services

