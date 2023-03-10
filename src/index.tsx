// @ts-ignore
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/index'
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  
);
root.render(
  <StrictMode>
 
    <BrowserRouter>    
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
 
  </StrictMode>
);

 
