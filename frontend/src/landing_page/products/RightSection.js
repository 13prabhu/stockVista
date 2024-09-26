import React from 'react';

function RightSection({productName, productDescription, learnMore,imageURl}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                   <h1  className='mb-4'>{productName}</h1>
                   <p>{productDescription}</p>
                   <div>
                  
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more   &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                   </div>
                 
                </div>
                <div className='col-1'></div>
                <div className='col-6 p-5'>
                    <img src={imageURl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;