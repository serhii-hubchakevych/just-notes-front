import React, { Component } from "react";
import '../App.css'
import { authAdminPanel, sendAdminData } from '../networking/API'
import { SemipolarLoading } from 'react-loadingg';
import ModalWindow from '../parts/Modal'


class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      login:'',
      password:'',
      adminFlag:false,
      headerH1:'',
      headerH2:'',
      aboutH1:'',
      aboutH2:'',
      calloutH1:'',
      loaderVisibile: true,
      visibleModal: false
    }
  }
  
  async componentDidMount(){
   
    const token = localStorage.getItem('Token');
    if ( token != null ){
      const loginData = {
        login: 'admin',
        password: '12345678'
      }
      const response = await authAdminPanel(loginData);
      this.setState({
        adminFlag: true,
        headerH1:response[0].headerH1,
        headerH2:response[0].headerH2,
        aboutH1:response[0].aboutH1,
        aboutH2:response[0].aboutH2,
        calloutH1:response[0].calloutH1,
        loaderVisibile:false
      })
    } else {
      this.setState({
        loaderVisibile:false
      })
    }
  }

  async authAdmin(event){
    event.preventDefault();
    let loginData = {
      login: this.state.login,
      password: this.state.password
    }
    let response = await authAdminPanel(loginData);
    
    if ( response === undefined ){
        alert('LOGIN OR PASSWORD IS INCORRECT')
        this.setState({
          login:'',
          password:''
        })
    } else {
      localStorage.setItem('Token', response[1]);
      this.setState({
        adminFlag: true,
        headerH1:response[0].headerH1,
        headerH2:response[0].headerH2,
        aboutH1:response[0].aboutH1,
        aboutH2:response[0].aboutH2,
        calloutH1:response[0].calloutH1
      })
    }
  }

  async sendAdminData(event){
    event.preventDefault();
    let newContent = {
      headerH1:this.state.headerH1,
      headerH2:this.state.headerH2,
      aboutH1:this.state.aboutH1,
      aboutH2:this.state.aboutH2,
      calloutH1:this.state.calloutH1
    }
   await sendAdminData(newContent);
   this.setState({
     visibleModal: true
   })
  }

  redirectToHomePage(){
    this.props.history.push("/")
  }

  logoutFromAdminPanel(){
    localStorage.removeItem('Token')
    this.props.history.push("/")
  }

  getCallbackDataFromModalWindow(callbackData){
    console.log(callbackData)
    this.setState({
        visibleModal:callbackData
    })
  }

  render() {
    return (
      this.state.loaderVisibile?
      <div> 
          <SemipolarLoading />
      </div>:
      !this.state.adminFlag?
      <div className="admin-div">
        <form onSubmit={ (e)=> this.authAdmin(e) }>
          <h3 style={{textAlign:'center'}}>Sign In</h3>
          <div className="form-group">
            <label>Login</label>
            <input
              className="form-control"
              placeholder="Enter login"
              onChange={(login) => this.setState({login:login.target.value})}           
              />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(password) => this.setState({password:password.target.value})} 
            />
          </div>
          <button className="btn btn-primary btn-block">
            Submit
        </button>
        </form>
      </div> :
      <div>
      <div style={{backgroundColor:"black", padding:40,}}><p style={{fontSize:40, fontWeight:'bold', textAlign:'center', color:'white'}}>JUST NOTES ADMIN PANEL</p></div>
      <div style={{ display:'block', width:'50%', marginLeft:'auto', marginRight:'auto', padding:50}}>
        <form onSubmit={ (e)=> this.sendAdminData(e)}>
          <label style={{fontSize:20, padding:10}}>Header H1 - Header section</label>
          <input
            value={this.state.headerH1}
            style={{height:70}}
            className="form-control"
            onChange={(data) => this.setState({headerH1:data.target.value})}           
            />
          <label style={{fontSize:20, padding:10}}>Header H2 - Header section</label>
          <textarea
            value={this.state.headerH2}
            style={{height:70}}
            className="form-control"
            onChange={(data) => this.setState({headerH2:data.target.value})}      
            />
          <label style={{fontSize:20, padding:10}}>Header H1 - About section</label>
          <textarea
            value={this.state.aboutH1}
            style={{height:70}}
            className="form-control"
            onChange={(data) => this.setState({aboutH1:data.target.value})}         
            />
          <label style={{fontSize:20, padding:10}}>Header H2 - About section</label>
          <textarea
            value={this.state.aboutH2}
            style={{height:70}}
            className="form-control"
            onChange={(data) => this.setState({aboutH2:data.target.value})}             
            />
          <label style={{fontSize:20, padding:10}}>Header H1 - Services Section</label>
          <textarea
            value={this.state.calloutH1}
            style={{height:70}}
            className="form-control"
            onChange={(data) => this.setState({calloutH1:data.target.value})}      
            />
          <button style={{padding:10, marginTop:10, marginRight:20}} className="btn btn-success btn-block" >
            Submit
          </button>
        </form>
        <div style={{display:'flex'}}>
          <button onClick={ ()=> this.redirectToHomePage() } style={{padding:10, marginTop:10, marginRight:20}} className="btn btn-primary btn-block" >
            See my changes
          </button>
          <button onClick={ ()=> this.logoutFromAdminPanel() }style={{padding:10, marginTop:10}} className="btn btn-danger btn-block" >
            Log Out
          </button>
        </div>
        <ModalWindow callBackFromModalWindow={ (e) => this.getCallbackDataFromModalWindow(e) } showModal={this.state.visibleModal}/>
      </div>
    </div>
    );
  }
}

export default AdminPage;
