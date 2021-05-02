import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextAuthProvider } from './components/store/context-auth';


ReactDOM.render(<ContextAuthProvider><App /></ContextAuthProvider>, document.getElementById('root'));
