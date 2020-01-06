import React, { Component } from 'react';
import downloadGooglePlay from '../styles/img/get-it-on-google-play.png'

class Footer extends Component {
  render() {
    return (
        <footer className="footer text-center">
        <div className="container">
        
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="#">
                <i className="icon-social-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="#">
                <i className="icon-social-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="#">
                <i className="icon-social-github"></i>
              </a>
            </li>
          </ul>
          <img src={downloadGooglePlay} style={{width: "20%", height: "20%"}} alt=""/>          
          <p className="text-muted small mb-0">Copyright &copy; Serhii Hubchakevych 2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
