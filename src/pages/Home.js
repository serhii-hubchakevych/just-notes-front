import React, { Component } from 'react';
import Header from '../parts/Header';
import About from '../parts/About';
import Services from '../parts/Services'
import Footer from '../parts/Footer'
import '../styles/css/stylish-portfolio.css'
import { SemipolarLoading } from 'react-loadingg';
import { getContent } from '../networking/API'
import { Link } from "react-router-dom"
import '../styles/vendor/simple-line-icons/css/simple-line-icons.css'
import SimpleCarousel from '../parts/Carousel'


class HomePage extends Component {
    constructor(props){
    super(props)
    this.state = {
        contentOnSite: '',
        loaderVisibile: true,
        hiAdmin:false
    }
  }

  async componentDidMount(){
    let content = await getContent();
    this.setState({
      contentOnSite: content,
      loaderVisibile: false,
    })
    
    const token = localStorage.getItem('Token')
    if (token != null){
      this.setState({
        hiAdmin: true
      })
    }
  }

  render() {
    return (
          !this.state.loaderVisibile ? 
            <div>
                <nav className="navbar navbar-light bg-dark" style={{position:'fixed', width:'100%', zIndex:1}}>
                  <Link to="/admin" style={{marginLeft: 'auto', marginRight: 0}}><i className="icon-login" style={{color:'white', fontSize:20, }}>{this.state.hiAdmin ? <span style={{marginLeft:10, fontFamily:'Roboto'}}>Hi, admin</span>: <span style={{marginLeft:10, fontFamily:'Roboto'}}>Admin? Log In here</span>}</i></Link>
                </nav> 
                <Header headerContent={this.state.contentOnSite}/>
                <About aboutContent={this.state.contentOnSite}/>
                <SimpleCarousel />
                <Services servicesContent={this.state.contentOnSite}/>
                <Footer />
            </div> : 
            <div> 
              <SemipolarLoading />
            </div>
    );
  }
}

export default HomePage;
