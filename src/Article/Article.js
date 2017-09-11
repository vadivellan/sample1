
import React, { Component } from 'react';

import './style.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import banner from '../images/banner.jpeg'
import likes from '../images/likes.png'
import author from '../images/author.png'






class Article extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="InsightHeader ">
          <div className="container">
            <a className="ProfileHeaderLink" href="#">Home</a>  <a  className="ProfileHeaderLink" href="#">/ Insights</a>
            <p className="ProfileHeaderString">Insights</p>
           </div> 
        </div>

    
    <div className="bannerImage" >


       <div className="cover container">
       
       <div className="container">
       <h1 className=""><strong> Thought Bitcoin Was Dead? 2016 was the Year It went Big</strong></h1>
       </div>
      </div>

       <div className="container authorHead" >
     

         
       
         <img src={author} className="author" alt="" />
         

         <div className="postDate">
        
          <span><strong>By Abhinand Kaseti | </strong></span>
          <span>June 3,2017</span>
          <img src={likes} className="likes" alt="" />
          


          
          </div>
          <div className="container row well">
            <div className="col-md-9">
                <div className="articles">
                    <p className="articlesStrong">Over the past few years, Bitcoins have been gaining significant importance around the world. Indeed, it is the world’s leading crypto-currency and the year’s best-performing currency. It has gained a staggering 35 percent across last year. Achieving this recognition has not been easy. Its association with crime, that is, the money laundering and narcotics through the infamous online black markets like Silk Road & Alphabay, and the alarming amount of price volatility left regular financial-market participants wary due to its potential risks.
                      </p >
                    <p>Effect of Bitcoin on Banks and Industries
The potential impact of the digital currency on the central banking should not be taken lightly. The Bank for International Settlements (BIS), jointly owned by the world’s leading central banks, noted in November that bitcoin could interrupt the ability of central banks to exert control over the economy, as well as issuing money.
As of now, many central banks are closely observing developments in the growth of bitcoin. Many others, however, have already responded by sending out proposals for the issuance of a digital version of their fiat currencies. The central banks of Canada and Ecuador are a few among the first to explore such opportunities.
In recent years, the influence of Bitcoin has brought change to variety of industries.
Industries that have begun to accept Bitcoin as payment are mostly online companies themselves. The company Cheapname, that provide services which involve domain name registry, is accepting bitcoins as a mode of payment. Other digital companies like WordPress, which provides resources to set up professional and private blogs accept bitcoins. The company Steam — is a computer game distributor and a general gaming platform — accepts these currencies too.
The success has even brought Bitcoin from the digital realm to the real world. A founder with a well-documented penchant for R&D and all things state-of-the-art, it is sort of predictable that Virgin Galactic accepts bitcoin as a payment method. The same also holds true for a car company — Tesla and its founder- Elon Musk, which accepts Bitcoins.
</p>    
<p>Over the past few years, Bitcoins have been gaining significant importance around the world. Indeed, it is the world’s leading crypto-currency and the year’s best-performing currency. It has gained a staggering 35 percent across last year. Achieving this recognition has not been easy. Its association with crime, that is, the money laundering and narcotics through the infamous online black markets like Silk Road & Alphabay, and the alarming amount of price volatility left regular financial-market participants wary due to its potential risks.
                      </p >
                      <p>Over the past few years, Bitcoins have been gaining significant importance around the world. Indeed, it is the world’s leading crypto-currency and the year’s best-performing currency. It has gained a staggering 35 percent across last year. Achieving this recognition has not been easy. Its association with crime, that is, the money laundering and narcotics through the infamous online black markets like Silk Road & Alphabay, and the alarming amount of price volatility left regular financial-market participants wary due to its potential risks.
                      </p >
                </div>
                <hr/>
            <div className="comments">
                <h3>Comments</h3>
                <div className="hr"></div>
                <div className="media">
                        <div className="media-left">
                            <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" className="media-object commentImage"  />
                        </div>
                        
                        <div className="media-body">
                            <h4 class="media-heading">Left-aligned</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>
            </div>    






            </div>  
            <div className="col-md-3">
                 <div  className="relate_article_all">
                    <h5>RELATED ARTICLE</h5>
                    <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                               </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                             <p className="Date">April 15,2017</p>
                             <p className="title">A Fort in the Road</p>
                             <p className="read">READ ARTICLE</p>
                         </div>   

                    </div>
                    <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                               </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                         <p className="Date">April 15,2017</p>
                         <p className="title">A Fort in the Road</p>
                         <p className="read">READ ARTICLE</p>
                         </div>   

                    </div>  

                    <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                               </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                         <p className="Date">April 15,2017</p>
                         <p className="title">A Fort in the Road</p>
                         <p className="read">READ ARTICLE</p>
                         </div>   

                    </div> 

                    <h6><strong>View More..</strong></h6>   
                    <hr></hr>  
                 </div>
                 <div  className="relate_article_own">
                 <h5><strong>OTHER ARTICLES BY</strong></h5>
                
                 <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                               </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                         <p className="Date">April 15,2017</p>
                         <p className="title">A Fort in the Road</p>
                         <p className="read">READ ARTICLE</p>
                         </div>   

                    </div>
                    <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                               </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                         <p className="Date">April 15,2017</p>
                         <p className="title">A Fort in the Road</p>
                         <p className="read">READ ARTICLE</p>
                         </div>   

                    </div>  

                    <div  className="relate_article_Cell">
                        <div className="relate_article_Cell_image">

                              <div className="article_Cell_image" >
                         </div>   
                         </div>
                         <div className="relate_article_Cell_Info">
                         <p className="Date">April 15,2017</p>
                         <p className="title">A Fort in the Road</p>
                         <p className="read">READ ARTICLE</p>
                         </div>   

                    </div> 
                    <h6><strong>View More..</strong></h6> 
                    <hr></hr>    
                 </div> 


                <div className="tags">
                     <h5><strong>TAGS</strong></h5>
                     <hr></hr>    

                      <div><a><span>BITCOIN</span></a></div>
                      <div><a><span>CRYPTO CURRENCY</span></a></div>
                      <div> <a><span>BLOCKCHAIN</span></a></div>
                      <div> <a><span>DIGITAL CURRENCY</span></a></div>
                      <div> <a><span>SECURITY</span></a></div>


                  </div>    

            </div>  


                
          </div>

       </div>
    </div>


    

    
  




    </div>
    );
  }
}

export default Article;
