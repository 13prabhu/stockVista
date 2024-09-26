import React from 'react';

function Hero() {
    return ( 
      <div className='container border-bottom mb-5'>
        <div className='row  text-center mb-t p-5'>
        <h1 className='mt-5'>Technology</h1>
        <h3 className='text-muted fs-4 m-2'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-3'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings  <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
      </div>
     );
}

export default Hero;