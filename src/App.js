import React, { Component } from 'react';

import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from './images/profile.png'
import address from './images/address.png'
import mobile from './images/mobile.png'
import mail from './images/mail.png'




class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="ProfileHeader ">
          <div className="container">
            <a className="ProfileHeaderLink" href="#">Home</a>  <a  className="ProfileHeaderLink" href="#">/Profile</a>
            <p className="ProfileHeaderString">Profile</p>
           </div> 
        </div>
        <div className="container accordoin">
        <Accordion title="Accordion Title Here"/>
          </div>
      </div>
    );
  }
}


var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      
      //  <div className={this.state.class}>
       <div className="section open"> 
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="hr"> </div>
        <div className="articlewrap">
          <div className="article">

            {this.props.children}
            
          </div>

        </div>
       
      </div>
   
    );
  }
});


var createReactClass = require('create-react-class');
var CustInputs = createReactClass({
  render: function()
   {
    return <div>
      <span >{this.props.placeholder}</span>
      <img src={this.props.logo} title="User"/>
      <input type="input" value={this.props.value}/>
      </div>;
  }
});

var CustSpan = createReactClass({
  render: function()
   {
    return <div>
       <p>{this.props.para}</p>
       <span >{this.props.span}</span>
      </div>;
  }
});


var UserProfile = createReactClass({
  render: function()
   {
    return <div>
       <div className="row  Personal">
       <div className="col-sm-3  profile">

             <img className="profile" src="https://www.w3schools.com/bootstrap/bird.jpg" className="rounded-circle img-thumbnail" alt="Cinque Terre"  width="150" height="150"> 
              </img>
       </div>
       <div className="col-sm-9">

         <div className="profile_name">
             <CustInputs placeholder="NAME" value="S Vadivellan" logo={profile}/>
         </div>
         <div className="profile_email">
             <CustInputs placeholder="EMAIL" value="vadivelan@divum.in" logo={mail}/>
         </div>
         <div className="profile_mobilenumber">
             <CustInputs placeholder="MOBILE NUMBER" value="08148579632" logo={mobile}/>
         </div>
         <div className="profile_address">
         <CustInputs placeholder="ADDRESS" value="no 72 and 73 Divum Corp pvt limited domulur 560071" logo={address}/>

           <div className="List_picker row ">

            <div className="State">   
            
               <p className="State_head" >State</p>   
               <p className="State_value" >Karnataka</p>   
          
           </div>
           <div className="City">
               <p className="State_head" >City</p>   
               <p className="State_value" >Bangalore</p> 

           </div>
           </div>
         </div>
        

       
       

         <div className="PROOFS row">
        
         
         <div className="PAN ">
              <CustSpan para="PAN" span="pan.jpg"/>     
         </div>
         <div className="ADTHAR ">
              <CustSpan para="ADTHAR" span="adthar_card.jpg"/>   
         </div>
         <div className="PASSPORT ">
              <CustSpan para="PASSPORT" span="passport_card.jpg"/> 
         </div>
        
         </div>
         <a className="btn">EDIT</a>

         <form className="float-label" spellcheck="false">
         
         
       
      

        

         
         
        
       
         
       </form>
       </div>

  </div>
      </div>;
  }
});








var Accordion = React.createClass({
  render: function() {
    return (
      <div className="main">
       

        <Section className="section open" title="Personal Information "> 
          <UserProfile/>
        </Section>
        
        <Section title="Change Password">   <div className="control">
           

           <div>
            <input type="text" placeholder="Old-Password" required />
            <label for="title">Old-Password</label>
            </div>
            <div>
            <input type="text" placeholder="New-Password" required />
            <label for="title">New-Password</label>
            </div>
            <input type="submit" value="Submit" />  
         </div>
        </Section>
        <Section title="Bank Account">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Authentication Setting">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Wallet Setting">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="Notification">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>
    );
  }
});
export default App;
