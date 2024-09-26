import React from "react";

function Universe() {
  return (
    <div className="container ">
      <div className="row text-center ">
        <h1 className="mt-5 fs-2 text-muted mb-4"> The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        
        <div className="col-4 p-5 mt-5 text-muted" style={{fontSize:"0.75rem",fontWeight:"500"}}>
          <img src="media/Images/zerodhaFundhouse.png"  style={{width:"50%"}} />
          <p className="text-small text-muted">
          Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

          </p>
          <img src="media/Images/streakLogo.png" className="mt-5" style={{width:"20%"}}/>
          <p className="text-small text-muted">
          Systematic trading platform
that allows you to create and backtest
strategies without coding
          </p>
        </div>
        <div className="col-4 p-5 mt-5" style={{fontSize:"0.75rem",fontWeight:"500"}}>
          <img src="media/Images/sensibullLogo.svg"  style={{width:"55%"}}/>
          <p className="text-small text-muted">
          Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

          </p>{" "}
          <img src="media/Images/smallcaseLogo.png" className="mt-5"/>
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5 mt-5 " style={{fontSize:"0.75rem",fontWeight:"500"}}>
          <img src="media/Images/goldenpiLogo.png" />
          <p className="text-small text-muted">
          Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

          </p>{" "}
          <img src="media/Images/dittoLogo.png"className="mt-5" style={{width:"30%"}}/>
          <p className="text-small text-muted">
          Personalized advice on life
and health insurance. No spam
and no mis-selling.
          </p>
         
        </div>
        <button  className='p-2 btn btn-primary fs-5 mt-5 signUp'  style={{width:"20%",margin:"0 auto"}}>Signup Now</button>

      </div>
    </div>
  );
}

export default Universe;
