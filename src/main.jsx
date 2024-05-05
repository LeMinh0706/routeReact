import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import App from './App.jsx'
import About from './routes/About.jsx';
import Reviews from './routes/Reviews.jsx';
import Users from './routes/Users.jsx';
import Home from './routes/Home.jsx';

import { navLinks } from './constant/index.js';



import './index.css'
import Navbar from './components/Navbar.jsx';
import NotFound from './routes/NotFound.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     errorElement: <Home />,
//     children: [
//       { index: true, element: <Home /> }
//     ]
//   }
// ])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='users' element={<Users />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
