import React, { Component } from 'react';
import '../styles/vendor/simple-line-icons/css/simple-line-icons.css'

class Services extends Component {
  render() {
    return (
        <section className="content-section bg-primary text-white text-center" id="services">
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Just Notes</h3>
            <h2 className="mb-5">{this.props.servicesContent.calloutH1}</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-rocket"></i>
              </span>
              <h4>
                <strong>Quickly</strong>
              </h4>
              <p className="text-faded mb-0">Create your notes faster than you think!</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-share"></i>
              </span>
              <h4>
                <strong>Share</strong>
              </h4>
              <p className="text-faded mb-0">Share your notes with your friends!</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-picture"></i>
              </span>
              <h4>
                <strong>Picture</strong>
              </h4>
              <p className="text-faded mb-0">Attach images to your notes!</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-mustache"></i>
              </span>
              <h4>
                <strong>Is free</strong>
              </h4>
              <p className="text-faded mb-0">Our application is free and ad-free.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
