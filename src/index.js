import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Article from './Article/Article.js'
import Insights from './Insights/Insights.js'
import Test from  './Test/Test.js'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<Article/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root1'));
registerServiceWorker();
