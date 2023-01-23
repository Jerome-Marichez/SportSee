import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header';
import Sidebar from "./components/sidebar/siderbar";
import "./index.css";

const root = document.getElementById('root') as HTMLBodyElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Header />
    <Sidebar />
  </React.StrictMode>,
)
