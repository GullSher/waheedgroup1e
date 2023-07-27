import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import reportWebVitals from './reportWebVitals';

// import './AssetsMain/Css/themify-icons.css';
// import './AssetsMain/Css/icomoon.css';
import './AssetsMain/Css/plugins.css';
// import './AssetsMain/Css/animate.css';
// import './AssetsMain/Css/rev-settings.css';
import './AssetsMain/Css/styles-5.css';
import 'toastr/build/toastr.min.css'; // Import toastr.min.css
import './AssetsMain/Css/style.css';
import './AssetsMain/Css/default.css';
// import './AssetsMain/Css/slicknav.css';
// import './AssetsMain/Css/owl.carousel.css';
// import './AssetsMain/Css/owl.video.play.html';
// import './AssetsMain/Css/'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../src/AssetsMain/Css/bootstrap.min.css';
// import '../src/AssetsMain/Css/navigation.css';
import '../src/AssetsMain/Css/Pages.css';
import '../src/AssetsMain/Css/plugins.css';
// import '../src/AssetsMain/Css/slicknav.css';
// import '../src/AssetsMain/Css/themify-icons.css';
// import '../src/AssetsMain/Css/rev-settings.css';
// import '../src/AssetsMain/Css/themify-icons.css';
// import '../src/AssetsMain/Css/animate.css';
// import '../src/AssetsMain/Css/font-awesome.min.css';
// import '../src/AssetsMain/Css/fontawesome-all.css';
// import '../src/AssetsMain/Css/icomoon.css';
// import '../src/AssetsMain/Css/owl.carousel.css';
// import '../src/AssetsMain/Css/responsive.css';

//  < link rel = "stylesheet" href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" >
//  < link rel = "stylesheet" href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" >





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
