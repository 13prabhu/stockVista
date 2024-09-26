import React from 'react';

function LeftSection({imageURl, productName, productDescription, tryDemo, learnMore,googlePlay, appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
            <div className='col-6 p-5'>
                <img src={imageURl}/>
            </div>
            <div className='col-1'></div>
            <div className='col-5 p-5 mt-5'>
                <h1 className='mb-4'>{productName}</h1>
                <p>{productDescription}</p>
                <div >
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{marginLeft:"4rem",textDecoration:"none"}}>Learn more  &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='mt-4'>
                <a href={googlePlay}><img src='media/Images/googlePlayBadge.svg'/></a>
                <a href={appStore} style={{marginLeft:"2rem"}}><img src='media/Images/appstoreBadge.svg'/></a>
                </div>

            </div>
            </div>
        </div>
     );
}

export default LeftSection;