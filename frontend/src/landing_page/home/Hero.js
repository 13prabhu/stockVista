import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
         <div className='row text-center'>
            <img src='media\Images\homeHero.png' alt='Hero Image' className='mb-5'></img>
            <h1 >Invest in everything</h1>
            <p className='fs-4 mt-2'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button  className='p-2 btn btn-primary fs-5 mb-5 signUp mt-4'  style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
         </div>

        </div>
     );
}

export default Hero;
