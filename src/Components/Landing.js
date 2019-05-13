import React, { useState } from 'react';

const Landing = () => {

    const [ menu, setMenu ] = useState(false);

    const show = (menu) ? "show" : "" 

    return (
        <div className="container-fluid" style={{ padding: '2% 5%' }}>

      <nav className="navbar navbar-expand-lg navbar-light">

        <a className="navbar-brand" href="">Twitter Clone</a>

        <button className="navbar-toggler" type="button" onClick={() => setMenu(!menu)}>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show}`} id="navbarTogglerDemo02">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto" style={{ padding: '0 10px' }}>
              <a className="nav-link">Apps</a>
            </li>
            <li className="nav-item ml-auto" style={{ padding: '0 10px' }}>
              <a className="nav-link">About Us</a>
            </li>
            <li className="nav-item ml-auto" style={{ padding: '0 10px' }}>
              <a className="nav-link">Support</a>
            </li>
            <li className="nav-item ml-auto" style={{ padding: '0 10px' }}>
              <a className="nav-link">Login</a>
            </li>
          </ul>

        </div>
      </nav>
      <div className="row" style={{ paddingTop: "7%" }}>

        <div className="col-lg-6">
          <h1><strong>Twitter Clone</strong></h1>
          <p>This is a bunch of text describing this particular twitter clone. It is a twitter clone. </p>
          <button type="button" className="btn btn-primary btn-lg" style={{ margin: '5% 3% 5% 0' }}><i class="fab fa-apple"></i> Sign In</button>
          <button type="button" className="btn btn-secondary btn-lg" style={{ margin: '5% 3% 5% 0' }}><i class="fab fa-google-play"></i> Sign Up</button>
        </div>

        <div className="col-lg-6">
        </div>

      </div>
      </div>
     
    );
};

export default Landing;