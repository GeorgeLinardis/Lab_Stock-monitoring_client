import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'


/**
 * BrowserRouter
 * https://reactrouter.com/en/main/router-components/browser-router
 * Stores the current location in the browser's address bar using
 * clean URLs and navigates using the browser's built-in history
 * stack.
 */
createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
    basename="/stock-watch"
  >
    <App />
  </BrowserRouter>
)
