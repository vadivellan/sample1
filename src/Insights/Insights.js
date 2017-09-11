import React, { Component } from 'react';
import './style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Button, Icon} from 'react-materialize'


import banner from '../images/banner.jpeg'
import likes from '../images/likes.png'
import author from '../images/author.png'
import jQuery from 'jquery';
var createReactClass = require('create-react-class');
var Coverflow = require('react-coverflow');

class Insights extends Component {
    render() {
      return (
        <div className="App ">
          <div className="InsightHeader ">
            <div className="container">
              <a className="ProfileHeaderLink" href="#">Home</a>  <a  className="ProfileHeaderLink" href="#">/ Insights</a>
              <p className="ProfileHeaderString">Insights</p>
             </div> 
          </div>
         
          <ArticlesCarouselView/>
         <ArticlesView/>
         

         

           
       </div>
      );
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
                <li ><a  className="active" href="#">Recent</a></li>
                <li><a href="#">Most Visited</a></li>
                <li><a href="#">Most Popular</a></li>
               
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
                 <img  className="Article_bfImage1"src={banner}></img>
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
                 <img  className="Article_bfImage1"src={banner}></img>
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
  