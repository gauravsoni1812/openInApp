/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Upload from './components/Upload.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/upload",
    element: <Upload />,
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <GoogleOAuthProvider clientId="878235749453-8qejpp6ctirnb7qu2492obp8a1mmuerk.apps.googleusercontent.com">
      <RouterProvider router={router} />
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
