import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="masthead d-flex"> 
        <div className="container text-center my-auto">
          <h1 className="mb-1">{this.props.headerContent.headerH1}</h1>
          <h3 className="mb-5">
            <em>{this.props.headerContent.headerH2}</em>
          </h3>
          <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Read more</a>
        </div>
        <div className="overlay"></div>
        {/* <SemipolarLoading /> */}
      </header>
    );
  }
}

export default Header;
