import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/home";
import AdminDashboard from './pages/admin/AdminDashboard';
// import ViewPage from "./pages/viewpage";
import FirstPage from "./pages/landing";
import Product from "./pages/product";
import SignUpForm from "./pages/register";
// import Login from "./pages/Login";
// import Imageuploadpage from "./pages/imageuploadpage";
import Addtocart from "./pages/addtocart";
import Imageuploadpage from "./pages/imageuploadpage";
import AddProductForm from "./pages/upload";
import Login33 from "./pages/login33";

import YourComponent from "./pages/viewpage";
import EmbeddedCanvas from "./pages/aboutus";
import Adminlogin from "./pages/admin/adminlogin";
import Signup from "./pages/signup";
import Accounts from "./pages/accounts";
import UserProfile from "./pages/accounts";
import Description from "./pages/upload";
import Feedback from "./pages/feedback";
import FeedbackList from "./pages/feedbacklist";

// import Login33 from "./pages/login33";
// import Login33 from "./pages/login33"

function App() {
    console.log('App component rendered');

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/view' element={<YourComponent />} />
                <Route path='/admin' element={<AdminDashboard />} />
                {/*<Route path='/view' element={<ViewPage />} />*/}
                <Route path='/landing' element={<FirstPage />} />
                <Route path='/register' element={<SignUpForm />} />
                <Route path='/product' element={<Product />} />
                <Route path='/upload' element={<Imageuploadpage />} />
                {/*<Route path='/image' element={<AddProductForm />} />*/}
                <Route path='/adc' element={<Addtocart />} />
                <Route path='/login' element={<Login33 />} />
                <Route path='/aboutus' element={<EmbeddedCanvas />} />
                <Route path='/adminlogin' element={<Adminlogin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/accounts' element={<UserProfile />} />
                <Route path='/des' element={<Description />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/feedback/list' element={<FeedbackList/>} />


            </Routes>
        </Router>
    );
}

export default App;
