import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Article from './Article/Article.js'
import Insights from './Insights/Insights.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Insights/>, document.getElementById('root'));
registerServiceWorker();
