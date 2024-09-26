import React from 'react';

function Hero() {
    return ( 
       <div className='container p-4 border-bottom'>
        <div className='row text-center mt-5 text-muted mb-5 p-5'>
            <h1 style={{fontSize:"3rem"}}>Pricing</h1>
            <p className='fs-4 mb-5 mt-3'>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
        <div className='border-top '>
            <div className='row mt-5 p-5 text-center'>
               
                <div className='col-4 p-5'>
                    <img src='media/Images/pricingEquity.svg' style={{width:"90%"}}/>
                    <h1>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>  <img src='media/Images/intradayTrades.svg' style={{width:"90%"}}/>
                    <h1>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades</p>
              </div>
                <div className='col-4 p-5'>  <img src='media/Images/pricingEquity.svg' style={{width:"90%"}}/>
                    <h1>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
              </div>
            </div>
        </div>
       </div>
     );
}

export default Hero;
<h1>Hero</h1>