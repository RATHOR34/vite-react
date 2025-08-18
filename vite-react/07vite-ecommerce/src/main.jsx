import 'bootstrap/dist/css/bootstrap.min.css';
 
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional for JS components
 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Provider } from "react-redux"
import { Provider } from   'react-redux' 
import { store } from "./redux/store.js"

createRoot(document.getElementById('root')).render(
    <Provider store={ store }> 
      <App />
    </Provider>
)
