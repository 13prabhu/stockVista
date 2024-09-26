import React from 'react';

function CreateTicket() {
    return ( 
<div className='container'>
    <div className='row text-center p-5  mb-5'>
        <h1 style={{textAlign:"left",fontWeight:"350"}} className='fs-3 text-muted mb-5'> To create a ticket, select a relevant topic</h1>
        <div className='col-4 'style={{textAlign:"left"}}>
            <p  className='fs-5 '> <i class="fa-solid fa-circle-plus " ></i> Account Opening </p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Getting started</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Online</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Offline</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Charges</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership and HUF</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a>
            <p  className='fs-5 mt-5'><i class="fa-solid fa-box"></i>  Funds</p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Fund withdrawal</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Adding funds</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Adding bank accounts</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a><br/>
           
        </div>
        <div className='col-4 'style={{textAlign:"left"}}>
            <p  className='fs-5 '><i class="fa-regular fa-user"></i> Your Zerodha Account</p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Login credentials</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification and segment addition
            </a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>CMR & DP ID</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of shares</a>
            <p  className='fs-5 mt-5'>  <i class="fa-solid fa-circle-radiation"></i>  Console </p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement
            </a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Referral program</a>
     
        </div>
     
        <div className='col-4'style={{textAlign:"left"}}>
            <p  className='fs-5 '> <i class="fa-solid fa-chart-line"></i> Trading and Markets </p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Kite</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Margins</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Product and order types</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Kite features</a>
            <p  className='fs-5  mt-5'>  <i class="fa-solid fa-circle-notch"></i> Coin </p>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Understanding mutual funds and Coin</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Coin app</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Coin web</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>Transactions and reports</a><br/>
            <a href=''style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
     
        </div>
    </div>
</div>

     );
}

export default CreateTicket;