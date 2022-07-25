import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './jsx/Library';
import Clock from './rendering_elements/Clock';
import CommentList from './component_props/CommentList';
import NotificationList from './state_lifecycle/NotificationList';
import Accommodate from './hooks/Accommodate';
import ConfirmButton_class from './handling_events/ConfirmButton_class';
import ConfirmButton_function from './handling_events/ConfirmButton_function';
import LandingPage from './conditional_rendering/LandingPage'
import AttenanceBook from './list_key/AttendanceBook';
import SignUp from './forms/SignUp';
import Calculator from './lifting_state_up/Calculator';
import ProfileCard from './composition_inheritance/ProfileCard';
import DarkOrLight from './context/DarkOrLight';
import Blocks from './styling/Blocks';

//styling
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
