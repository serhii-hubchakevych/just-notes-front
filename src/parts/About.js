import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2 className="mb-5" style={{fontSize:'3rem'}}>{this.props.aboutContent.aboutH1}</h2>
                <p className="lead mb-5">{this.props.aboutContent.aboutH2}</p>
                <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">What does our application do?</a>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
