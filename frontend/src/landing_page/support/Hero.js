import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{fontSize:"1.15rem"}}>Track tickets</a>
      </div>
      <div className="row p-5 supportWrapper2">
        <div className="col-6 p-5 ">
          <h1 className="fs-4 mb-5">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg:how do i activate F&O,why is my order getting rejected ..." ></input><br/>
          
          <a href="#" style={{lineHeight:"3"}}>Track account opening </a>
          <a href="#"  style={{lineHeight:"3",marginLeft:"20px"}}>Track segment activation</a>
          <a href="#"  style={{lineHeight:"3",marginLeft:"20px"}}>Intraday margins </a><br/>
          <a href="#"  style={{lineHeight:"3"}}>Kite user manual </a>
        </div>
        <div className="col-6 p-5" >
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol>
            <li><a href="#"  style={{lineHeight:"3",marginLeft:"20px"}}>Current Buybacks - August 2024</a></li>
            <li><a href="#" style={{lineHeight:"3",marginLeft:"20px"}}>Latest Intraday leverages and Square-off timings </a></li>
          </ol>
          
      </div>
      </div>
    </section>
  );
}

export default Hero;
