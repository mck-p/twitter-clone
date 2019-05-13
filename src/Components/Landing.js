import React, { useState } from 'react';

import logo from '../Assets/twitter_flipped.png';
import phone from '../Assets/iphone_mockup.png';

const Landing = () => {

    const [ menu, setMenu ] = useState(false);

    const show = (menu) ? "show" : "" 

    return (
        <div>
        <div className="container-fluid" style={{ padding: '2% 5%', height: '100vh' }}>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

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
          <h1 className="animated fadeIn"><strong>Twitter Clone</strong></h1>
          <p>This is a bunch of text describing this particular twitter clone. It is a twitter clone. </p>
          <button type="button" className="btn btn-primary btn-lg" style={{ margin: '5% 3% 5% 0' }}><i class="fas fa-sign-in-alt"></i> Sign In</button>
          <button type="button" className="btn btn-secondary btn-lg" style={{ margin: '5% 3% 5% 0' }}><i class="fas fa-clipboard-list"></i> Sign Up</button>
        </div>

        <div className="col-lg-6">
        <img class="title-image" src={logo} alt="iphone-mockup" style={{ height: 'auto', width: '100%' }} />
        </div>

      </div>
      </div>
      <div class="container-fluid" style={{ padding: '2% 5%', backgroundColor: 'whitesmoke', height: '100vh' }}>

      <div className="row">

      <div className="col-lg-6">
        <img class="title-image" src={phone} alt="iphone-mockup" style={{ height: 'auto', width: '100%' }} />
        </div>

        <div className="col-lg-6">
          <h2 className="animated fadeIn"><strong>Share your thoughts with the world</strong></h2>
          <br />
          <p style={{ padding: '5% 0' }}>This is a description of some stuff that this twitter clone can do</p>
          <p style={{ padding: '5% 0' }}>You can do tweet clones</p>
          <p style={{ padding: '5% 0' }}>You can follow other users</p>
          <p style={{ padding: '5% 0' }}>You can post pictures</p>
          
        </div>

        

      </div>


    </div>
      </div>
     
    );
};

export default Landing;