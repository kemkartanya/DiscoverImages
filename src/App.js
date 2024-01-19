import './App.css';
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<NotFound />} />
      <Route path='/search/:q' element={<Search />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;