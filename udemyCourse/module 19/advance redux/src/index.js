import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import myStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={myStore}><App /></Provider>);
