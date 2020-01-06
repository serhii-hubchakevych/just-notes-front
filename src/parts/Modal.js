import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class ModalWindow extends Component {

     closeModal() {
        this.props.callBackFromModalWindow(false)
      }

  render() {
      console.log(this.props.showModal)
    return (
        <Modal
          isOpen={this.props.showModal}
          onRequestClose={()=> this.closeModal() }
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div style={{display:'flex', justifyContent:'center'}}>
                <h2 style={{textAlign:'center', marginRight:10}}>STATUS</h2>
                <i className="icon-check" style={{color:'green', fontSize:35, textAlign:'center'}}></i>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <p >Your text has been successfully added to the database</p>
                </div> 
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="btn btn-outline-success" onClick={()=> this.closeModal()}>Close</button>
                </div> 
    
          
        </Modal>
    )
}
}

export default ModalWindow;
