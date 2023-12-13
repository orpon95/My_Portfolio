import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import MainLayout from './component/MainLayout/MainLayout.jsx';
import AboutMe from './component/AboutMe/AboutMe.jsx';
import Contact from './component/Contact/Contact.jsx';
import Projec from './component/Project/Projec.jsx';
import DonationDetails from './component/Details/DonationDetails.jsx';
import TechcityDetails from './component/Details/TechcityDetails.jsx';
import JobDetails from './component/Details/JobDetails.jsx';
import SurveyDetails from './component/Details/SurveyDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"aboutme",
        element:<AboutMe></AboutMe>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"project",
        element:<Projec></Projec>
      },
      {
        path:"donationDetails",
        element:<DonationDetails></DonationDetails>
      },
      {
        path:"techDetails",
        element:<TechcityDetails></TechcityDetails>
      },
      {
        path:"jobDetails",
        element:<JobDetails></JobDetails>
      },
      {
        path:"surveyDetails",
        element:<SurveyDetails></SurveyDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
