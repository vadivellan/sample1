import React, { Component } from 'react';
import { Collapse,Alert, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Button,CardBlock, Card,Container, Row, Col,Jumbotron } from 'reactstrap';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from './images/profile.png'
import address from './images/address.png'
import mobile from './images/mobile.png'
import mail from './images/mail.png'
import autosell from './images/autosell.png'
import wallet from './images/wallet.png'
import paperwallet from './images/paperwallet.png'
import details from './images/details.png'
import qrcode from './images/qrcode.png'



var createReactClass = require('create-react-class');


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="ProfileHeader ">
          <div className="container">
            <a className="ProfileHeaderLink" href="#df">Home</a>  <a  className="ProfileHeaderLink" href="#dd">/&ensp;Profile</a>
            <p className="ProfileHeaderString"> Profile</p>
           </div> 
        </div>
        <div className="container accordoin">
        <Accordion title="Accordion Title Here"/>
          </div>
      </div>
    );
  }
}



var Section = createReactClass({

  
  handleClick: function(){

    
    if(this.state.open) 
    {
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
      
       <div className={this.state.class}>
   {/* <div className="section open">  */}
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



var CustInputs = createReactClass({
  render: function()
   {
    return <div>
      <span >{this.props.placeholder}</span>
      <img src={this.props.logo} title="User" alt="text"/>
      <input type="input" value={this.props.value} readonly disabled/>
      </div>;
  }
});
var CustInputs1 = createReactClass({
  render: function()
   {
    return <div>
      <span >{this.props.placeholder}</span>
      <input type="input" value={this.props.value} readonly disabled/>
      </div>;
  }
});
var CustInputs2 = createReactClass({
  render: function()
   {
    return <div>
      <span >{this.props.placeholder}</span>
      <textarea type="input" value={this.props.value}  wrap="hard" readonly disabled/>
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

             <img className="profile rounded-circle img-thumbnail" src="https://www.w3schools.com/bootstrap/bird.jpg" alt="Cinque Terre"  width="150" height="150"/> 
             
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


        

       
       

         <div className="PROOFS ">

         <p>Documents Upload</p>  
        
         
         <div className="PAN display_inline">
              <CustSpan para="PAN" span="pan.jpg"/>     
         </div>
         <div className="ADTHAR display_inline ">
              <CustSpan para="ADTHAR" span="adthar_card.jpg"/>   
         </div>
         <div className="PASSPORT display_inline ">
              <CustSpan para="PASSPORT" span="passport_card.jpg"/> 
         </div>
        
         </div>
         <a className="edit">EDIT</a>

         <form className="float-label" spellcheck="false">

         
       </form>
       </div>

  </div>
      </div>;
  }
});








class Accordion extends React.Component{

  constructor(props) {
    super(props);
    this.personalInfo = this.personalInfo.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
    this.BankAccount = this.BankAccount.bind(this);
    this.AuthenticationSetting = this.AuthenticationSetting.bind(this);
    this.WalletSetting = this.WalletSetting.bind(this);
    this.Notification = this.Notification.bind(this);
    this.state = { 
      personalInfocollapse: false,
      ChangePasswordcollapse: false,
      BankAccountcollapse: false,
      AuthenticationSettingcollapse: false,
      WalletSettingcollapse: true,
      Notificationcollapse: false,

     };
  }

  personalInfo() {
    this.setState({ personalInfocollapse: !this.state.personalInfocollapse });
  }
  ChangePassword() {
    this.setState({ ChangePasswordcollapse: !this.state.ChangePasswordcollapse });
  }
  BankAccount()
  {
    this.setState({ BankAccountcollapse: !this.state.BankAccountcollapse });
  }
  AuthenticationSetting() {
    this.setState({ AuthenticationSettingcollapse: !this.state.AuthenticationSettingcollapse });
  }
  WalletSetting() {
    this.setState({ WalletSettingcollapse: !this.state.WalletSettingcollapse });
  }
  Notification()
  {
    this.setState({ Notificationcollapse: !this.state.Notificationcollapse });
  }
  render() {
    return (
      <div className="main">
          <div className="sectionhead" onClick={this.personalInfo}>Personal Information </div>
         
                       <Collapse isOpen={this.state.personalInfocollapse}>
                          <UserProfile/>
                       </Collapse>
                       <hr/>
          
          <div onClick={this.ChangePassword} className="sectionhead">Change Password</div>
        
                      <Collapse isOpen={this.state.ChangePasswordcollapse}>
                                  <ChangePassword/>
                      </Collapse>
                      <hr/>

          <div onClick={this.BankAccount} className="sectionhead">Bank Account</div>
          
                      <Collapse isOpen={this.state.BankAccountcollapse}>
                                  <BankDetails/>
                      </Collapse>
                      <hr/>
          <div onClick={this.AuthenticationSetting} className="sectionhead">Authentication Setting</div>
          
                      <Collapse isOpen={this.state.AuthenticationSettingcollapse}>
                                  <AuthenticationSetting/>
                      </Collapse>
                      <hr/>
          <div onClick={this.WalletSetting} className="sectionhead">Wallet Setting</div>
          
                      <Collapse isOpen={this.state.WalletSettingcollapse}>
                                  <WalletSetting/>
                      </Collapse>
                      <hr/>

          <div onClick={this.Notification} className="sectionhead">Notification</div>
          
                      <Collapse isOpen={this.state.Notificationcollapse}>
                                  <Notification/>
                      </Collapse>  
                      <hr/>                                  
       
      </div>
    );
  }
}


var ChangePassword = createReactClass({
  render: function()
   {
    return <div>
       <div className="control ">  
       <div  className="control ">
        <input type="text" placeholder="OLD PASSWORD" required />
        <label for="title">OLD PASSWORD</label>
        </div >
        <div  className="control ">
        <input type="text" placeholder="NEW PASSWORD" required />
        <label for="title">NEW PASSWORD</label>
        </div>
        <div  className="control ">
        <input type="text" placeholder="CONFIRM NEW PASSWORD" required />
        <label for="title">CONFIRM NEW PASSWORD</label>
        </div>
        <input  className="change" type="submit" value="CHANGE"/> 
       </div>
      </div>;
  }
});

var BankDetails = createReactClass({
  render: function()
   {
    return<div className="BankDetails "> 

         <p>Enter details of the bank accounts to which you wish to receive INR when you sell bitcoin The bank account hould belong to the same person/organization operating this Unocoin account</p>
          <div className="account_name">
             <CustInputs1 placeholder="NAME" value="S Vadivellan"/>
         </div> 
         <div className="account_address">
             <CustInputs1 placeholder="ADDRESS" value="G13,D block,Elaoance pinnacle,10th croess,4th main,Hanumantha nagar,Bangalore"/>
         </div> 
         <div className="account_number">
             <CustInputs1 placeholder="ACCOUNT NUMBER" value="0029475296461"/>
         </div> 
         <div className="account_Bank">
             <CustInputs1 placeholder="BANK" value="State Bank"/>
         </div> 
         <div className="account_ifsc">
             <CustInputs1 placeholder="IFSC" value="SBYM3836921"/>
         </div> 
        
         <btn  className="remove" type="submit" value="CHANGE">REMOVE ACCOUNT </btn> 
         <btn  className="edit" type="submit" value="CHANGE">EDIT DETAILS </btn> 
       
      </div>;
  }
});

var AuthenticationSetting = createReactClass({
  render: function()
   {
    return<div className="AuthenticationSetting "> 

         <p>Would you like to receive all the transaction alerts as </p>
         <span>OTP &ensp;&ensp;&ensp;</span> 
         
       <label className="switch">
          <input type="checkbox"/>
         <span className="slider round"></span>
       </label>
        
        
       

         <span>&ensp;2 Factor Authentication</span> 

          <div className="why2fa">
            <h6>Why 2FA over OTP?</h6>
            <ul><li> <i class="icon-circle text-success" ></i>  While receiving OTP on your mobile device looks like “Something you have control over”, your OTP is actually in possession with the origin server and the carrier transmitter making it vulnerable.</li>
			 											
			   											<li> <i class="icon-circle text-success" ></i>  2-Factor Authentication tokens are nothing but extension of the capability to generate user specific OTPs at client’s device rather than transmission of data over network.</li>
														
			    										<li> <i class="icon-circle text-success" ></i>  OTP data is usually delivered via a completely-independent network which reduces the chances of eavesdropping, while 2-Factor Authentication is initiated synchronously at both client and server end without any data transmission thus more secure.</li></ul>
         </div> 
         
         <div className="why2fa1">
            <h6>Google Authenticator/2 Factor Authentication</h6>
             <p>
             Google Authenticator on your mobile phone can act as a 2nd factor of authentication for you to gain access to Unocoin. Google Authenticator generates 6 digit numbers which keeps changing every 30 seconds that you need to key in while logging into Unocoin. Google Authenticator is available for Android, iPhone and Blackberry phones. After activating Google Authenticator, you can also have yourself key in the 6 digit number when your wallet is about to send more than a threshold number of bitcoins set by you with in 24 hours. After Enabling, you will need to activate it by using the 6 digit code from your mobile phone before the 2 factor authentication is active on your account. To install google authenticator on your mobile visit https://support.google.com/accounts/answer/1066447?hl=en.</p>
         </div> 
        
      
       
      </div>;
  }
});

var Notification = createReactClass({
  render: function()
   {
    return<div className="Notification"> 

         <p>Manage your notifications on updates,transactions and more</p>
         <div className="profile_email">
         <CustInputs placeholder="EMAIL" value="vadivelan@divum.in" logo={mail}/>
       </div>
     <div className="profile_mobilenumber">
         <CustInputs placeholder="MOBILE NUMBER" value="08148579632" logo={mobile}/>
     </div>
        
        <btn  className="remove" type="submit" value="CHANGE">UPDATE DETAILS</btn> 
         <btn  className="edit" type="submit" value="CHANGE">ADD ALTERNATIVE</btn> 
        
       

         

          <div className="Manage_notifications">
            <h6>Manage notifications</h6>
            <span className="items">NOTIFICATION</span> 
            <div  className="display_inline">
             <span className="switch switch1">EMAIL ID </span>  
              <span className="switch">MOBILE</span>
              </div>
            <ul>


             
             <li> 
                    <span className="items">Sending BTC from your wallet</span> 
                    <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                    </div> 
               </li>
              <li> <span className="items">Receiving BTC from your wallet</span> 
                  <div  className="display_inline">
                 <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">Buying BTC</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label> 
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">Selling BTC</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">OTP</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
               <li> <span className="items">Newsletter/updates</span> 
               <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>

            </ul>  

            
              
             
         </div> 
         
         <div className="Logout">
            <h5>Logout From All Devices</h5>
             <p>Click the button below to logout from all device and merchant POS
             </p>
         </div> 
        
         <btn  className="edit" type="submit" value="CHANGE">LOGOUT EVERYWHERE ELSE</btn> 
      
       
      </div>;
  }
});
var Notification = createReactClass({
  render: function()
   {
    return<div className="Notification"> 

         <p>Manage your notifications on updates,transactions and more</p>
         <div className="profile_email">
         <CustInputs placeholder="EMAIL" value="vadivelan@divum.in" logo={mail}/>
       </div>
     <div className="profile_mobilenumber">
         <CustInputs placeholder="MOBILE NUMBER" value="08148579632" logo={mobile}/>
     </div>
        
        <btn  className="remove" type="submit" value="CHANGE">UPDATE DETAILS</btn> 
         <btn  className="edit" type="submit" value="CHANGE">ADD ALTERNATIVE</btn> 
        
       

         

          <div className="Manage_notifications">
            <h6>Manage notifications</h6>
            <span className="items">NOTIFICATION</span> 
            <div  className="display_inline">
             <span className="switch switch1">EMAIL ID </span>  
              <span className="switch">MOBILE</span>
              </div>
            <ul>


             
             <li> 
                    <span className="items">Sending BTC from your wallet</span> 
                    <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                    </div> 
               </li>
              <li> <span className="items">Receiving BTC from your wallet</span> 
                  <div  className="display_inline">
                 <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">Buying BTC</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label> 
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">Selling BTC</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
              <li> <span className="items">OTP</span> 
              <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>
               <li> <span className="items">Newsletter/updates</span> 
               <div  className="display_inline">
                      <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>  
                      <label className="switch"><input type="checkbox"/> <span className="slider round"></span></label>
                      </div> 
               </li>

            </ul>  

            
              
             
         </div> 
         
         <div className="Logout">
            <h5>Logout From All Devices</h5>
             <p>Click the button below to logout from all device and merchant POS
             </p>
         </div> 
        
         <btn  className="edit" type="submit" value="CHANGE">LOGOUT EVERYWHERE ELSE</btn> 
      
       
      </div>;
  }
});

var WalletSetting = createReactClass({
  render: function()
   {
    return<div className="WalletSetting"> 
    <div className="row">
  
      <div className="col-md-6">

         <div className="netki">
         <img src={wallet} title="User" alt="text"/>
         <img src={details} className="details" title="User" alt="text"/>
           <h5>Netki</h5>
           <p>Set a personalized memorable name for your wallet address</p>
           <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>
           </div>
      </div>
  
      <div className="col-md-6">

         <div className="AutoSell">
         <img src={autosell} title="User" alt="text"/>
         <img src={details} className="details" title="User" alt="text"/>
         <h5>AutoSell</h5>
         <p>Sell Bitcoins at current Selling price automatically</p>
          <label className="switch switch1"><input type="checkbox"/> <span className="slider round"></span></label>
          </div>
      </div>
 
      <div className="col-md-6">
      <div className="PaperWallet">
      <img src={paperwallet} title="User" alt="text"/>
      <img src={details} className="details" title="User" alt="text"/>
         <h5>Paper Wallet</h5>
         <p>Create bitcoin private and public key pairs through javascript</p>
          <btn  className="edit" type="submit" value="CHANGE">GENERATE NEW ADDRESS</btn> </div>
       </div>          
       </div> 

      <PaperWallet/> 
   
         


      

      </div>;
  }
});


var PaperWallet=createReactClass({
  render: function()
   {
    return<div className="PaperWallet"> 
       <img src={paperwallet} title="User" alt="text"/>
       <h5>Paper Wallet</h5>
         <p>Create bitcoin private and public key pairs through javascript webpage to generate offline paper wallets that you can print and store securely. These addresses are generated using client side javascript which means our servers would not know what address your browser is generating for you. Before you use this address on the paper wallet, make sure you have taken a print out of the address-private key pair (Do not store this on your computer as it would defeat the protection that these paper wallets provide). Once you hit the "Print" button, you will see an option to add that address to your address book along with a nickname. Your address book will be visible when you try to send bitcoin from your wallet and if you have added a nickname to all addresses in your book, now is when it would come in handy.</p>
        
          <p>Generate PaperWallet :Warning and understand the instruction above before you use this feacture!</p>

          <Card className="QRAdress">
            <div>
            <img src={qrcode} title="User" alt="text"/>
             </div>
             <div>
            <img src={qrcode} title="User" alt="text"/>
             </div>
             <div>
             <btn  className="edit" type="submit" value="CHANGE">GENERATE NEW ADDRESS</btn> 
             <btn  className="edit" type="submit" value="CHANGE">GENERATE NEW ADDRESS</btn> 
             <btn  className="edit" type="submit" value="CHANGE">GENERATE NEW ADDRESS</btn> 
            
             </div>
            </Card>




      



      </div>;
  }
});

export default App;
