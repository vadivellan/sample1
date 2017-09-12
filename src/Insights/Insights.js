import React, { Component } from 'react';
import './style.css';

import {Carousel} from 'react-materialize'


  
import { Tabs,Tab,ButtonToolbar ,Button,ButtonGroup,DropdownButton,MenuItem,Navbar,Nav,NavItem,NavDropdown} from 'react-bootstrap';


import banner from '../images/banner.jpeg'
var createReactClass = require('create-react-class');


class Insights extends Component {
    render() {
      return (
        <div className="App ">
             <MyComponent />
          <div className="InsightHeader ">
            <div className="container">
              <a className="ProfileHeaderLink" href="#gg">Home</a>  <a  className="ProfileHeaderLink" href="#dgfd">/ Insights</a>
              <p className="ProfileHeaderString">Insights</p>
             </div> 
          </div>
         
          <ArticlesCarouselView/>
         <ArticlesView/>
        
         

         

           
       </div>
      );
    }
  }




  const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
  
  function renderDropdownButton(title, i) {
    return (
      <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>Active Item</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }



  class MyComponent extends React.Component {

     renderDropdownButton(title, i) {
        return (
          <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        );
      }


  render() {
    return (
        <div>
<ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
  </div>
    );
  }
  
  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
  }
}

  var ArticlesCarouselView = createReactClass({
    render: function()
     {
      return <div>
      
          <div className="articlesCarosuelView container">
              <div>
              <p>Feature Articles</p>
              <ArticlesCarouselViewHead/> 
              </div>
            
          </div>
        </div>;
    }
  });

  var  ArticlesView = createReactClass({
    render: function()
     {
      return <div>
      
          <div className="container ArticlesView">
            <ul className="ArticlesView">
                <li ><a  className="active" href="#fdgfd">Recent</a></li>
                <li><a href="#dfgdf">Most Visited</a></li>
                <li><a href="#fdgdf">Most Popular</a></li>
               
            </ul>
        </div>
        <Articles/>
        </div>
    }
  });

  
  var  Articles = createReactClass({
    render: function()
     {
      return <div>
         <div className="container  Articles">

             <div className="row">
                  <div className="col-lg-4"><Article/> </div>
                  <div className="col-lg-4"><Article/></div>
                  <div className="col-lg-4"><Article/></div>
              </div>
              <div className="row">
                  <div className="col-lg-4"><Article/> </div>
                  <div className="col-lg-4"><Article/></div>
                  <div className="col-lg-4"><Article/></div>
              </div>
              <div className="row">
                  <div className="col-lg-4"><Article/> </div>
                  <div className="col-lg-4"><Article/></div>
                  <div className="col-lg-4"><Article/></div>
              </div>

              <Loadmore/>

              
          
        </div>
        </div>
    }
  });

  var  Article = createReactClass({
    render: function()
     {
      return <div>
         <div className="Article ">


         <div className="Article_content card">
             <div className="Article_bfImage">
                 <img  className="Article_bfImage1"src={banner} alt="text"></img>
            </div>
            <div className="Article_Title container">
                 <h6>For The Love of Bitcoin</h6> 
                 <p>If you sold 10% of your holdings for the current market price of $1100, you're probably not going to too baddly off and if you buy them back once the scalling</p>
            </div>

            <Readmore/>
             
         </div>  
        </div>
        </div>
    }
  });
  var  Article1 = createReactClass({
    render: function()
     {
      return <div>
         <div className="Article ">


         <div className="Article_content card">
             <div className="Article_bfImage">
                 <img  className="Article_bfImage1"src={banner} ></img>
            </div>
            <div className="Article_Title container">
                 <h6>For The Love of Bitcoin</h6> 
                 
            </div>

            <Readmore/>
             
         </div>  
        </div>
        </div>
    }
  });


  var Readmore = createReactClass({
    render: function()
     {
      return <div className=" Readmore container">
        <a className="left">READMORE</a> <a className="right">share</a>
        </div>
    }
  });



  var Loadmore = createReactClass({
    render: function()
     {
      return <div className=" Loadmore container">

            <div className="row">
                  <div className="col-lg-4"> </div>
                  <div className="col-lg-4"> <div className="LoadmoreLink">
          <a>LOAD MORE</a>
          </div></div>
                  <div className="col-lg-4"></div>
              </div>
         
        </div>
    }
  });


  

  var ArticlesCarouselViewHead=createReactClass({

    render:function()
    {
        return  <div>

            
<Carousel options={{ fullWidth: false , duration :1 ,dist:-50,shift:20 } }>
<div className='sample'>
   <Article1/>
</div>
<div className='amber'>
    <Article1/>
</div>
<div className='green'>
    <Article1/>
</div>
<div className='blue'>
   <Article1/>
</div>
<div className='amber'>
  <Article1/>
</div>
</Carousel>




            </div>

    }


  });






  
  export default Insights;
  